import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AuthModal from "./components/AuthModal.jsx";
import GlobalPageLoader from "./components/GlobalPageLoader.jsx";
import { warmHeroBannerAssets } from "./components/HeroBanner.jsx";
import HomePage from "./pages/HomePage.jsx";
import VillageDetailPage from "./pages/VillageDetailPage.jsx";
import FacilityDetailPage from "./pages/FacilityDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import VillageNotFound from "./components/village/VillageNotFound.jsx";
import TactileOrganicGrain from "./components/effects/TactileOrganicGrain.jsx";
import HeritageProgressBar from "./components/effects/HeritageProgressBar.jsx";
import useSilkParallax from "./hooks/useSilkParallax.js";
import useMagnetic from "./hooks/useMagnetic.js";

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      const rafId = window.requestAnimationFrame(() => {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return () => window.cancelAnimationFrame(rafId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return undefined;
  }, [pathname, hash]);

  return null;
}

function RouteTransition({ children }) {
  const { pathname } = useLocation();
  const contentRef = useRef(null);
  const [loadingImages, setLoadingImages] = useState(false);

  useEffect(() => {
    setLoadingImages(false);
    let delay;
    let pendingImages = [];
    const onImageSettled = () => {
      if (pendingImages.every((image) => image.complete)) {
        window.clearTimeout(delay);
        setLoadingImages(false);
      }
    };
    // Only wait for images in the first viewport, not lazy images farther down.
    const frame = window.requestAnimationFrame(() => {
      pendingImages = [...(contentRef.current?.querySelectorAll("img") || [])].filter((image) => {
        const rect = image.getBoundingClientRect();
        return !image.complete && rect.bottom > 0 && rect.top < window.innerHeight;
      });
      if (!pendingImages.length) return;
      pendingImages.forEach((image) => {
        image.addEventListener("load", onImageSettled);
        image.addEventListener("error", onImageSettled);
      });
      delay = window.setTimeout(() => {
        if (pendingImages.some((image) => !image.complete)) setLoadingImages(true);
      }, 300);
      onImageSettled();
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(delay);
      pendingImages.forEach((image) => {
        image.removeEventListener("load", onImageSettled);
        image.removeEventListener("error", onImageSettled);
      });
    };
  }, [pathname]);

  return (
    <>
      {loadingImages && <div className="route-loading" role="status">Đang tải ảnh…</div>}
      <div key={pathname} ref={contentRef} className="route-content">{children}</div>
    </>
  );
}

export default function App() {
  useSilkParallax();
  useMagnetic();

  useEffect(() => {
    warmHeroBannerAssets();
  }, []);

  return (
    <div className="page">
      <TactileOrganicGrain />
      <HeritageProgressBar />
      <GlobalPageLoader />
      <RouteScrollManager />
      <CustomCursor />
      <Header />
      <main className="page__main">
        <RouteTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lang-nghe/:id" element={<VillageDetailPage />} />
          <Route
            path="/co-so/:facilityId"
            element={<FacilityDetailPage />}
          />
          <Route path="/san-pham/:productId" element={<ProductDetailPage />} />
          <Route path="/dat-lich" element={<BookingPage />} />
          <Route path="/dat-lich/:facilityId" element={<BookingPage />} />
          <Route path="/ve-chung-toi" element={<AboutPage />} />
          <Route path="*" element={<VillageNotFound />} />
        </Routes>
        </RouteTransition>
      </main>
      <Footer />
      <AuthModal />
    </div>
  );
}
