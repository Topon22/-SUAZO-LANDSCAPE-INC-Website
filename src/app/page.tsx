"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/landscaping/navbar";
import Hero from "@/components/landscaping/hero";
import Services from "@/components/landscaping/services";
import About from "@/components/landscaping/about";
import Gallery from "@/components/landscaping/gallery";
import Testimonials from "@/components/landscaping/testimonials";
import CTASection from "@/components/landscaping/cta-section";
import Contact from "@/components/landscaping/contact";
import Footer from "@/components/landscaping/footer";
import ServiceDetail from "@/components/landscaping/service-detail";

type View = "home" | "service";

function parseHash(hash: string): { view: View; serviceSlug: string } {
  if (hash.startsWith("#services/")) {
    const slug = hash.replace("#services/", "");
    return { view: "service", serviceSlug: slug };
  }
  return { view: "home", serviceSlug: "" };
}

function getInitialHashState() {
  if (typeof window === "undefined") return { view: "home" as View, serviceSlug: "" };
  return parseHash(window.location.hash);
}

export default function Home() {
  const initialState = getInitialHashState();
  const [currentView, setCurrentView] = useState<View>(initialState.view);
  const [serviceSlug, setServiceSlug] = useState(initialState.serviceSlug);
  const hashFromNavRef = useRef(false);

  // Listen to hash changes (back/forward browser navigation)
  useEffect(() => {
    const handleHashChange = () => {
      if (hashFromNavRef.current) {
        hashFromNavRef.current = false;
        return;
      }
      const { view, serviceSlug: slug } = parseHash(window.location.hash);
      setCurrentView(view);
      setServiceSlug(slug);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateToService = useCallback((slug: string) => {
    hashFromNavRef.current = true;
    window.location.hash = `services/${slug}`;
    setCurrentView("service");
    setServiceSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigateToHome = useCallback(() => {
    hashFromNavRef.current = true;
    window.location.hash = "";
    setCurrentView("home");
    setServiceSlug("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavNavigate = useCallback(
    (section: string) => {
      if (section === "home") {
        navigateToHome();
      }
    },
    [navigateToHome]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavNavigate} currentView={currentView} />

      <AnimatePresence mode="wait">
        {currentView === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onNavigate={handleNavNavigate} />
            <Services onServiceClick={navigateToService} />
            <About />
            <Gallery />
            <Testimonials />
            <CTASection />
            <Contact />
          </motion.div>
        ) : (
          <motion.div
            key={`service-${serviceSlug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceDetail
              slug={serviceSlug}
              onBack={navigateToHome}
              onServiceClick={navigateToService}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
