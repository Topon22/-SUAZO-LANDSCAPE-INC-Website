"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  createdAt: string;
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from the homeowners and businesses
            who trust us with their outdoor spaces.
          </p>
        </motion.div>

        {/* Carousel */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin" />
          </div>
        ) : reviews.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <Quote className="h-10 w-10 text-amber-400/40 mb-6" />
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{reviews[currentIdx].comment}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(reviews[currentIdx].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-white font-bold text-lg">
                    {reviews[currentIdx].name}
                  </p>
                  <p className="text-amber-300/80 text-sm">
                    {reviews[currentIdx].service}
                  </p>
                </div>
              </div>
            </motion.div>

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
                {reviews.map((_, i) => (
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
        ) : (
          <p className="text-center text-white/60">No reviews yet.</p>
        )}
      </div>
    </section>
  );
}
