"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, MessageSquare, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { REAL_REVIEWS, COMPANY_INFO, type ReviewData } from "./data";

function SourceBadge({ source }: { source: ReviewData["source"] }) {
  if (source === "google") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
        <BadgeCheck className="h-3 w-3" />
        Verified Google Review
      </span>
    );
  }
  if (source === "facebook") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
        <BadgeCheck className="h-3 w-3" />
        Facebook Review
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
      <BadgeCheck className="h-3 w-3" />
      Verified Customer
    </span>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: ReviewData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/5"
    >
      <div className="flex items-start justify-between mb-3">
        <Quote className="h-8 w-8 text-amber-400/30 shrink-0" />
        <SourceBadge source={review.source} />
      </div>
      <p className="text-white/90 text-base leading-relaxed mb-4 italic">
        &ldquo;{review.comment}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <StarRating rating={review.rating} />
          <p className="text-white font-bold mt-1">{review.name}</p>
          <p className="text-amber-300/70 text-xs mt-0.5">{review.service}</p>
        </div>
        <p className="text-white/30 text-xs">
          {new Date(review.date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </motion.div>
  );
}

function WriteReviewDialog() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("review-name") as HTMLInputElement).value,
      rating: parseInt(
        (form.elements.namedItem("review-rating") as HTMLSelectElement).value
      ),
      comment: (form.elements.namedItem("review-comment") as HTMLTextAreaElement)
        .value,
      service: (form.elements.namedItem("review-service") as HTMLSelectElement)
        .value,
    };

    if (!data.name || !data.comment || !data.rating) {
      setError("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-amber-400/50 text-amber-300 hover:bg-amber-400/10 hover:text-amber-200 font-semibold"
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Write a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-forest text-xl">
            Share Your Experience
          </DialogTitle>
        </DialogHeader>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="h-16 w-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-amber-500 fill-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-forest mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground text-sm">
              Your review has been submitted and will appear after approval.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="review-name">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="review-name"
                name="review-name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="review-rating">
                  Rating <span className="text-red-500">*</span>
                </Label>
                <select
                  id="review-rating"
                  name="review-rating"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="review-service">Service</Label>
                <select
                  id="review-service"
                  name="review-service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select service</option>
                  <option value="Lawn Maintenance">Lawn Maintenance</option>
                  <option value="Tree Trimming & Removal">Tree Trimming & Removal</option>
                  <option value="Garden Design">Garden Design</option>
                  <option value="Sprinkler Installation">Sprinkler Installation</option>
                  <option value="Mulching Services">Mulching</option>
                  <option value="Sod Installation">Sod Installation</option>
                  <option value="Hardscaping">Hardscaping</option>
                  <option value="Seasonal Cleanup">Seasonal Cleanup</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="review-comment">
                Your Review <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="review-comment"
                name="review-comment"
                placeholder="Tell us about your experience..."
                rows={4}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-forest hover:bg-forest-light text-white font-semibold"
            >
              {submitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </div>
              ) : (
                "Submit Review"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [dbReviews, setDbReviews] = useState<ReviewData[]>([]);
  const [loading, setLoading] = useState(true);

  // Try to load reviews from API, fallback to static data
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setDbReviews(
            data.map((r: Record<string, unknown>) => ({
              id: r.id as string,
              name: r.name as string,
              rating: r.rating as number,
              comment: r.comment as string,
              service: (r.service as string) || "",
              source: "google" as const,
              date: r.createdAt ? new Date(r.createdAt as string).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
            }))
          );
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const reviews = dbReviews.length > 0 ? dbReviews : REAL_REVIEWS;

  const next = useCallback(() => {
    if (reviews.length === 0) return;
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    if (reviews.length === 0) return;
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  // Auto-play
  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [reviews.length, next]);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-forest relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-green-400/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-white font-bold text-lg">
              {COMPANY_INFO.rating}
            </span>
            <span className="text-white/60 text-sm">
              ({COMPANY_INFO.reviewCount} reviews)
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <WriteReviewDialog />
            <a
              href="https://www.google.com/maps/place/SUAZO+LANDSCAPE+INC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="text-white/60 hover:text-amber-300 hover:bg-white/5"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                See All Reviews on Google
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Mobile: Carousel */}
            <div className="lg:hidden relative max-w-lg mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="h-10 w-10 text-amber-400/40" />
                    <SourceBadge source={reviews[currentIdx]?.source || "google"} />
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                    &ldquo;{reviews[currentIdx]?.comment}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <StarRating rating={reviews[currentIdx]?.rating || 5} />
                      <p className="text-white font-bold text-lg mt-1">
                        {reviews[currentIdx]?.name}
                      </p>
                      <p className="text-amber-300/80 text-sm">
                        {reviews[currentIdx]?.service}
                      </p>
                    </div>
                    <p className="text-white/30 text-xs">
                      {reviews[currentIdx]?.date
                        ? new Date(reviews[currentIdx].date).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                        : ""}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prev}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full h-12 w-12"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <div className="flex gap-2">
                  {reviews.slice(0, Math.min(reviews.length, 8)).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === currentIdx
                          ? "w-8 bg-amber-400"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={next}
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full h-12 w-12"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {reviews.slice(0, 6).map((review, i) => (
                <ReviewCard key={review.id} review={review} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
