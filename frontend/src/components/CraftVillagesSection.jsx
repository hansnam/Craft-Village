import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { craftVillages } from "../data/homeData.js";
import useInfiniteCarousel from "../hooks/useInfiniteCarousel.js";

function SideArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "left" ? (
        <>
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
    </svg>
  );
}

export default function CraftVillagesSection() {
  const navigate = useNavigate();
  const dragStartRef = useRef({ x: 0, y: 0 });
  const cloneCount = 3;
  const {
    extendedItems,
    trackIndex,
    enableTransition,
    next,
    prev,
    handleTransitionEnd,
    gestureProps,
  } = useInfiniteCarousel(craftVillages, cloneCount);

  return (
    <section
      className="home-section villages-section"
      id="villages"
      aria-labelledby="villages-section-title"
    >
      <div className="section-container">
        <h2
          className="section-title"
          id="villages-section-title"
          data-reveal="up"
        >
          Làng nghề
        </h2>

        <div
          className="carousel-shell"
          role="region"
          aria-roledescription="carousel"
          aria-label="Danh sách các làng nghề truyền thống"
          tabIndex={0}
          {...gestureProps}
        >
          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            aria-label="Xem làng nghề trước đó"
            onClick={prev}
            data-cursor="link"
          >
            <SideArrowIcon direction="left" />
          </button>

          <div className="carousel-viewport" data-reveal="stagger-left">
            <div
              className={
                enableTransition
                  ? "carousel-track is-animating"
                  : "carousel-track"
              }
              style={{ "--track-index": trackIndex }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedItems.map((village, index) => {
                const staggerSlot = Math.max(0, Math.min(2, index - cloneCount));
                const villagePath = `/lang-nghe/${village.id}`;

                const handleCardPointerDown = (event) => {
                  dragStartRef.current = {
                    x: event.clientX,
                    y: event.clientY,
                  };
                };

                const handleCardClick = (event) => {
                  const dx = Math.abs(event.clientX - dragStartRef.current.x);
                  const dy = Math.abs(event.clientY - dragStartRef.current.y);

                  if (dx > 12 || dy > 12) {
                    event.preventDefault();
                    return;
                  }

                  if (event.target.closest("a")) {
                    return;
                  }

                  navigate(villagePath);
                };

                return (
                  <article
                    className="village-card village-card--clickable"
                    key={`${village.id}-${index}`}
                    style={{ "--stagger-index": staggerSlot }}
                    aria-label={village.fullName}
                    data-cursor="card"
                    onPointerDown={handleCardPointerDown}
                    onClick={handleCardClick}
                  >
                    <div className="village-card__header">
                      <div className="village-card__title-row">
                        <h3
                          className="village-card__title"
                          title={village.fullName}
                        >
                          <Link to={villagePath}>{village.shortName}</Link>
                        </h3>
                        {village.verified && (
                          <span className="village-card__badge">
                            <svg viewBox="0 0 14 14" aria-hidden="true">
                              <path d="M2.5 7.3 5.5 10.3 11.5 3.8" />
                            </svg>
                            Đã xác thực
                          </span>
                        )}
                      </div>

                      <p className="village-card__location">
                        {village.location}
                      </p>
                      <p className="village-card__desc">
                        {village.description}
                      </p>
                    </div>

                    <div className="village-card__media">
                      <img
                        className="village-card__image"
                        src={village.image}
                        alt={village.alt}
                        loading="lazy"
                        draggable="false"
                      />
                      <Link
                        className="village-card__cta"
                        to={villagePath}
                        aria-label={`Khám phá ${village.fullName}`}
                      >
                        <span className="village-card__cta-text">Khám phá</span>
                        <span
                          className="village-card__cta-circle"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 14 14">
                            <path d="M3.8 10.2 10.2 3.8" />
                            <path d="M5.2 3.8h5v5" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            aria-label="Xem làng nghề tiếp theo"
            onClick={next}
            data-cursor="link"
          >
            <SideArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
