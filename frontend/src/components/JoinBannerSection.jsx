import React, { useEffect, useRef } from "react";
import { brandAssets, joinBannerContent } from "../data/homeData.js";

export default function JoinBannerSection() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return undefined;

    const handleScroll = () => {
      const rect = banner.getBoundingClientRect();
      const viewportH = window.innerHeight || 800;
      if (rect.bottom < -100 || rect.top > viewportH + 100) return;

      const progress =
        (viewportH - rect.top) / (viewportH + rect.height) - 0.5;
      const offsetY = Math.max(-24, Math.min(24, progress * 46));
      banner.style.setProperty(
        "--banner-parallax-y",
        `${offsetY.toFixed(1)}px`
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="join-banner-wrapper"
      id="join-craft-folio"
      aria-labelledby="join-banner-heading"
    >
      <div
        className="join-banner"
        ref={bannerRef}
        data-reveal="banner-mask"
      >
        <div className="join-banner__media" aria-hidden="true">
          <img
            className="join-banner__image"
            src={brandAssets.joinBannerBg}
            alt={joinBannerContent.imageAlt}
            loading="lazy"
          />
          <div className="join-banner__shade" />
        </div>

        <div className="join-banner__inner">
          <div className="join-banner__copy">
            <h2 className="join-banner__title" id="join-banner-heading">
              {joinBannerContent.headingLines.map((line) => (
                <span key={line} className="join-banner__title-line">
                  {line}
                </span>
              ))}
            </h2>

            <p className="join-banner__desc">
              {joinBannerContent.description}
            </p>

            <a
              className="join-banner__cta"
              href={joinBannerContent.ctaHref}
              data-cursor="link"
            >
              <span>{joinBannerContent.ctaLabel}</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3.5 10h12.5" />
                <path d="m11.5 5.5 4.5 4.5-4.5 4.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
