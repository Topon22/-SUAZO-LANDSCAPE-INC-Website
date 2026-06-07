"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  ClipboardCheck,
  PenTool,
  HardHat,
  CheckCircle,
} from "lucide-react";
import { PROCESS_STEPS } from "./data";

const ICON_MAP: Record<string, React.ElementType> = {
  Phone,
  ClipboardCheck,
  PenTool,
  HardHat,
  CheckCircle,
};

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-4">
            Our Simple Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From your first call to the final walkthrough, we make landscaping
            easy and stress-free.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-forest/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="hidden md:block absolute top-12 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-gradient-to-r from-forest via-amber-500 to-forest origin-left"
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Phone;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="relative text-center group"
                >
                  {/* Step number with icon */}
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 rounded-full bg-forest flex items-center justify-center mx-auto shadow-lg shadow-forest/20 group-hover:shadow-forest/40 transition-shadow"
                      >
                        <Icon className="h-10 w-10 text-amber-400" />
                      </motion.div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-forest-dark font-bold text-sm flex items-center justify-center shadow-md">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-forest font-bold text-lg mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[180px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connecting line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="md:hidden flex justify-center my-2">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-forest to-amber-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
