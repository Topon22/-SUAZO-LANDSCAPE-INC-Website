"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS, type GalleryItem } from "./data";

const CATEGORIES = [
  "All",
  "Sod Installation",
  "Hardscaping",
  "Sprinkler Systems",
  "Tree Service",
  "Garden Design",
  "Fencing",
];

// Masonry heights for variety
const MASONRY_HEIGHTS = [
  "h-64 md:h-80",
  "h-56 md:h-64",
  "h-72 md:h-96",
  "h-52 md:h-60",
  "h-64 md:h-72",
  "h-60 md:h-80",
  "h-72 md:h-80",
  "h-56 md:h-72",
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const goToItem = (dir: number) => {
    const next = (selectedIndex + dir + filteredItems.length) % filteredItems.length;
    setSelectedIndex(next);
    setSelectedItem(filteredItems[next]);
  };

  const handleShare = async (item: GalleryItem) => {
    const shareData = {
      title: item.title,
      text: `Check out this project by SUAZO LANDSCAPE INC: ${item.title}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(
        `${item.title} - ${item.description} | SUAZO LANDSCAPE INC`
      );
    }
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
          className="text-center mb-12"
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

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-forest text-white shadow-md shadow-forest/20"
                  : "bg-cream text-forest hover:bg-forest/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => {
              const heightClass = MASONRY_HEIGHTS[i % MASONRY_HEIGHTS.length];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => openLightbox(item, i)}
                  className={`group relative ${heightClass} rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.src}')` }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  {/* Share button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item);
                    }}
                    className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 cursor-pointer"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                  {/* Featured badge */}
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-amber-400 text-forest-dark text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            {/* Left arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToItem(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            {/* Right arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToItem(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            {/* Image container */}
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()
              }
              className="max-w-5xl max-h-[80vh] w-full"
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <p className="text-white font-bold text-xl mt-1">
                  {selectedItem.title}
                </p>
                <p className="text-white/60 text-sm mt-1 max-w-lg mx-auto">
                  {selectedItem.description}
                </p>
                {/* Share button in lightbox */}
                <button
                  onClick={() => handleShare(selectedItem)}
                  className="mt-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full px-4 py-2 text-sm transition-all cursor-pointer"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
