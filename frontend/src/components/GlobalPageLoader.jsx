import React, { useEffect, useState } from "react";

const NON_LA_RIB_ANGLES = Array.from({ length: 16 }, (_, idx) => idx * 22.5);

/**
 * Hiệu ứng Loading toàn trang (Global Page Loader)
 * Hiển thị biểu tượng Nón Lá 3D xoay tròn đặc trưng di sản văn hóa Việt Nam,
 * chỉ hiển thị khi ứng dụng khởi động lần đầu.
 */
export default function GlobalPageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Khởi tạo lần đầu
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`global-page-loader ${
        !isLoading ? "global-page-loader--hidden" : ""
      }`}
      role="status"
      aria-live="polite"
      aria-hidden={!isLoading}
    >
      <div className="hero-loader__emblem" aria-hidden="true">
        {/* Vòng hào quang tơ vàng xoay nhẹ bên ngoài */}
        <svg
          className="hero-loader__orbit-svg"
          viewBox="0 0 140 140"
          fill="none"
        >
          <circle
            cx="70"
            cy="70"
            r="62"
            stroke="rgba(232, 208, 145, 0.2)"
            strokeWidth="1"
          />
          <circle
            cx="70"
            cy="70"
            r="62"
            stroke="#e8d091"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="56 138"
          />
        </svg>

        {/* Sân khấu chiếc Nón Lá 3D xoay tròn */}
        <div className="hero-loader__hat-stage">
          {/* Lòng nón 16 nan tre & vòng tre xoay tròn 360 độ theo góc nghiêng 3D */}
          <div className="hero-loader__brim-tilt">
            <svg
              className="hero-loader__brim-wheel"
              viewBox="0 0 128 128"
              fill="none"
            >
              <defs>
                <radialGradient
                  id="globalNonLaPalmGrad"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#fff3cf" stopOpacity="0.95" />
                  <stop offset="58%" stopColor="#e5c687" stopOpacity="0.88" />
                  <stop offset="100%" stopColor="#b88946" stopOpacity="0.92" />
                </radialGradient>
              </defs>

              <circle cx="64" cy="64" r="46" fill="url(#globalNonLaPalmGrad)" />

              {/* Các vòng tre đồng tâm đặc trưng nón làng Chuông */}
              <circle
                cx="64"
                cy="64"
                r="46"
                stroke="#f5e2b3"
                strokeWidth="2.2"
              />
              <circle
                cx="64"
                cy="64"
                r="42.5"
                stroke="#9e6f31"
                strokeWidth="0.9"
              />
              <circle
                cx="64"
                cy="64"
                r="34"
                stroke="#b38240"
                strokeWidth="0.85"
                strokeDasharray="3 2.5"
              />
              <circle
                cx="64"
                cy="64"
                r="25"
                stroke="#b38240"
                strokeWidth="0.85"
              />
              <circle
                cx="64"
                cy="64"
                r="16"
                stroke="#b38240"
                strokeWidth="0.8"
                strokeDasharray="2.5 2"
              />

              {/* Họa tiết cánh sen đỏ son thêu đối xứng trên mặt nón */}
              <path
                d="M64 23 C69 29, 69 36, 64 41 C59 36, 59 29, 64 23 Z"
                fill="rgba(155, 34, 34, 0.72)"
              />
              <path
                d="M64 105 C69 99, 69 92, 64 87 C59 92, 59 99, 64 105 Z"
                fill="rgba(155, 34, 34, 0.72)"
              />
              <path
                d="M23 64 C29 59, 36 59, 41 64 C36 69, 29 69, 23 64 Z"
                fill="rgba(155, 34, 34, 0.72)"
              />
              <path
                d="M105 64 C99 59, 92 59, 87 64 C92 69, 99 69, 105 64 Z"
                fill="rgba(155, 34, 34, 0.72)"
              />

              {/* 16 nan nón tỏa đều từ chóp ra vành cái */}
              {NON_LA_RIB_ANGLES.map((deg) => (
                <line
                  key={deg}
                  x1="64"
                  y1="64"
                  x2="64"
                  y2="18"
                  stroke="#8f6229"
                  strokeWidth="0.9"
                  strokeOpacity="0.72"
                  transform={`rotate(${deg} 64 64)`}
                />
              ))}

              <circle cx="64" cy="64" r="4.2" fill="#8f1d1d" />
              <circle cx="64" cy="64" r="1.8" fill="#fff4d2" />
            </svg>
          </div>

          {/* Mái chóp nón nghiêng 3D & dải quai thao lụa mềm bên dưới */}
          <svg
            className="hero-loader__cone-crown"
            viewBox="0 0 128 128"
            fill="none"
          >
            <defs>
              <linearGradient
                id="globalNonLaCrownShade"
                x1="22"
                y1="24"
                x2="106"
                y2="82"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#fff6da" stopOpacity="0.62" />
                <stop offset="52%" stopColor="#e6c889" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#8c5e24" stopOpacity="0.46" />
              </linearGradient>
            </defs>

            <path
              d="M64 22 L18 71 A46 25.5 0 0 0 110 71 Z"
              fill="url(#globalNonLaCrownShade)"
              stroke="#f3dfb0"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <path
              d="M64 22 L36 79"
              stroke="rgba(255, 250, 232, 0.55)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M64 22 L90 80"
              stroke="rgba(120, 78, 28, 0.35)"
              strokeWidth="0.95"
              strokeLinecap="round"
            />
            <circle
              cx="64"
              cy="22"
              r="3"
              fill="#f7e5b7"
              stroke="#9a6b2e"
              strokeWidth="1"
            />
            <path
              d="M44 89 C50 108, 78 108, 84 89"
              stroke="#c83e3b"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M44 89 C52 103, 76 103, 84 89"
              stroke="rgba(255, 226, 168, 0.55)"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="hero-loader__copy">
        <p className="hero-loader__title">
          Đang tải không gian làng nghề
          <span className="hero-loader__dots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
        <span className="hero-loader__bar" aria-hidden="true">
          <span className="hero-loader__bar-fill" />
        </span>
      </div>
    </div>
  );
}

