import React, { useEffect, useRef } from "react";
import { brandAssets, heroContent } from "../data/homeData.js";

const RIBBON_CONFIGS = [
  {
    yRatio: -0.25,
    zBase: 90,
    width: 34,
    ampY: 34,
    ampZ: 60,
    freq: 2.35,
    speed: 0.62,
    twistFreq: 2.8,
    phase: 0.2,
    parallaxFactor: 1.25,
    colorFront: [173, 210, 195],
    colorBack: [219, 202, 148],
    alpha: 0.2,
  },
  {
    yRatio: -0.31,
    zBase: 145,
    width: 24,
    ampY: 28,
    ampZ: 50,
    freq: 3.1,
    speed: -0.48,
    twistFreq: 3.4,
    phase: 2.1,
    parallaxFactor: 0.85,
    colorFront: [228, 214, 166],
    colorBack: [138, 184, 171],
    alpha: 0.16,
  },
  {
    yRatio: -0.2,
    zBase: 55,
    width: 18,
    ampY: 24,
    ampZ: 42,
    freq: 1.9,
    speed: 0.78,
    twistFreq: 2.2,
    phase: 4.0,
    parallaxFactor: 1.55,
    colorFront: [148, 196, 186],
    colorBack: [212, 194, 142],
    alpha: 0.15,
  },
];

