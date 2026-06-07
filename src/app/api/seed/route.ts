import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Seed endpoint is disabled in production. Reviews are served from static data.",
  });
}
