import React, { useEffect, useRef } from "react";
import { productionProcesses } from "../../data/mockData.js";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

function DashedStepConnector({ fromLeft }) {
  const pathData = fromLeft
    ? "M 355 4 C 355 78, 645 52, 645 126"
    : "M 645 4 C 645 78, 355 52, 355 126";

  return (
    <div className="process-connector" data-process-reveal aria-hidden="true">
      <svg
        className="process-connector__svg"
        viewBox="0 0 1000 130"
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke="#a87063"
          strokeWidth="1.7"
          strokeDasharray="6 6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="process-connector__mobile-line" />
    </div>
  );
}

export default function VillageProcessSection({ village }) {
  const sectionRef = useRef(null);

  const villageProcesses = Array.isArray(productionProcesses)
    ? productionProcesses
        .filter((item) => item?.langNgheId === village?.id)
        .sort((a, b) => (a?.step ?? 0) - (b?.step ?? 0))
    : [];

  useEffect(() => {
    const container = sectionRef.current;
    if (!container || !villageProcesses.length) return undefined;

    const elements = container.querySelectorAll("[data-process-reveal]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return undefined;
    }

    elements.forEach((el) => el.classList.remove("is-revealed"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [village?.id, villageProcesses.length]);

  if (!villageProcesses.length) return null;

  return (
    <section
      className="home-section village-process-section"
      id="production-process"
      ref={sectionRef}
      aria-labelledby="village-process-heading"
    >
      <div className="section-container">
        <h2
          className="section-title village-process__heading"
          id="village-process-heading"
          data-process-reveal
        >
          Quy trình sản xuất
        </h2>

        <div className="village-process__timeline">
          {villageProcesses.map((stepItem, idx) => {
            const isImageLeft = idx % 2 === 0;
            const imageUrl = resolveMockAsset(stepItem?.image?.url);
            const imageAlt =
              stepItem?.image?.alt ||
              stepItem?.name ||
              `Bước ${stepItem?.step || idx + 1}`;
            const isLast = idx === villageProcesses.length - 1;

            return (
              <React.Fragment key={stepItem?.id || idx}>
                <article
                  className={`process-step ${
                    isImageLeft
                      ? "process-step--img-left"
                      : "process-step--img-right"
                  }`}
                  data-process-reveal
                >
                  <div className="process-step__media">
                    {imageUrl ? (
                      <img
                        className="process-step__image"
                        src={imageUrl}
                        alt={imageAlt}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="process-step__placeholder"
                        aria-hidden="true"
                      >
                        <span>Bước {stepItem?.step || idx + 1}</span>
                      </div>
                    )}
                  </div>

                  <div className="process-step__body">
                    <h3 className="process-step__title">{stepItem?.name}</h3>
                    {stepItem?.description && (
                      <p className="process-step__desc">
                        {stepItem.description}
                      </p>
                    )}
                  </div>
                </article>

                {!isLast && <DashedStepConnector fromLeft={isImageLeft} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
