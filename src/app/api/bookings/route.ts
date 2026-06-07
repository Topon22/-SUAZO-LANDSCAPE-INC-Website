import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, address, message } = body;

    if (!name || !email || !phone || !service || !date || !time || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const booking = await db.booking.create({
      data: {
        name,
        email,
        phone,
        service,
        date,
        time,
        address,
        message: message || null,
      },
    });

    return NextResponse.json(
      { success: true, booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
