import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Together from "together-ai";
import { auth } from "~/server/auth";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";
import { fal } from "@fal-ai/client";

fal.config({
  credentials: process.env.FAL_KEY!,
});

const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY!,
});

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const session = await auth();
    const user = session?.user;
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }
    const body = await request.json();
    const { url } = body;

    // Add timeout promise
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), 500000),
    );

    const resultPromise = fal.subscribe("fal-ai/flux-pro/v1.1-ultra/redux", {
      input: {
        prompt:
          "Transform this selfie into a vibrant scene set in Sbiba, Tunisia, around 0-500 AC, while preserving the facial features and gender of the person in the uploaded photo. The image should feature a lush landscape with ancient mountains and fertile valleys, reminiscent of the Kasserine region. Dress the subject in traditional attire from that era, influenced by Berber and ancient Mediterranean cultures, using colorful woven fabrics and ornamental jewelry that reflect the individual's style. Surround the subject with elements of daily life such as people engaged in farming, pottery making, or trading in a bustling marketplace. Incorporate historical features like stone structures or megalithic monuments, mirroring the architectural styles of the time. Keep the human elements from the uploaded photo as intact as possible.",
        num_images: 1,
        enable_safety_checker: true,
        safety_tolerance: "2",
        output_format: "jpeg",
        aspect_ratio: "16:9",
        image_url: url,
        image_prompt_strength: 0.8,
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
          console.log("in queue 🚀");
        }
      },
    });

    // Race between timeout and actual request
    const result = await Promise.race([resultPromise, timeoutPromise]);
    // @ts-expect-error fal returns a different type than together
    if (!result || !result.data?.images?.[0]?.url) {
      throw new Error("No image generated");
    }
    // @ts-expect-error fal returns a different type than together
    const imageUrl = result.data.images[0].url;
    const key = randomUUID();

    // Fetch with timeout
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error("Failed to fetch generated image");
    }

    const buffer = await imageResponse.arrayBuffer();

    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: key,
      Body: Buffer.from(buffer),
      ContentType: "image/jpeg", // Changed to jpeg since that's what we specified in fal
    };

    await s3Client.send(new PutObjectCommand(uploadParams));

    const uploadUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    revalidatePath("/");

    return new Response(JSON.stringify({ url: uploadUrl }), {
      status: 200,
    });
  } catch (error: unknown) {
    console.error("Upload error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
