import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import FeaturedProductsSection from "./components/FeaturedProductsSection.jsx";
import JourneySection from "./components/JourneySection.jsx";
import CraftVillagesSection from "./components/CraftVillagesSection.jsx";
import JoinBannerSection from "./components/JoinBannerSection.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
      });
      return undefined;
    }

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="page">
      <CustomCursor />
      <Header />
      <main className="page__main">
        <HeroBanner />
        <FeaturedProductsSection />
        <JourneySection />
        <CraftVillagesSection />
        <JoinBannerSection />
      </main>
      <Footer />
    </div>
  );
}
