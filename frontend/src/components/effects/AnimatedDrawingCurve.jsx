import React, { useEffect, useRef, useState } from "react";

/**
 * Mục 5.3: Hiệu ứng "Đường chỉ thêu thủ công" (Animated Drawing S-Curve)
 * Đường nét đứt uốn lượn hình chữ S tự động vẽ theo tiến trình cuộn trang
 * kèm đầu kim thêu ánh kim / hạt ngọc son dẫn đường luồn qua các công đoạn.
 */
export default function AnimatedDrawingCurve({ direction = "left-to-right", index = 0 }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [needlePos, setNeedlePos] = useState(null);
  const pathLengthRef = useRef(0);

  const pathD =
    direction === "left-to-right"
      ? "M 205 5 C 210 90, 370 75, 440 155"
      : "M 395 5 C 390 90, 230 75, 160 155";

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return undefined;

    try {
      const length = pathEl.getTotalLength();
      pathLengthRef.current = length;
      const initialPoint = pathEl.getPointAtLength(0);
      setNeedlePos({ x: initialPoint.x, y: initialPoint.y });
    } catch {
      pathLengthRef.current = 400;
    }

    let rafId = 0;

    const calculateProgress = () => {
      if (!containerRef.current || !pathEl) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when connector is 85% into viewport, complete when 35% from top
      const triggerStart = windowHeight * 0.88;
      const triggerEnd = windowHeight * 0.35;

      const currentY = rect.top;
      let ratio = (triggerStart - currentY) / (triggerStart - triggerEnd);
      ratio = Math.min(Math.max(ratio, 0), 1);

      setProgress(ratio);

      if (pathLengthRef.current > 0) {
        try {
          const pt = pathEl.getPointAtLength(ratio * pathLengthRef.current);
          setNeedlePos({ x: pt.x, y: pt.y });
        } catch {
          // Fallback if SVG measurement fails in some environments
        }
      }
    };

    const onScroll = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(calculateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    calculateProgress();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [direction]);

  const totalLength = pathLengthRef.current || 400;
  const strokeDashoffset = totalLength * (1 - progress);

  return (
    <div
      ref={containerRef}
      className={`workshop-capacity-connector animated-drawing-connector animated-drawing-connector--${direction}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 160"
        preserveAspectRatio="none"
        className="workshop-capacity-connector__svg"
      >
        <defs>
          {/* Gradient màu đỏ son kết hợp vàng đồng cho sợi chỉ thêu thủ công */}
          <linearGradient
            id={`embroideryGradient-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ba925e" />
            <stop offset="50%" stopColor="#8f1d1d" />
            <stop offset="100%" stopColor="#c53d3d" />
          </linearGradient>

          {/* Vầng hào quang của đầu kim thêu */}
          <radialGradient
            id={`needleGlow-${index}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#e8d091" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#8f1d1d" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8f1d1d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Đường nét mờ dẫn hướng (Guide trace) */}
        <path
          d={pathD}
          fill="none"
          stroke="#dfd7cb"
          strokeWidth="1.8"
          strokeDasharray="4 6"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* 2. Đường sợi chỉ thêu đang tự vẽ theo tiến độ cuộn (Active drawing thread) */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke={`url(#embroideryGradient-${index})`}
          strokeWidth="2.8"
          strokeDasharray="8 8"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 80ms linear",
            willChange: "stroke-dashoffset",
          }}
        />

        {/* 3. Đầu kim thêu dẫn lối & Hạt ngọc son di chuyển ở đầu sợi chỉ */}
        {needlePos && progress > 0.02 && (
          <g
            className="animated-drawing-connector__needle"
            style={{
              transform: `translate3d(${needlePos.x}px, ${needlePos.y}px, 0)`,
              transition: "transform 80ms linear",
            }}
          >
            {/* Vầng sáng kim thêu */}
            <circle
              cx="0"
              cy="0"
              r="10"
              fill={`url(#needleGlow-${index})`}
              className="needle-pulse"
            />
            {/* Thân hạt kim/ngọc son */}
            <circle
              cx="0"
              cy="0"
              r="4.2"
              fill="#8f1d1d"
              stroke="#e8d091"
              strokeWidth="1.8"
            />
            {/* Điểm sáng trung tâm */}
            <circle cx="-0.8" cy="-0.8" r="1.2" fill="#fffdf9" />
          </g>
        )}
      </svg>
    </div>
  );
}

