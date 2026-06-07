import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const sampleReviews = [
  {
    name: "Maria Gonzalez",
    rating: 5,
    comment:
      "SUAZO LANDSCAPE completely transformed our backyard! They designed and installed a beautiful patio with a fire pit area, and the attention to detail was incredible. The team was professional, on time, and left everything spotless. Highly recommend!",
    service: "Patio & Hardscape Installation",
    approved: true,
  },
  {
    name: "Robert Chen",
    rating: 5,
    comment:
      "We've been using SUAZO for our lawn maintenance for over a year now and our yard has never looked better. Their crew is always punctual, thorough, and friendly. The weekly service keeps everything pristine.",
    service: "Lawn Maintenance",
    approved: true,
  },
  {
    name: "Sarah Thompson",
    rating: 4,
    comment:
      "The irrigation system they installed has saved us so much on our water bill. The team was knowledgeable and helped us choose the right system for our property size. Great work overall!",
    service: "Irrigation System Installation",
    approved: true,
  },
  {
    name: "James Okafor",
    rating: 5,
    comment:
      "Absolutely stunning landscape design! They took our vague ideas and turned them into a gorgeous outdoor living space. The stone walkways and garden beds are exactly what we envisioned. Worth every penny.",
    service: "Landscape Design",
    approved: true,
  },
  {
    name: "Linda Martinez",
    rating: 5,
    comment:
      "After the big storm, our trees were a mess. SUAZO came out the same day we called and handled all the tree removal and cleanup. Fast, efficient, and very reasonably priced. We couldn't be happier!",
    service: "Tree Removal & Cleanup",
    approved: true,
  },
  {
    name: "David Park",
    rating: 4,
    comment:
      "We hired SUAZO to install outdoor lighting around our property and the results are beautiful. Our home looks amazing at night and we feel much safer with the added visibility. Professional team from start to finish.",
    service: "Outdoor Lighting",
    approved: true,
  },
  {
    name: "Amanda Rivera",
    rating: 5,
    comment:
      "The retaining wall they built for our sloped yard is not only functional but gorgeous. They used natural stone that complements our home perfectly. The drainage solution they included was a great bonus.",
    service: "Retaining Wall Construction",
    approved: true,
  },
  {
    name: "Michael Brooks",
    rating: 5,
    comment:
      "From the initial consultation to the final walkthrough, SUAZO exceeded our expectations. They redesigned our entire front yard with drought-tolerant plants and it looks amazing while saving water. Top-notch service!",
    service: "Landscape Design",
    approved: true,
  },
];

const sampleBookings = [
  {
    name: "Jennifer Walsh",
    email: "jennifer.walsh@email.com",
    phone: "(555) 234-5678",
    service: "Lawn Maintenance",
    date: "2025-03-15",
    time: "09:00",
    address: "742 Elm Street, Springfield, IL 62704",
    message: "Looking for weekly lawn service starting this spring.",
    status: "confirmed",
  },
  {
    name: "Carlos Mendez",
    email: "carlos.mendez@email.com",
    phone: "(555) 345-6789",
    service: "Patio & Hardscape Installation",
    date: "2025-03-20",
    time: "10:00",
    address: "1589 Oak Avenue, Riverside, CA 92501",
    message: "Interested in a 20x20 patio with built-in seating.",
    status: "pending",
  },
  {
    name: "Patricia Kim",
    email: "patricia.kim@email.com",
    phone: "(555) 456-7890",
    service: "Irrigation System Installation",
    date: "2025-03-22",
    time: "08:00",
    address: "324 Maple Drive, Austin, TX 78701",
    message: "Need a smart irrigation system for a quarter-acre lot.",
    status: "pending",
  },
];

export async function POST() {
  try {
    // Seed reviews
    const reviewResults = await Promise.all(
      sampleReviews.map((review) =>
        db.review.create({
          data: review,
        })
      )
    );

    // Seed bookings
    const bookingResults = await Promise.all(
      sampleBookings.map((booking) =>
        db.booking.create({
          data: booking,
        })
      )
    );

    return NextResponse.json(
      {
        success: true,
        message: "Database seeded successfully.",
        reviewsCreated: reviewResults.length,
        bookingsCreated: bookingResults.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error seeding database:", error);
    return NextResponse.json(
      { error: "Failed to seed database." },
      { status: 500 }
    );
  }
}
