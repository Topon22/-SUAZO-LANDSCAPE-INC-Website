"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "./data";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-24 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-amber-400/10 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-forest/5 translate-x-1/3 translate-y-1/3 blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="bg-gradient-to-br from-forest to-forest-dark rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Inner decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-400/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />

          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/20 mb-6"
          >
            <Phone className="h-8 w-8 text-amber-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Get a free, no-obligation estimate for your landscaping project. Our team is
            ready to bring your vision to life with professional craftsmanship and
            personalized service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-forest-dark font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-amber-500/25"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {COMPANY_INFO.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
