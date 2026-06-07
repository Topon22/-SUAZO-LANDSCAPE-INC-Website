"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Calendar, ThumbsUp, Shield, TrendingUp } from "lucide-react";
import { COMPANY_INFO } from "./data";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    icon: Calendar,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: ThumbsUp,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 350,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: 5,
    suffix: ".0",
    label: "Star Rating",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-team.png"
                alt="SUAZO LANDSCAPE INC team at work"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 sm:right-4 bg-amber-400 text-forest-dark rounded-2xl p-5 shadow-xl"
            >
              <div className="text-center">
                <span className="text-3xl font-bold block">15+</span>
                <span className="text-sm font-medium">Years of</span>
                <br />
                <span className="text-sm font-medium">Excellence</span>
              </div>
            </motion.div>
            {/* BuildZoom badge */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -left-2 sm:left-4 bg-white text-forest rounded-xl p-3 shadow-lg border border-forest/10"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-500" />
                <div>
                  <span className="text-lg font-bold block leading-tight">93</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">BuildZoom Score</span>
                  <span className="text-[9px] text-amber-600 block">Top 27%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-3 mb-6">
              Anaheim&apos;s Most Trusted Landscaping Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since our founding, <strong className="text-forest">{COMPANY_INFO.name}</strong> has been
              dedicated to transforming outdoor spaces across Anaheim and Orange County.
              Under the leadership of owner <strong className="text-forest">{COMPANY_INFO.owner}</strong>,
              what started as a small, family-owned operation has grown into one of the
              area&apos;s most respected landscaping companies — built on a foundation of
              quality workmanship, honest pricing, and genuine care for our clients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a licensed California landscaping contractor with a BuildZoom score of 93 (top 27%),
              we hold ourselves to the highest standards of professionalism and quality.
              Our team of skilled professionals brings years of horticultural knowledge
              and design expertise to every project. We understand Southern California&apos;s
              unique climate and soil conditions, allowing us to create landscapes that are
              not only beautiful but sustainable and water-efficient.
            </p>

            {/* Licensed badge */}
            <div className="flex items-center gap-3 bg-forest/5 rounded-xl p-4 mb-8">
              <Shield className="h-6 w-6 text-forest shrink-0" />
              <div>
                <p className="text-forest font-semibold text-sm">
                  {COMPANY_INFO.license}
                </p>
                <p className="text-muted-foreground text-xs">
                  Fully insured • BuildZoom Score 93 • Top 27% of contractors
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-cream"
                  >
                    <Icon className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-forest">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
