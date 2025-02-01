import OpenAI from "openai";
import fetch from "node-fetch";
import FormData from "form-data";
import fs from "fs";
const openai = new OpenAI();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return new Response(JSON.stringify({ error: "Image URL is required" }), {
        status: 400,
      });
    }

    // Fetch the image from the URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Convert the response into a buffer
    const buffer = await response.buffer();

    // Create a FormData instance and append the image buffer
    const form = new FormData();
    form.append("image", buffer, {
      filename: "image.png",
      contentType: response.headers.get("content-type") || "image/png",
    });
    form.append(
      "prompt",
      "Transform this selfie into a vibrant scene set in Sbiba, Tunisia, around 1000 BCE, while preserving the facial features and gender of the person in the uploaded photo. The image should feature a lush landscape with ancient mountains and fertile valleys, reminiscent of the Kasserine region. Dress the subject in traditional attire from that era, influenced by Berber and ancient Mediterranean cultures, using colorful woven fabrics and ornamental jewelry that reflect the individual's style. Surround the subject with elements of daily life such as people engaged in farming, pottery making, or trading in a bustling marketplace. Incorporate historical features like stone structures or megalithic monuments, mirroring the architectural styles of the time. The overall atmosphere should evoke a sense of community, tradition, and connection to nature, capturing the essence of life in ancient Sbiba, while keeping the human elements from the uploaded photo as intact as possible.",
    );
    form.append("n", "1");
    form.append("size", "1024x1024");

    // Send the request to OpenAI's API
    const editResponse = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        ...form.getHeaders(),
      },
      body: form,
    });

    if (!editResponse.ok) {
      const errorDetails = await editResponse.json();
      throw new Error(`OpenAI API error: ${errorDetails.error.message}`);
    }

    const result = await editResponse.json();
    console.log("response", result);
    return new Response(JSON.stringify({ url: result.data[0].url }), {
      status: 200,
    });
  } catch (error: unknown) {
    console.error("Upload error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
