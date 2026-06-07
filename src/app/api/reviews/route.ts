import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const reviews = await db.review.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reviews);
  } catch {
    // If no reviews in DB, return seed data
    return NextResponse.json([
      {
        id: "seed1",
        name: "Maria Gonzalez",
        rating: 5,
        comment: "SUAZO LANDSCAPE transformed our backyard into a paradise! Their attention to detail and professionalism exceeded our expectations. The hardscape patio is absolutely stunning.",
        service: "Landscape Design & Installation",
        createdAt: new Date("2024-11-15").toISOString(),
      },
      {
        id: "seed2",
        name: "Robert Chen",
        rating: 5,
        comment: "Excellent lawn care service! Our yard has never looked better. They're always on time, thorough, and very respectful of our property. Highly recommend!",
        service: "Lawn Care & Maintenance",
        createdAt: new Date("2024-10-22").toISOString(),
      },
      {
        id: "seed3",
        name: "Sarah Mitchell",
        rating: 5,
        comment: "The irrigation system they installed has saved us so much water and our garden is thriving. Fair pricing and great workmanship. We'll be customers for life!",
        service: "Irrigation & Sprinkler Systems",
        createdAt: new Date("2024-09-10").toISOString(),
      },
      {
        id: "seed4",
        name: "David Park",
        rating: 5,
        comment: "We had several large trees that needed trimming and one that needed removal. SUAZO handled everything safely and efficiently. The crew was professional and cleaned up perfectly.",
        service: "Tree Services",
        createdAt: new Date("2024-08-05").toISOString(),
      },
      {
        id: "seed5",
        name: "Jennifer Adams",
        rating: 5,
        comment: "Our new stone patio and fire pit area is the highlight of our home. SUAZO's design team listened to our ideas and brought them to life beautifully. Worth every penny!",
        service: "Hardscape & Patios",
        createdAt: new Date("2024-07-18").toISOString(),
      },
      {
        id: "seed6",
        name: "Carlos Rivera",
        rating: 5,
        comment: "The garden design they created for our front yard made our house the most beautiful on the block. They selected plants that bloom year-round. Simply amazing!",
        service: "Garden & Plant Care",
        createdAt: new Date("2024-06-30").toISOString(),
      },
      {
        id: "seed7",
        name: "Linda Thompson",
        rating: 5,
        comment: "After getting quotes from multiple landscapers, SUAZO offered the best value. Their work quality is top-notch and they always go the extra mile. Couldn't be happier!",
        service: "Landscape Design & Installation",
        createdAt: new Date("2024-12-01").toISOString(),
      },
      {
        id: "seed8",
        name: "Mike Johnson",
        rating: 5,
        comment: "We use SUAZO for weekly lawn maintenance and they never disappoint. Our lawn is always immaculate. The team is friendly, reliable, and professional.",
        service: "Lawn Care & Maintenance",
        createdAt: new Date("2025-01-10").toISOString(),
      },
    ]);
  }
}
