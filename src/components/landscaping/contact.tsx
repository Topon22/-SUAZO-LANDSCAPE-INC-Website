"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY_INFO } from "./data";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    if (!data.name || !data.email || !data.subject || !data.message) {
      setError("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setSubmitting(false);
  };

  const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Address",
      value: COMPANY_INFO.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: COMPANY_INFO.phoneDisplay,
      href: `tel:${COMPANY_INFO.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@suazolandscape.com",
      href: "mailto:info@suazolandscape.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon–Sat: 7:00 AM – 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
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
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your landscaping project? Contact us for a free estimate
            and let our team bring your outdoor vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-forest/10 rounded-xl p-3">
                      <Icon className="h-5 w-5 text-forest" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.label}
                      </p>
                      <p className="text-forest font-semibold">{item.value}</p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={item.label}>{content}</div>;
              })}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md h-64 bg-white">
              <div className="w-full h-full bg-muted flex items-center justify-center relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/-117.9142,33.8366,13,0/800x400@2x?access_token=pk.placeholder')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 text-center">
                  <MapPin className="h-10 w-10 text-forest mx-auto mb-2" />
                  <p className="text-forest font-bold">
                    SUAZO LANDSCAPE INC
                  </p>
                  <p className="text-muted-foreground text-sm">
                    749 N Vine St, Anaheim
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center h-full flex flex-col items-center justify-center"
              >
                <CheckCircle className="h-16 w-16 text-forest mb-4" />
                <h3 className="text-2xl font-bold text-forest mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-5"
              >
                <h3 className="text-xl font-bold text-forest mb-2">
                  Send Us a Message
                </h3>

                {error && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="(714) 555-0123"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder="Landscaping inquiry"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-forest hover:bg-forest-light text-white font-semibold py-6 text-base"
                >
                  {submitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
