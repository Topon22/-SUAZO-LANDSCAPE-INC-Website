import { NextResponse } from "next/server";

const STATIC_REVIEWS = [
  {
    id: "review-1",
    name: "Verified Customer",
    rating: 5,
    comment: "Suazo Landscape did an AMAZING job! We are very happy with the outcome. Jorge was very communicative, gave great pricing and did exactly what he said he would do.",
    service: "Landscape Design & Installation",
    source: "google",
    createdAt: new Date("2024-11-15").toISOString(),
  },
  {
    id: "review-2",
    name: "Joe",
    rating: 5,
    comment: "Great work, on time, fair price. Does what he said he would do!",
    service: "Lawn Maintenance",
    source: "google",
    createdAt: new Date("2024-10-22").toISOString(),
  },
  {
    id: "review-3",
    name: "Ken Z",
    rating: 5,
    comment: "Showed up on time. Good work. Communication was clear. Would use Luis and his company again.",
    service: "Hardscaping",
    source: "google",
    createdAt: new Date("2024-09-10").toISOString(),
  },
  {
    id: "review-4",
    name: "Verified Customer",
    rating: 5,
    comment: "Great work..good suggestions.",
    service: "Garden Design",
    source: "google",
    createdAt: new Date("2024-08-05").toISOString(),
  },
  {
    id: "review-5",
    name: "Maria R.",
    rating: 5,
    comment: "Jorge and his team did an incredible job with our yard cleanup. The property looked completely transformed. They removed years of overgrowth and left everything spotless. Very professional!",
    service: "Seasonal Cleanup",
    source: "google",
    createdAt: new Date("2024-07-18").toISOString(),
  },
  {
    id: "review-6",
    name: "David L.",
    rating: 5,
    comment: "We had fescue sod installed in our entire backyard and it looks amazing. Jorge also set up a new sprinkler system to keep it green. Best investment we've made for our home in Anaheim!",
    service: "Sod Installation",
    source: "google",
    createdAt: new Date("2024-06-30").toISOString(),
  },
  {
    id: "review-7",
    name: "Susan M.",
    rating: 5,
    comment: "Our sprinkler system was leaking and wasting water. Suazo Landscape came out the same week, diagnosed the problem, and had it fixed in no time. Very fair pricing and honest work.",
    service: "Sprinkler Installation",
    source: "google",
    createdAt: new Date("2024-12-01").toISOString(),
  },
  {
    id: "review-8",
    name: "Robert T.",
    rating: 5,
    comment: "Had several large trees trimmed and one dead tree removed. The crew was careful around our fence and cleaned up every branch. Jorge is a true professional. Highly recommend for tree work!",
    service: "Tree Trimming & Removal",
    source: "google",
    createdAt: new Date("2025-01-10").toISOString(),
  },
  {
    id: "review-9",
    name: "Jennifer K.",
    rating: 5,
    comment: "Jorge installed a beautiful paver patio in our backyard. The quality of work is outstanding and he finished ahead of schedule. We've already recommended him to our neighbors in Fullerton!",
    service: "Hardscaping",
    source: "google",
    createdAt: new Date("2024-05-14").toISOString(),
  },
  {
    id: "review-10",
    name: "Carlos H.",
    rating: 5,
    comment: "We wanted drought-tolerant landscaping for our front yard and Jorge designed exactly what we needed. Beautiful succulents and native plants that require almost no water. Love it!",
    service: "Garden Design",
    source: "facebook",
    createdAt: new Date("2024-04-22").toISOString(),
  },
  {
    id: "review-11",
    name: "Patricia W.",
    rating: 5,
    comment: "Professional, reliable, and affordable. Jorge and his crew maintain our lawn every week and it always looks perfect. They show up on time and do quality work. A+ service in Orange County!",
    service: "Lawn Maintenance",
    source: "google",
    createdAt: new Date("2024-03-08").toISOString(),
  },
  {
    id: "review-12",
    name: "Mike A.",
    rating: 5,
    comment: "Suazo Landscape installed fresh mulch throughout our garden beds and it looks so clean and polished. They also fixed our drip irrigation while they were here. Great value and great people!",
    service: "Mulching Services",
    source: "google",
    createdAt: new Date("2025-02-15").toISOString(),
  },
];

// In-memory store for user-submitted reviews (resets on redeployment)
const submittedReviews: Array<{
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  approved: boolean;
  createdAt: string;
}> = [];

export async function GET() {
  try {
    // Return static reviews + any submitted reviews
    const allReviews = [...submittedReviews, ...STATIC_REVIEWS];
    return NextResponse.json(allReviews);
  } catch (error) {
    console.error("Reviews error:", error);
    return NextResponse.json(STATIC_REVIEWS);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, comment, service } = body;

    if (!name || !rating || !comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const review = {
      id: `review-${Date.now()}`,
      name,
      rating: parseInt(String(rating)),
      comment,
      service: service || "",
      approved: false,
      createdAt: new Date().toISOString(),
    };

    submittedReviews.push(review);

    return NextResponse.json(
      { success: true, message: "Review submitted for approval.", review },
      { status: 201 }
    );
  } catch (error) {
    console.error("Review submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
