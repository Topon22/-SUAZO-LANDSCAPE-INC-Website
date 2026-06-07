"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ChevronDown, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "./data";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Hero({ onNavigate }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleWords = ["Beautiful", "Landscapes", "Start", "Here"];

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] w-20 h-20 rounded-full bg-amber-400/10 blur-xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[15%] w-32 h-32 rounded-full bg-green-400/10 blur-xl"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">
            {COMPANY_INFO.rating} Rating • {COMPANY_INFO.reviewCount} Reviews
          </span>
        </motion.div>

        {/* Title with word-by-word animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3"
            >
              {word === "Here" ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle with owner mention */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          Anaheim&apos;s trusted landscaping professionals led by{" "}
          <strong className="text-amber-300">Jorge Luis Suazo</strong>. From lawn care to
          complete outdoor transformations, we bring your vision to life with
          expert craftsmanship and personalized service.
        </motion.p>

        {/* Licensed & Insured + Hours badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8 flex-wrap"
        >
          <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-200 rounded-full px-3 py-1.5 text-sm font-medium border border-amber-400/30">
            <Shield className="h-4 w-4" />
            Licensed & Insured
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 rounded-full px-3 py-1.5 text-sm font-medium border border-white/20">
            <Clock className="h-4 w-4" />
            Mon–Sat 7AM–4PM
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-amber-500 hover:bg-amber-600 text-forest-dark font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300"
          >
            Get Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto bg-transparent"
          >
            Our Services
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm"
        >
          <span className="flex items-center gap-1">
            ✓ Licensed & Insured
          </span>
          <span className="flex items-center gap-1">
            ✓ Free Estimates
          </span>
          <span className="flex items-center gap-1">
            ✓ Same-Week Service
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
