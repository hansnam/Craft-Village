import React, { useEffect, useState } from "react";

/**
 * Mục 5.6: Thanh hành trình di sản (Heritage Progress Bar)
 * Thanh tiến trình mảnh mai màu đỏ mận ở mép trên màn hình,
 * điểm hoa sen vàng lướt theo tiến độ cuộn như một cuốn hải trình di sản văn hóa.
 */
export default function HeritageProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 80) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setScrollProgress(progress);
        setIsVisible(scrollTop > 20);
      } else {
        setScrollProgress(0);
        setIsVisible(false);
      }
    };

    const onScroll = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateProgress();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!isVisible && scrollProgress === 0) return null;

  return (
    <div
      className={`heritage-progress ${isVisible ? "is-active" : ""}`}
      role="progressbar"
      aria-label="Tiến trình khám phá di sản làng nghề"
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="heritage-progress__track">
        <div
          className="heritage-progress__fill"
          style={{ width: `${(scrollProgress * 100).toFixed(2)}%` }}
        >
          {/* Điểm hoa sen vàng dẫn đường ở đầu thanh tiến trình */}
          <div className="heritage-progress__lotus-marker" title="Dấu ấn di sản">
            <svg
              viewBox="0 0 24 24"
              className="heritage-progress__lotus-svg"
              aria-hidden="true"
            >
              {/* Búp sen vàng truyền thống */}
              <path
                d="M12 2C10.5 5.5 8 8 5 10c3 1.5 6 4 7 8 1-4 4-6.5 7-8-3-2-5.5-4.5-7-8z"
                fill="#e8d091"
              />
              <path
                d="M12 6c-1 2.5-2.5 4.5-4.5 5.5 2 1 3.5 2.8 4.5 5.5 1-2.7 2.5-4.5 4.5-5.5-2-1-3.5-3-4.5-5.5z"
                fill="#8f1d1d"
              />
              <circle cx="12" cy="12" r="1.5" fill="#fffdf9" />
            </svg>
            <div className="heritage-progress__halo" />
          </div>
        </div>
      </div>
    </div>
  );
}

