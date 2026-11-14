import React, { useState } from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

/**
 * Chuyển đổi tên cơ sở sang dạng viết hoa chữ cái đầu (Title Case)
 * Ví dụ: "GỐM TỚI LIÊN" -> "Gốm Tới Liên", "HTX MÂY TRE..." -> "HTX Mây Tre..."
 */
export function formatFacilityNameTitle(name) {
  if (!name || typeof name !== "string") return "";
  return name
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => {
      if (!word) return "";
      if (word.toUpperCase() === "HTX") return "HTX";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function StarRating({ count = 5 }) {
  return (
    <div className="workshop-stars" aria-label={`${count} sao`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width="16"
          height="16"
          fill={i < count ? "#f59e0b" : "#d1d5db"}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function FacilityReviews({ reviews = [], facilityName = "xưởng" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!reviews || reviews.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, reviews.length - 3)));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 3 < reviews.length ? prev + 1 : 0
    );
  };

  const displayTitleName = formatFacilityNameTitle(facilityName);

  return (
    <section id="danh-gia" className="workshop-section workshop-reviews" aria-labelledby="reviews-heading">
      <div className="workshop-section__container">
        <header className="workshop-section__header">
          <h2 id="reviews-heading" className="workshop-section__title">
            {displayTitleName.toLowerCase().includes("tạ thu hương") ||
            displayTitleName.length > 22 ? (
              <>
                Khách hàng nói gì về
                <br />
                {displayTitleName}
              </>
            ) : (
              <>Khách hàng nói gì về {displayTitleName}</>
            )}
          </h2>
        </header>

        <div className="workshop-reviews__slider-wrap">
          {reviews.length > 3 && (
            <button
              type="button"
              className="workshop-reviews__nav-btn workshop-reviews__nav-btn--prev"
              onClick={handlePrev}
              aria-label="Đánh giá trước"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div className="workshop-reviews__grid">
            {reviews.map((rev, index) => {
              const avatarUrl = rev.avatar ? resolveMockAsset(rev.avatar) : "";
              const isMiddleCard = index % 3 === 1; // Thẻ thứ 2 (ở giữa) dịch xuống tạo độ cong

              return (
                <div
                  key={rev.id || index}
                  className={`workshop-review-card ${isMiddleCard ? "workshop-review-card--middle" : ""}`}
                >
                  <div className="workshop-review-card__header">
                    <div className="workshop-review-card__user">
                      {avatarUrl ? (
                        <img
                          src={avatarUrl}
                          alt={rev.reviewerName || "Khách hàng"}
                          className="workshop-review-card__avatar"
                          loading="lazy"
                        />
                      ) : (
                        <div className="workshop-review-card__avatar-placeholder">
                          {rev.reviewerName?.charAt(0) || "K"}
                        </div>
                      )}

                      <div className="workshop-review-card__meta">
                        <span className="workshop-review-card__name">
                          {rev.reviewerName}
                        </span>
                        {rev.reviewTime && (
                          <span className="workshop-review-card__date">
                            {rev.reviewTime.includes("-")
                              ? rev.reviewTime.split("-").reverse().join("/")
                              : rev.reviewTime}
                          </span>
                        )}
                      </div>
                    </div>

                    <StarRating count={5} />
                  </div>

                  <p className="workshop-review-card__content">
                    {rev.content}
                  </p>
                </div>
              );
            })}
          </div>

          {reviews.length > 3 && (
            <button
              type="button"
              className="workshop-reviews__nav-btn workshop-reviews__nav-btn--next"
              onClick={handleNext}
              aria-label="Đánh giá tiếp theo"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
