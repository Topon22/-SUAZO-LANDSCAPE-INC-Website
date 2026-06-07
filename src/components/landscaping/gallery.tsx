"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GALLERY_ITEMS = [
  {
    src: "/images/landscape-design.png",
    title: "Modern Landscape Design",
    category: "Design",
  },
  {
    src: "/images/hardscape.png",
    title: "Stone Patio Installation",
    category: "Hardscape",
  },
  {
    src: "/images/lawn-care.png",
    title: "Lush Lawn Transformation",
    category: "Lawn Care",
  },
  {
    src: "/images/tree-service.png",
    title: "Expert Tree Trimming",
    category: "Tree Service",
  },
  {
    src: "/images/irrigation.png",
    title: "Smart Irrigation System",
    category: "Irrigation",
  },
  {
    src: "/images/garden-design.png",
    title: "Garden Design & Planting",
    category: "Garden",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const goTo = (dir: number) => {
    if (selectedIdx === null) return;
    const next = (selectedIdx + dir + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedIdx(next);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse our portfolio of completed projects showcasing our craftsmanship
            and attention to detail across all service areas.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedIdx(i)}
              className="group relative h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-10 w-10 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] w-full"
            >
              <img
                src={GALLERY_ITEMS[selectedIdx].src}
                alt={GALLERY_ITEMS[selectedIdx].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-bold text-xl">
                  {GALLERY_ITEMS[selectedIdx].title}
                </p>
                <p className="text-amber-300 text-sm mt-1">
                  {GALLERY_ITEMS[selectedIdx].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
