import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Together from "together-ai";
import OpenAI from "openai";
import fs from "fs";
import { Blob } from "buffer";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
const openai = new OpenAI();

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

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
  try {
    const body = await request.json();
    const { url } = body;
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-dev",
      width: 1024,
      height: 1024,
      steps: 28,
      prompt:
        "Transform this selfie into a vibrant scene set in Sbiba, Tunisia, around 1000 BCE, while preserving the facial features and gender of the person in the uploaded photo. The image should feature a lush landscape with ancient mountains and fertile valleys, reminiscent of the Kasserine region. Dress the subject in traditional attire from that era, influenced by Berber and ancient Mediterranean cultures, using colorful woven fabrics and ornamental jewelry that reflect the individual's style. Surround the subject with elements of daily life such as people engaged in farming, pottery making, or trading in a bustling marketplace. Incorporate historical features like stone structures or megalithic monuments, mirroring the architectural styles of the time. The overall atmosphere should evoke a sense of community, tradition, and connection to nature, capturing the essence of life in ancient Sbiba, while keeping the human elements from the uploaded photo as intact as possible.",
      // @ts-ignore
      image_url: url,
    });

    //save the image to s3
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET!,
      Key: `uploads/${Date.now()}_${response.data[0].url}`,
      Body: response.data[0].url,
      ContentType: "image/png",
    };

    const uploadResponse = await s3Client.send(
      new PutObjectCommand(uploadParams),
    );

    const uploadUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${uploadParams.Key}`;

    //save the image to the database
    const selfie = await db.selfie.create({
      data: {
        imageUrl: uploadUrl,
        userId: session.user.id,
      },
    });

    return new Response(JSON.stringify({ url: uploadUrl }), {
      status: 200,
    });
  } catch (error: unknown) {
    console.error("Upload error:", error);
    return new Response(null, { status: 500 });
  }
}
