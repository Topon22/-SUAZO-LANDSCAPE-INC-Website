"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Sprout,
  Palette,
  BrickWall,
  TreePine,
  Droplets,
  Flower2,
  Layers,
  Grid3X3,
  Leaf,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

function BookingForm({ service }: { service: ServiceData }) {
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
      service: service.title,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      time: (form.elements.namedItem("time") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.address) {
      setError("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/bookings", {
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

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-lg text-center"
      >
        <CheckCircle className="h-16 w-16 text-forest mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-forest mb-2">
          Booking Request Sent!
        </h3>
        <p className="text-muted-foreground mb-2">
          Thank you for choosing {COMPANY_INFO.name}. We&apos;ll confirm your{" "}
          <strong>{service.title}</strong> appointment within 24 hours.
        </p>
        <p className="text-sm text-muted-foreground">
          A confirmation will be sent to your email.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6 border-forest text-forest hover:bg-forest hover:text-white"
        >
          Book Another Appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-5">
      <h3 className="text-xl font-bold text-forest flex items-center gap-2">
        <Clock className="h-5 w-5 text-amber-500" />
        Book This Service
      </h3>

      {/* Licensed & Hours badges */}
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-forest/5 text-forest rounded-full px-3 py-1.5">
          <Shield className="h-3 w-3" />
          Licensed & Insured
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-forest/5 text-forest rounded-full px-3 py-1.5">
          <Clock className="h-3 w-3" />
          Mon–Sat 7AM–4PM
        </span>
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium bg-amber-50 text-amber-700 rounded-full px-3 py-1.5 hover:bg-amber-100 transition-colors"
        >
          <Phone className="h-3 w-3" />
          Call {COMPANY_INFO.phoneDisplay}
        </a>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="book-name">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input id="book-name" name="name" placeholder="John Smith" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="book-email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="book-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="book-phone">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="book-phone"
            name="phone"
            type="tel"
            placeholder="(714) 555-0123"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="book-address">
            Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="book-address"
            name="address"
            placeholder="123 Main St, Anaheim, CA"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="book-date">
            Preferred Date <span className="text-red-500">*</span>
          </Label>
          <Input id="book-date" name="date" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="book-time">
            Preferred Time <span className="text-red-500">*</span>
          </Label>
          <select
            id="book-time"
            name="time"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select time</option>
            <option value="7:00 AM">7:00 AM</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="book-message">Additional Notes</Label>
        <Textarea
          id="book-message"
          name="message"
          placeholder="Tell us more about what you need..."
          rows={3}
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
            Submitting...
          </div>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Request Booking
          </>
        )}
      </Button>
    </form>
  );
}

export default function ServiceDetail({
  slug,
  onBack,
  onServiceClick,
}: {
  slug: string;
  onBack: () => void;
  onServiceClick: (slug: string) => void;
}) {
  const service = SERVICES.find((s) => s.slug === slug);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-forest mb-4">
            Service Not Found
          </h1>
          <Button onClick={onBack} className="bg-forest hover:bg-forest-light text-white">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = ICON_MAP[service.icon] || Sprout;
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center bg-amber-400/20 backdrop-blur-sm rounded-xl p-3 mb-4">
              <Icon className="h-8 w-8 text-amber-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {service.description}
            </p>
            {/* Licensed badge */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-amber-200 rounded-full px-3 py-1.5 text-sm font-medium border border-white/20">
                <Shield className="h-4 w-4" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/80 rounded-full px-3 py-1.5 text-sm font-medium border border-white/20">
                <Clock className="h-4 w-4" />
                Mon–Sat 7AM–4PM
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section ref={ref} className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-8 text-forest hover:text-forest-light hover:bg-forest/5 -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-forest mb-4">
                    About This Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* What's Included */}
                <div>
                  <h2 className="text-2xl font-bold text-forest mb-4">
                    What&apos;s Included
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <Check className="h-5 w-5 text-forest shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-forest mb-2">
                    Pricing
                  </h2>
                  <p className="text-amber-600 font-semibold text-lg mb-2">
                    {service.pricingNote}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Every property is unique. Contact us for a personalized quote
                    tailored to your specific needs and budget. Free estimates are
                    always included!
                  </p>
                </div>

                {/* Service Area */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-forest mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    Service Area
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We proudly serve {service.title.toLowerCase()} clients throughout
                    Anaheim, Orange, Fullerton, Garden Grove, Santa Ana, Costa Mesa,
                    Placentia, Yorba Linda, Brea, and the greater Orange County area. Not sure if
                    we cover your location? Give us a call — we&apos;re happy to help!
                  </p>
                </div>
              </div>

              {/* Sidebar - Booking Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BookingForm service={service} />
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-forest mb-6">
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedServices.map((related) => {
                  const RIcon = ICON_MAP[related.icon] || Sprout;
                  return (
                    <Card
                      key={related.slug}
                      onClick={() => onServiceClick(related.slug)}
                      className="group cursor-pointer border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{
                            backgroundImage: `url('${related.image}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
                        <div className="absolute bottom-3 left-3 bg-amber-400/90 rounded-lg p-2">
                          <RIcon className="h-4 w-4 text-forest-dark" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-forest group-hover:text-forest-light transition-colors text-sm">
                          {related.shortTitle}
                        </h3>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