function SilkRibbon3DCanvas({ pointerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const smoothPointer = { x: 0, y: 0 };

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    const fov = 560;
    const segments = 84;

    const project3D = (x, y, z) => {
      const scale = fov / Math.max(120, fov + z);
      return {
        sx: width * 0.5 + x * scale,
        sy: height * 0.42 + y * scale,
        scale,
      };
    };

    const drawRibbon = (cfg, timeSec) => {
      const spanX = width * 0.72 + 220;
      const px = smoothPointer.x * 50 * cfg.parallaxFactor;
      const py = smoothPointer.y * 28 * cfg.parallaxFactor;
      const points = [];

      for (let i = 0; i <= segments; i += 1) {
        const u = i / segments;
        const centered = (u - 0.5) * 2;
        const arch = (1 - centered * centered) * -54;

        const waveAngle =
          u * Math.PI * cfg.freq + timeSec * cfg.speed + cfg.phase;
        const secondaryWave =
          Math.cos(
            u * Math.PI * (cfg.freq * 1.6) - timeSec * cfg.speed * 0.7
          ) * 13;

        const x = centered * spanX + px + Math.sin(waveAngle * 0.6) * 20;
        const y =
          height * cfg.yRatio +
          arch +
          Math.sin(waveAngle) * cfg.ampY +
          secondaryWave +
          py;
        const z =
          cfg.zBase +
          Math.cos(waveAngle * 0.9 + cfg.phase) * cfg.ampZ +
          smoothPointer.x * centered * 36;

        const twist =
          u * Math.PI * cfg.twistFreq +
          timeSec * cfg.speed * 0.85 +
          smoothPointer.x * 0.65;

        const halfW = cfg.width * (0.45 + 0.55 * Math.sin(u * Math.PI));
        const offY = Math.cos(twist) * halfW;
        const offZ = Math.sin(twist) * halfW;

        const top = project3D(x, y - offY, z - offZ);
        const bot = project3D(x, y + offY, z + offZ);

        const facing = Math.sin(twist);
        const edgeFade = Math.sin(u * Math.PI);
        points.push({ top, bot, facing, edgeFade });
      }

      for (let i = 0; i < segments; i += 1) {
        const p0 = points[i];
        const p1 = points[i + 1];

        const light = 0.5 + 0.5 * p0.facing;
        const sheen = Math.pow(Math.max(0, 1 - Math.abs(p0.facing)), 2.2) * 44;
        const mix = p0.facing >= 0 ? cfg.colorFront : cfg.colorBack;

        const r = Math.min(
          255,
          Math.round(mix[0] * (0.76 + light * 0.32) + sheen)
        );
        const g = Math.min(
          255,
          Math.round(mix[1] * (0.78 + light * 0.3) + sheen)
        );
        const b = Math.min(
          255,
          Math.round(mix[2] * (0.8 + light * 0.28) + sheen)
        );
        const alpha = (
          cfg.alpha *
          p0.edgeFade *
          (0.58 + 0.42 * Math.abs(p0.facing) + 0.25 * (sheen / 44))
        ).toFixed(3);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p0.top.sx, p0.top.sy);
        ctx.lineTo(p1.top.sx, p1.top.sy);
        ctx.lineTo(p1.bot.sx, p1.bot.sy);
        ctx.lineTo(p0.bot.sx, p0.bot.sy);
        ctx.closePath();
        ctx.fill();

        if (i % 2 === 0) {
          ctx.strokeStyle = `rgba(248, 240, 212, ${(
            cfg.alpha *
            p0.edgeFade *
            0.4
          ).toFixed(3)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p0.top.sx, p0.top.sy);
          ctx.lineTo(p1.top.sx, p1.top.sy);
          ctx.stroke();
        }
      }
    };

    const renderFrame = (timestamp) => {
      const timeSec = timestamp * 0.001;
      smoothPointer.x += (pointerRef.current.x - smoothPointer.x) * 0.065;
      smoothPointer.y += (pointerRef.current.y - smoothPointer.y) * 0.065;

      ctx.clearRect(0, 0, width, height);
      RIBBON_CONFIGS.forEach((cfg) => drawRibbon(cfg, timeSec));

      if (!reducedMotion) {
        animationFrameId = window.requestAnimationFrame(renderFrame);
      }
    };

    animationFrameId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [pointerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="hero__silk-canvas"
      aria-hidden="true"
    />
  );
}

export default function HeroBanner() {
  const heroRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return undefined;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animateParallax = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;

      hero.style.setProperty("--bg-x", `${(currentX * -12).toFixed(2)}px`);
      hero.style.setProperty("--bg-y", `${(currentY * -6).toFixed(2)}px`);
      hero.style.setProperty("--glow-x", `${(currentX * 26).toFixed(2)}px`);
      hero.style.setProperty("--glow-y", `${(currentY * 16).toFixed(2)}px`);
      hero.style.setProperty("--title-x", `${(currentX * 6).toFixed(2)}px`);
      hero.style.setProperty("--title-y", `${(currentY * 4).toFixed(2)}px`);

      if (
        Math.abs(targetX - currentX) > 0.001 ||
        Math.abs(targetY - currentY) > 0.001
      ) {
        rafId = window.requestAnimationFrame(animateParallax);
      } else {
        rafId = 0;
      }
    };

    const scheduleUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(animateParallax);
      }
    };

    const handlePointerMove = (event) => {
      const bounds = hero.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      targetX = (event.clientX - bounds.left) / bounds.width - 0.5;
      targetY = (event.clientY - bounds.top) / bounds.height - 0.5;
      pointerRef.current = { x: targetX, y: targetY };
      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      pointerRef.current = { x: 0, y: 0 };
      scheduleUpdate();
    };

    const handleScroll = () => {
      const offset = Math.min(window.scrollY * 0.22, 130);
      const textOffset = Math.min(window.scrollY * 0.1, 60);
      hero.style.setProperty("--scroll-y", `${offset.toFixed(1)}px`);
      hero.style.setProperty("--text-scroll-y", `${textOffset.toFixed(1)}px`);
    };

    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
      aria-labelledby="hero-heading"
    >
      <img
        className="hero__backdrop-img"
        src={brandAssets.heroBg}
        alt=""
        aria-hidden="true"
      />
      <div className="hero__ambient-light" aria-hidden="true" />
      <SilkRibbon3DCanvas pointerRef={pointerRef} />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title" id="hero-heading">
          {heroContent.titleLines.map((line) => (
            <span key={line} className="hero__title-line">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__subtitle">{heroContent.subtitle}</p>
      </div>
    </section>
  );
}
