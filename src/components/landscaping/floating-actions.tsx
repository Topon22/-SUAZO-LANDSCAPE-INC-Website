"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "./data";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: Sticky Call Now button at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-forest/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-bottom">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-forest-dark font-bold py-3 rounded-xl transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call Now — {COMPANY_INFO.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Desktop: Get a Quote sidebar button */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Button
          onClick={scrollToContact}
          className="bg-forest hover:bg-forest-light text-white rounded-r-none rounded-l-xl py-6 shadow-lg shadow-forest/30 writing-vertical"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <MessageSquare className="h-4 w-4 mb-2" />
          Get a Quote
        </Button>
      </div>

      {/* Back to Top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 md:bottom-8 right-4 z-40"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="bg-forest hover:bg-forest-light text-white rounded-full h-12 w-12 shadow-lg shadow-forest/30"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
