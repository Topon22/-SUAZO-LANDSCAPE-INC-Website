import { NextResponse } from "next/server";

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

    // In production, you would save to a database or send an email notification
    // For now, we log the booking and return success
    console.log("New booking received:", {
      name,
      email,
      phone,
      service,
      date,
      time,
      address,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking request received. We will contact you within 24 hours to confirm.",
      },
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
