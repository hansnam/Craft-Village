import React from "react";
import { brandAssets, journeyContent } from "../data/homeData.js";

export default function JourneySection() {
  return (
    <section
      className="home-section journey-section"
      id="about"
      aria-labelledby="journey-section-title"
    >
      <div className="section-container">
        <h2
          className="section-title"
          id="journey-section-title"
          data-reveal="up"
        >
          {journeyContent.sectionTitle}
        </h2>

        <div className="journey-grid">
          <div className="journey-media" data-reveal="mask-left">
            <div className="journey-media__frame">
              <img
                src={brandAssets.journeyPhoto}
                alt={journeyContent.imageAlt}
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="journey-content"
            data-reveal="up"
            style={{ "--reveal-delay": "210ms" }}
          >
            <h3 className="journey-content__heading">
              {journeyContent.heading}
            </h3>

            <div className="journey-content__paragraphs">
              {journeyContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="journey-content__cta-row">
              <a
                className="journey-content__btn"
                href={journeyContent.ctaHref}
                data-cursor="link"
              >
                {journeyContent.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

