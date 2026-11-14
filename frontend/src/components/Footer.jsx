import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { brandAssets } from "../data/homeData.js";

function appendSplineCurve(points) {
  let segment = "";
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    segment += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(
      2
    )} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return segment;
}

function buildSmoothClosedWavePath(points, width, bottomY) {
  if (points.length < 2) return "";
  return `M 0 ${points[0].y.toFixed(2)}${appendSplineCurve(
    points
  )} L ${width} ${bottomY} L 0 ${bottomY} Z`;
}

function buildSmoothBandPath(topPoints, bottomPoints) {
  if (topPoints.length < 2 || bottomPoints.length < 2) return "";
  const reversedBottom = [...bottomPoints].reverse();
  return `M ${topPoints[0].x.toFixed(2)} ${topPoints[0].y.toFixed(
    2
  )}${appendSplineCurve(topPoints)} L ${reversedBottom[0].x.toFixed(
    2
  )} ${reversedBottom[0].y.toFixed(2)}${appendSplineCurve(reversedBottom)} Z`;
}

function buildSmoothOpenStrokePath(points) {
  if (points.length < 2) return "";
  return `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(
    2
  )}${appendSplineCurve(points)}`;
}

function SilkRibbonWave() {
  const solidFloorRef = useRef(null);
  const backBandRef = useRef(null);
  const midBandRef = useRef(null);
  const crescentBandRef = useRef(null);
  const topStrokeRef = useRef(null);
  const midStrokeRef = useRef(null);
  const bronzeStrokeRef = useRef(null);

  useEffect(() => {
    const width = 1440;
    const height = 270;
    const samples = 48;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId = 0;

    const sampleLayer = (profileFn, timeSec) => {
      const pts = [];
      for (let i = 0; i <= samples; i += 1) {
        const u = i / samples;
        pts.push({
          x: u * width,
          y: profileFn(u, timeSec),
        });
      }
      return pts;
    };

    // Upper silk sash edge: arches gently on left, dips in center, crests high on right (matching Image 3)
    const upperSilkProfile = (u, t) => {
      const base =
        86 -
        30 * Math.exp(-Math.pow((u - 0.09) / 0.13, 2)) +
        104 * Math.exp(-Math.pow((u - 0.39) / 0.16, 2)) -
        68 * Math.exp(-Math.pow((u - 0.77) / 0.19, 2)) +
        6 * u;
      const wave =
        Math.sin(u * Math.PI * 2.3 - t * 1.18) * 12 +
        Math.cos(u * Math.PI * 4.1 - t * 0.76) * 4.5;
      return base + wave;
    };

    // Secondary intertwined silk fold creating the 3D organza/silk overlap
    const midSilkProfile = (u, t) => {
      const base =
        134 -
        32 * Math.exp(-Math.pow((u - 0.13) / 0.14, 2)) +
        62 * Math.exp(-Math.pow((u - 0.34) / 0.15, 2)) -
        92 * Math.exp(-Math.pow((u - 0.76) / 0.18, 2)) +
        14 * u;
      const wave =
        Math.sin(u * Math.PI * 2.55 - t * 1.38 + 0.95) * 13 +
        Math.sin(u * Math.PI * 4.4 - t * 0.84) * 4.2;
      return base + wave;
    };

    // Signature continuous bronze silk contour line
    const bronzeLineProfile = (u, t) => {
      const base =
        152 -
        42 * Math.exp(-Math.pow((u - 0.14) / 0.14, 2)) +
        44 * Math.exp(-Math.pow((u - 0.41) / 0.17, 2)) -
        84 * Math.exp(-Math.pow((u - 0.77) / 0.16, 2)) +
        12 * u;
      const wave =
        Math.sin(u * Math.PI * 2.4 - t * 1.26 + 0.45) * 11 +
        Math.cos(u * Math.PI * 3.9 - t * 0.78) * 3.8;
      return base + wave;
    };

    // Lower soft crescent fold dipping beneath the center twist before merging into footer body
    const lowerPocketProfile = (u, t) => {
      const bronzeY = bronzeLineProfile(u, t);
      const crescentDip =
        46 * Math.exp(-Math.pow((u - 0.41) / 0.14, 2)) +
        8 * Math.exp(-Math.pow((u - 0.78) / 0.14, 2));
      const gentleBreath =
        Math.sin(u * Math.PI * 2.2 - t * 1.08 + 1.4) * 4.5 *
        Math.exp(-Math.pow((u - 0.42) / 0.2, 2));
      return bronzeY + crescentDip + gentleBreath;
    };

    const renderWave = (timestamp) => {
      const t = timestamp * 0.001;

      const upperPts = sampleLayer(upperSilkProfile, t);
      const midPts = sampleLayer(midSilkProfile, t);
      const bronzePts = sampleLayer(bronzeLineProfile, t);
      const lowerPts = sampleLayer(lowerPocketProfile, t);

      if (solidFloorRef.current) {
        solidFloorRef.current.setAttribute(
          "d",
          buildSmoothClosedWavePath(lowerPts, width, height)
        );
      }
      if (backBandRef.current) {
        backBandRef.current.setAttribute(
          "d",
          buildSmoothBandPath(upperPts, lowerPts)
        );
      }
      if (midBandRef.current) {
        midBandRef.current.setAttribute(
          "d",
          buildSmoothBandPath(midPts, bronzePts)
        );
      }
      if (crescentBandRef.current) {
        crescentBandRef.current.setAttribute(
          "d",
          buildSmoothBandPath(bronzePts, lowerPts)
        );
      }
      if (topStrokeRef.current) {
        topStrokeRef.current.setAttribute(
          "d",
          buildSmoothOpenStrokePath(upperPts)
        );
      }
      if (midStrokeRef.current) {
        midStrokeRef.current.setAttribute(
          "d",
          buildSmoothOpenStrokePath(midPts)
        );
      }
      if (bronzeStrokeRef.current) {
        bronzeStrokeRef.current.setAttribute(
          "d",
          buildSmoothOpenStrokePath(bronzePts)
        );
      }

      if (!reducedMotion) {
        rafId = window.requestAnimationFrame(renderWave);
      }
    };

    rafId = window.requestAnimationFrame(renderWave);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="footer__silk-wrap" aria-hidden="true">
      <svg
        className="footer__waves"
        viewBox="0 0 1440 270"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="silk-fold-back" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5ddd0" stopOpacity="0.82" />
            <stop offset="26%" stopColor="#d7cdbb" stopOpacity="0.66" />
            <stop offset="52%" stopColor="#cfc4b1" stopOpacity="0.76" />
            <stop offset="78%" stopColor="#e2dacb" stopOpacity="0.86" />
            <stop offset="100%" stopColor="#ebe4d7" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="silk-fold-mid" x1="0%" y1="15%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#efe9de" stopOpacity="0.55" />
            <stop offset="36%" stopColor="#d4c9b7" stopOpacity="0.72" />
            <stop offset="68%" stopColor="#ded5c5" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#f2ede3" stopOpacity="0.62" />
          </linearGradient>

          <linearGradient
            id="silk-crescent-grad"
            x1="20%"
            y1="0%"
            x2="65%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ddd4c5" stopOpacity="0.72" />
            <stop offset="55%" stopColor="#e8e1d5" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#f8f5ee" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        <path ref={solidFloorRef} fill="#f8f5ee" />
        <path ref={backBandRef} fill="url(#silk-fold-back)" />
        <path ref={midBandRef} fill="url(#silk-fold-mid)" />
        <path ref={crescentBandRef} fill="url(#silk-crescent-grad)" />
        <path
          ref={topStrokeRef}
          fill="none"
          stroke="#d5c9b6"
          strokeWidth="1.1"
          strokeOpacity="0.78"
        />
        <path
          ref={midStrokeRef}
          fill="none"
          stroke="#dfd5c5"
          strokeWidth="0.9"
          strokeOpacity="0.65"
        />
        <path
          ref={bronzeStrokeRef}
          fill="none"
          stroke="#b29e82"
          strokeWidth="1.75"
          strokeOpacity="0.92"
        />
      </svg>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="footer" id="footer">
      <SilkRibbonWave />

      <div className="footer__body">
        <div className="section-container footer__grid">
          {/* Left Column: Brand + Contact + Newsletter */}
          <div className="footer__left">
            <a
              className="footer__brand"
              href="#home"
              aria-label="Craft Folio - Về đầu trang"
              data-cursor="link"
            >
              <span className="brand__logo-frame brand__logo-frame--footer">
                <img
                  className="brand__logo brand__logo--footer"
                  src={brandAssets.logo}
                  alt="Craft Folio"
                />
              </span>
              <span className="footer__brand-name">Craft Folio</span>
            </a>

            <address className="footer__contact-list">
              <div className="footer__contact-row">
                <span className="footer__icon" aria-hidden="true">
                  {/* Folded Map + Pin Outline Icon matching Image 3 */}
                  <svg viewBox="0 0 24 24">
                    <path d="M9 18.5 3.5 20.5V6.5L9 4.5m0 14 6 2m-6-2v-7m6 9 5.5-2V6.5l-5.5 2m0 12v-9" />
                    <path d="M12 12.2s3.2-2.9 3.2-5.2a3.2 3.2 0 1 0-6.4 0c0 2.3 3.2 5.2 3.2 5.2Z" />
                    <circle cx="12" cy="7" r="1.1" />
                  </svg>
                </span>
                <p className="footer__contact-text">
                  Số 96A Trần Phú (Km10, Đường Nguyễn Trãi), Phường Mộ
                  <br />
                  Lao, Quận Hà Đông, Hà Nội.
                </p>
              </div>

              <div className="footer__contact-row">
                <span className="footer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5.4 4.2h3.1l1.5 3.7-2 1.7a12.6 12.6 0 0 0 6.4 6.4l1.7-2 3.7 1.5v3.1a1.7 1.7 0 0 1-1.8 1.7A16.5 16.5 0 0 1 3.7 6a1.7 1.7 0 0 1 1.7-1.8Z" />
                  </svg>
                </span>
                <a
                  className="footer__contact-link"
                  href="tel:0972206411"
                  data-cursor="link"
                >
                  0972206411
                </a>
              </div>

              <div className="footer__contact-row">
                <span className="footer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5.5" width="18" height="13" rx="1.8" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <a
                  className="footer__contact-link footer__contact-link--email"
                  href="mailto:craftfoliocskh@gmail.com"
                  data-cursor="link"
                >
                  craftfoliocskh@gmail.com
                </a>
              </div>

              <div className="footer__contact-row footer__contact-row--hours">
                <span className="footer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.4V12l3.2 2" />
                  </svg>
                </span>
                <p className="footer__contact-text">08:00 AM - 07:30 PM</p>
              </div>
            </address>

            <div className="footer__newsletter">
              <h4 className="footer__newsletter-heading">
                ĐỪNG BỎ LỠ THÔNG TIN
              </h4>
              <p className="footer__newsletter-desc">
                Để cập nhật những sản phẩm mới, nhận thông
                <br />
                tin ưu đãi đặc biệt và thông tin khác.
              </p>

              <form className="footer__form" onSubmit={handleSubscribe}>
                <label className="footer__input-box" htmlFor="footer-email">
                  <span className="footer__input-icon" aria-hidden="true">
                    <svg viewBox="0 0 22 22">
                      <rect x="2.5" y="5" width="17" height="12" rx="1.6" />
                      <path d="m3.5 6.4 7.5 5.4 7.5-5.4" />
                    </svg>
                  </span>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder={
                      subscribed
                        ? "Đã đăng kí thành công!"
                        : "Nhập email của bạn"
                    }
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="footer__submit-btn"
                  data-cursor="link"
                >
                  ĐĂNG KÍ
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Vision Statement */}
          <div className="footer__right">
            <h3 className="footer__vision-title">
              <Link to="/ve-chung-toi" className="footer__vision-link" data-cursor="link">
                Tầm nhìn của chúng tôi
              </Link>
            </h3>
            <p className="footer__vision-quote">
              “CRAFT FOLIO hướng đến xây dựng hệ thống Digital Portfolio trực quan, giúp doanh nghiệp dễ dàng tìm kiếm, đánh giá và kết nối với các xưởng phù hợp. Trong giai đoạn đầu, dự án tập trung phát triển phiên bản thử nghiệm, xây dựng hồ sơ xưởng thực tế và tiếp nhận phản hồi để hoàn thiện nền tảng”
            </p>
            <p className="footer__vision-motto">SỐ HÓA – KẾT NỐI – LAN TỎA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
