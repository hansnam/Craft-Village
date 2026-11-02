import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AuthModal from "./components/AuthModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import VillageDetailPage from "./pages/VillageDetailPage.jsx";
import FacilityPlaceholderPage from "./pages/FacilityPlaceholderPage.jsx";
import VillageNotFound from "./components/village/VillageNotFound.jsx";

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

export default function App() {
  return (
    <div className="page">
      <RouteScrollManager />
      <CustomCursor />
      <Header />
      <main className="page__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lang-nghe/:id" element={<VillageDetailPage />} />
          <Route
            path="/co-so/:facilityId"
            element={<FacilityPlaceholderPage />}
          />
          <Route path="*" element={<VillageNotFound />} />
        </Routes>
      </main>
      <Footer />
      <AuthModal />
    </div>
  );
}
