import { useEffect } from "react";

/**
 * Mục 5.4: Lực hút từ tính con trỏ chuột nghệ nhân (Magnetic Button Effect)
 * Nút bấm kêu gọi hành động (CTA, xem chi tiết, đặt hẹn) tự động hút nhẹ
 * về phía con trỏ chuột khi đến gần (bán kính ~35-45px), tạo cảm giác êm ái, xúc giác.
 */
export function useMagnetic() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    let activeEl = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const animate = () => {
      if (activeEl) {
        currentX += (targetX - currentX) * 0.22;
        currentY += (targetY - currentY) * 0.22;
        activeEl.style.transform = `translate3d(${currentX.toFixed(
          2
        )}px, ${currentY.toFixed(2)}px, 0)`;
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const handlePointerMove = (e) => {
      // Find magnetic targets: elements with [data-magnetic] or key CTA buttons
      const target = e.target;
      if (!(target instanceof Element)) return;

      const magneticEl = target.closest(
        "[data-magnetic], .btn-primary, .workshop-hero__cta-btn, .booking-form__submit, .nav-cta, .heritage-btn"
      );

      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        // Pull strength: 0.28
        targetX = dx * 0.28;
        targetY = dy * 0.28;

        if (activeEl !== magneticEl) {
          activeEl = magneticEl;
          activeEl.classList.add("is-magnetic-active");
          if (!rafId) rafId = window.requestAnimationFrame(animate);
        }
      } else if (activeEl) {
        const prev = activeEl;
        activeEl = null;
        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;
        prev.classList.remove("is-magnetic-active");
        prev.style.transform = "translate3d(0, 0, 0)";
      }
    };

    const handlePointerLeave = () => {
      if (activeEl) {
        const prev = activeEl;
        activeEl = null;
        prev.classList.remove("is-magnetic-active");
        prev.style.transform = "translate3d(0, 0, 0)";
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave
    );

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      );
      if (activeEl) {
        activeEl.classList.remove("is-magnetic-active");
        activeEl.style.transform = "";
      }
    };
  }, []);
}

export default useMagnetic;
