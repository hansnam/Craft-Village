import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const auraRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [cursorMode, setCursorMode] = useState("default");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAvailability = () => {
      const canUse = finePointer.matches && !reducedMotion.matches;
      setEnabled(canUse);
      document.documentElement.classList.toggle("custom-cursor-active", canUse);
    };

    updateAvailability();
    finePointer.addEventListener("change", updateAvailability);
    reducedMotion.addEventListener("change", updateAvailability);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      finePointer.removeEventListener("change", updateAvailability);
      reducedMotion.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    let rafId = 0;
    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const auraPos = { x: -100, y: -100 };
    let initialized = false;

    const tick = () => {
      ringPos.x += (target.x - ringPos.x) * 0.18;
      ringPos.y += (target.y - ringPos.y) * 0.18;
      auraPos.x += (target.x - auraPos.x) * 0.1;
      auraPos.y += (target.y - auraPos.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x.toFixed(
          2
        )}px, ${ringPos.y.toFixed(2)}px, 0)`;
      }
      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraPos.x.toFixed(
          2
        )}px, ${auraPos.y.toFixed(2)}px, 0)`;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    const handleMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;

      if (!initialized) {
        ringPos.x = target.x;
        ringPos.y = target.y;
        auraPos.x = target.x;
        auraPos.y = target.y;
        initialized = true;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }

      setVisible(true);
    };

    const handleOver = (event) => {
      const el = event.target;
      if (!(el instanceof Element)) return;

      if (el.closest("input, textarea, select")) {
        setCursorMode("input");
        return;
      }
      if (el.closest("a, button, [data-cursor='link']")) {
        setCursorMode("link");
        return;
      }
      if (el.closest("[data-cursor='card']")) {
        setCursorMode("card");
        return;
      }
      setCursorMode("default");
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleLeaveWindow = () => setVisible(false);
    const handleEnterWindow = () => setVisible(true);

    rafId = window.requestAnimationFrame(tick);
    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);
    document.documentElement.addEventListener("mouseenter", handleEnterWindow);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleLeaveWindow
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleEnterWindow
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  const stateClasses = [
    "craft-cursor",
    visible ? "is-visible" : "",
    pressed ? "is-pressed" : "",
    `craft-cursor--${cursorMode}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={stateClasses} aria-hidden="true">
      <div className="craft-cursor__aura" ref={auraRef} />
      <div className="craft-cursor__ring" ref={ringRef}>
        <span className="craft-cursor__label">Xem ↗</span>
      </div>
      <div className="craft-cursor__dot" ref={dotRef} />
    </div>
  );
}

