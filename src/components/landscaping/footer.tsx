"use client";

import {
  TreePine,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Clock,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, SERVICES, BUSINESS_HOURS } from "./data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="h-7 w-7 text-amber-400" />
              <div>
                <span className="text-white font-bold text-lg block leading-tight">
                  SUAZO
                </span>
                <span className="text-amber-300 text-[10px] tracking-[0.2em] uppercase">
                  Landscape Inc
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {COMPANY_INFO.description}. Proudly serving Anaheim and all of
              Orange County with professional landscaping services for over 15
              years.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-forest-dark transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jorge-suazo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-forest-dark transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Gallery", "Testimonials", "FAQ", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-amber-300 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`#services/${service.slug}`}
                    className="text-white/60 hover:text-amber-300 transition-colors text-sm"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-amber-300 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-amber-300 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>Mon–Sat: 7:00 AM – 4:00 PM</p>
                  <p className="text-red-400/70">Sunday: Closed</p>
                </div>
              </li>
            </ul>
            {/* Review links */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs mb-2">Reviews</p>
              <a
                href="https://www.google.com/maps/place/SUAZO+LANDSCAPE+INC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300/80 hover:text-amber-300 text-xs transition-colors block mb-1"
              >
                Google Reviews ({COMPANY_INFO.reviewCount})
              </a>
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300/80 hover:text-amber-300 text-xs transition-colors block"
              >
                Facebook ({COMPANY_INFO.facebookLikes} likes)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved. Licensed CA Contractor.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-white/40 hover:text-amber-300 hover:bg-white/5"
          >
            <ChevronUp className="h-4 w-4 mr-1" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
