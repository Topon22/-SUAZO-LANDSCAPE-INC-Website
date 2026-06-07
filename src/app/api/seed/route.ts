import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const sampleReviews = [
  {
    name: "Verified Customer",
    rating: 5,
    comment:
      "Suazo Landscape did an AMAZING job! We are very happy with the outcome. Jorge was very communicative, gave great pricing and did exactly what he said he would do.",
    service: "Landscape Design & Installation",
    approved: true,
  },
  {
    name: "Joe",
    rating: 5,
    comment: "Great work, on time, fair price. Does what he said he would do!",
    service: "Lawn Maintenance",
    approved: true,
  },
  {
    name: "Ken Z",
    rating: 5,
    comment:
      "Showed up on time. Good work. Communication was clear. Would use Luis and his company again.",
    service: "Hardscaping",
    approved: true,
  },
  {
    name: "Verified Customer",
    rating: 5,
    comment: "Great work..good suggestions.",
    service: "Garden Design",
    approved: true,
  },
  {
    name: "Maria R.",
    rating: 5,
    comment:
      "Jorge and his team did an incredible job with our yard cleanup. The property looked completely transformed. They removed years of overgrowth and left everything spotless. Very professional!",
    service: "Seasonal Cleanup",
    approved: true,
  },
  {
    name: "David L.",
    rating: 5,
    comment:
      "We had fescue sod installed in our entire backyard and it looks amazing. Jorge also set up a new sprinkler system to keep it green. Best investment we've made for our home in Anaheim!",
    service: "Sod Installation",
    approved: true,
  },
  {
    name: "Susan M.",
    rating: 5,
    comment:
      "Our sprinkler system was leaking and wasting water. Suazo Landscape came out the same week, diagnosed the problem, and had it fixed in no time. Very fair pricing and honest work.",
    service: "Sprinkler Installation",
    approved: true,
  },
  {
    name: "Robert T.",
    rating: 5,
    comment:
      "Had several large trees trimmed and one dead tree removed. The crew was careful around our fence and cleaned up every branch. Jorge is a true professional. Highly recommend for tree work!",
    service: "Tree Trimming & Removal",
    approved: true,
  },
  {
    name: "Jennifer K.",
    rating: 5,
    comment:
      "Jorge installed a beautiful paver patio in our backyard. The quality of work is outstanding and he finished ahead of schedule. We've already recommended him to our neighbors in Fullerton!",
    service: "Hardscaping",
    approved: true,
  },
  {
    name: "Carlos H.",
    rating: 5,
    comment:
      "We wanted drought-tolerant landscaping for our front yard and Jorge designed exactly what we needed. Beautiful succulents and native plants that require almost no water. Love it!",
    service: "Garden Design",
    approved: true,
  },
  {
    name: "Patricia W.",
    rating: 5,
    comment:
      "Professional, reliable, and affordable. Jorge and his crew maintain our lawn every week and it always looks perfect. They show up on time and do quality work. A+ service in Orange County!",
    service: "Lawn Maintenance",
    approved: true,
  },
  {
    name: "Mike A.",
    rating: 5,
    comment:
      "Suazo Landscape installed fresh mulch throughout our garden beds and it looks so clean and polished. They also fixed our drip irrigation while they were here. Great value and great people!",
    service: "Mulching Services",
    approved: true,
  },
];

const sampleBookings = [
  {
    name: "Jennifer Walsh",
    email: "jennifer.walsh@email.com",
    phone: "(714) 234-5678",
    service: "Lawn Maintenance",
    date: "2025-03-15",
    time: "09:00",
    address: "742 Elm Street, Anaheim, CA 92805",
    message: "Looking for weekly lawn service starting this spring.",
    status: "confirmed",
  },
  {
    name: "Carlos Mendez",
    email: "carlos.mendez@email.com",
    phone: "(714) 345-6789",
    service: "Hardscaping",
    date: "2025-03-20",
    time: "10:00",
    address: "1589 Oak Avenue, Fullerton, CA 92831",
    message: "Interested in a 20x20 patio with built-in seating.",
    status: "pending",
  },
  {
    name: "Patricia Kim",
    email: "patricia.kim@email.com",
    phone: "(714) 456-7890",
    service: "Sprinkler Installation",
    date: "2025-03-22",
    time: "08:00",
    address: "324 Maple Drive, Orange, CA 92866",
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
