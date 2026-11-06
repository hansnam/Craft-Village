import React from "react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../data/homeData.js";
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

export default function FeaturedProductsSection() {
  const cloneCount = 3;
  const {
    extendedItems,
    trackIndex,
    enableTransition,
    next,
    prev,
    handleTransitionEnd,
    gestureProps,
  } = useInfiniteCarousel(featuredProducts, cloneCount);

  return (
    <section
      className="home-section featured-section"
      id="featured-products"
      aria-labelledby="featured-products-title"
    >
      <div className="section-container">
        <h2
          className="section-title"
          id="featured-products-title"
          data-reveal="up"
        >
          Sản phẩm nổi bật
        </h2>

        <div
          className="carousel-shell"
          role="region"
          aria-roledescription="carousel"
          aria-label="Danh sách sản phẩm nổi bật"
          tabIndex={0}
          {...gestureProps}
        >
          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            aria-label="Xem sản phẩm nổi bật trước đó"
            onClick={prev}
            data-cursor="link"
          >
            <SideArrowIcon direction="left" />
          </button>

          <div className="carousel-viewport" data-reveal="stagger-up">
            <div
              className={
                enableTransition
                  ? "carousel-track is-animating"
                  : "carousel-track"
              }
              style={{ "--track-index": trackIndex }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedItems.map((product, index) => {
                const staggerSlot = Math.max(0, Math.min(2, index - cloneCount));
                const isInternalRoute = product.href && product.href.startsWith("/");

                return (
                  <article
                    className="product-card"
                    key={`${product.id}-${index}`}
                    style={{ "--stagger-index": staggerSlot }}
                    data-cursor="card"
                  >
                    <img
                      className={
                        product.imageVariant
                          ? `product-card__image product-card__image--${product.imageVariant}`
                          : "product-card__image"
                      }
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      draggable="false"
                    />
                    <div
                      className="product-card__overlay"
                      aria-hidden="true"
                    />
                    <div className="product-card__body">
                      <h3 className="product-card__title">{product.name}</h3>
                      <p className="product-card__desc">
                        {product.description}
                      </p>
                      {isInternalRoute ? (
                        <Link
                          className="product-card__action"
                          to={product.href}
                          aria-label={`Xem chi tiết sản phẩm ${product.name}`}
                        >
                          <span className="product-card__action-text">
                            Xem chi tiết
                          </span>
                          <svg
                            className="product-card__long-arrow"
                            viewBox="0 0 44 12"
                            aria-hidden="true"
                          >
                            <path d="M1 6h40" />
                            <path d="m36 1.5 5 4.5-5 4.5" />
                          </svg>
                        </Link>
                      ) : (
                        <a
                          className="product-card__action"
                          href={product.href}
                          aria-label={`Xem chi tiết sản phẩm ${product.name}`}
                        >
                          <span className="product-card__action-text">
                            Xem chi tiết
                          </span>
                          <svg
                            className="product-card__long-arrow"
                            viewBox="0 0 44 12"
                            aria-hidden="true"
                          >
                            <path d="M1 6h40" />
                            <path d="m36 1.5 5 4.5-5 4.5" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            aria-label="Xem sản phẩm nổi bật tiếp theo"
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
