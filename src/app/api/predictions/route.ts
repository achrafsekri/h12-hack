import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// In production and preview deployments (on Vercel), the VERCEL_URL environment variable is set.
// In development (on your local machine), the NGROK_HOST environment variable is set.
const WEBHOOK_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NGROK_HOST;

export async function POST(request) {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.",
    );
  }

  const { url } = await request.json();

  const input = {
    prompt:
      "a majestic snow-capped mountain peak bathed in a warm glow of the setting sun",
    aspect_ratio: "3:2",
  };

  const output = await replicate.run("black-forest-labs/flux-1.1-pro-ultra", {
    input,
  });
 

  if (output?.error) {
  if (output?.error) {
    return NextResponse.json(
      { detail: "Error predicting image" },
      { status: 500 },
    );
  }

  return NextResponse.json(output, { status: 201 });
}
