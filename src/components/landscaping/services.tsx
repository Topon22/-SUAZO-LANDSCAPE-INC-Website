"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sprout,
  Palette,
  BrickWall,
  TreePine,
  Droplets,
  Flower2,
  Layers,
  Grid3X3,
  Leaf,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES, COMPANY_INFO, type ServiceData } from "./data";

const ICON_MAP: Record<string, React.ElementType> = {
  Sprout,
  Palette,
  BrickWall,
  TreePine,
  Droplets,
  Flower2,
  Layers,
  Grid3X3,
  Leaf,
};

interface ServicesProps {
  onServiceClick: (slug: string) => void;
}

function ServiceCard({
  service,
  index,
  onServiceClick,
}: {
  service: ServiceData;
  index: number;
  onServiceClick: (slug: string) => void;
}) {
  const Icon = ICON_MAP[service.icon] || Sprout;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <Card
        onClick={() => onServiceClick(service.slug)}
        className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-card hover:-translate-y-2"
      >
        <div className="relative h-44 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="bg-amber-400/90 backdrop-blur-sm rounded-xl p-2.5">
              <Icon className="h-5 w-5 text-forest-dark" />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-base font-bold text-forest mb-1.5 group-hover:text-forest-light transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
            {service.description}
          </p>
          <div className="flex items-center text-amber-600 font-medium text-sm group-hover:text-amber-500 transition-colors">
            Click for details
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Services({ onServiceClick }: ServicesProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-4">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From routine lawn maintenance to complete landscape transformations,
            we offer comprehensive solutions for every outdoor need in Anaheim
            and Orange County.
          </p>
          {/* Licensed badge row */}
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-forest/10 text-forest rounded-full px-3 py-1.5 text-sm font-medium">
              <Shield className="h-4 w-4" />
              Licensed & Insured
            </span>
            <span className="inline-flex items-center gap-1.5 bg-forest/10 text-forest rounded-full px-3 py-1.5 text-sm font-medium">
              <Clock className="h-4 w-4" />
              Mon–Sat 7AM–4PM
            </span>
          </div>
        </motion.div>

        {/* Service Cards Grid - 4 columns on xl for 8 services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={i}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
