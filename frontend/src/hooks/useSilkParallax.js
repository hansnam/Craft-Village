import { useEffect } from "react";

/**
 * Mục 5.2: Hiệu ứng "Lụa trôi" khi cuộn trang (Silk Flow Parallax)
 * Đồng bộ tốc độ cuộn lệch (Parallax ratio ~0.25 - 0.35) cho các lớp nền hoa văn
 * họa tiết (floral-sketch-pattern.svg / botanical_pattern.png) và dải sóng footer,
 * tạo cảm giác như dải lụa Nha Xá đang bồng bềnh dưới các bức ảnh tĩnh.
 */
export function useSilkParallax() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    let rafId = 0;
    let lastScrollY = -1;

    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (Math.abs(scrollY - lastScrollY) < 0.5) return;
      lastScrollY = scrollY;

      // Silk Parallax offset with 0.3 ratio
      const parallaxY = (scrollY * 0.3).toFixed(1);
      const silkSlowY = (scrollY * 0.15).toFixed(1);

      document.documentElement.style.setProperty(
        "--silk-parallax-y",
        `${parallaxY}px`
      );
      document.documentElement.style.setProperty(
        "--silk-parallax-slow",
        `${silkSlowY}px`
      );
    };

    const handleScroll = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    onScroll();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default useSilkParallax;

