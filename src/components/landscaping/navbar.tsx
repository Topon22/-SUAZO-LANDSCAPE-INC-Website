"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, TreePine, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { COMPANY_INFO } from "./data";

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentView: string;
}

const NAV_LINKS = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "About", section: "about" },
  { label: "Gallery", section: "gallery" },
  { label: "Testimonials", section: "testimonials" },
  { label: "FAQ", section: "faq" },
  { label: "Contact", section: "contact" },
];

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setMobileOpen(false);
    if (currentView !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <TreePine className="h-8 w-8 text-amber-400" />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide leading-tight text-white">
                SUAZO
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase leading-tight text-amber-300">
                Landscape Inc
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer text-white/80 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden sm:flex items-center gap-2 text-white/90 hover:text-amber-300 transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <Button
              onClick={() => handleNavClick("contact")}
              className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600 text-forest-dark font-semibold px-5"
            >
              Get Free Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-forest-dark border-forest-light w-72"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex items-center gap-2 mb-6 px-2">
                    <TreePine className="h-7 w-7 text-amber-400" />
                    <span className="text-white font-bold text-lg">
                      SUAZO LANDSCAPE
                    </span>
                  </div>
                  {NAV_LINKS.map((link, i) => (
                    <motion.button
                      key={link.section}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNavClick(link.section)}
                      className="text-left px-4 py-3 text-white/90 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-colors text-base font-medium cursor-pointer"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                  <div className="border-t border-white/10 mt-4 pt-4">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center gap-2 px-4 py-3 text-amber-300 text-base"
                    >
                      <Phone className="h-5 w-5" />
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <Button
                      onClick={() => handleNavClick("contact")}
                      className="w-full mt-2 bg-amber-500 hover:bg-amber-600 text-forest-dark font-semibold"
                    >
                      Get Free Quote
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
