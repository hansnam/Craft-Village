import React from "react";
import { resolveMockAsset } from "../../../utils/resolveMockAsset.js";

/**
 * PHẦN 2: CHUYỆN LÀNG NGHỀ — Template 'story-four-images'
 * Phục vụ 2 bố cục thiết kế riêng biệt:
 * 1. Quạt Chàng Sơn (QCS):
 *    - Hàng trên 2 cột: Trái (Tiêu đề, phụ đề, 2 đoạn văn) | Phải (Ảnh nghệ nhân & thiếu nữ).
 *    - Giữa: Đoạn văn thứ 3 trải ngang toàn khung.
 *    - Hàng dưới: Lưới 3 ảnh mẫu quạt dàn ngang cân đối.
 * 2. Gốm Bát Tràng (GBT):
 *    - Hàng trên 2 cột: Trái (Tiêu đề, phụ đề) | Phải (3 đoạn văn).
 *    - Giữa: Cụm 3 ảnh nhỏ dàn ngang.
 *    - Đáy: Banner ảnh đá đen & gốm sứ toàn chiều ngang kèm chữ nghệ thuật 2 dòng.
 */
export default function StoryFourImages({ village, story }) {
  if (!story) return null;

  const villageId = (village?.id || "").trim().toUpperCase();
  const title = story?.title || "Chuyện làng nghề";
  const subtitle = story?.subtitle || "";
  const paragraphs = Array.isArray(story?.paragraphs) ? story.paragraphs : [];
  const images = Array.isArray(story?.images) ? story.images : [];

  if (villageId === "QCS") {
    const heroSrc = resolveMockAsset(images[0]?.url);
    const heroAlt = images[0]?.alt || village?.name || "Quạt Chàng Sơn";

    // Thứ tự 3 ảnh đáy khớp chính xác thiết kế: Kẹp quạt trắng -> Quạt tranh Đông Hồ -> Quạt rồng vàng
    const bottomSlots = [
      { item: images[1], modifier: "" },
      { item: images[3], modifier: "" },
      { item: images[2], modifier: "story-qcs__gallery-img--dragon" },
    ].filter((slot) => slot.item);

    const topParagraphs = paragraphs.slice(0, 2);
    const tailParagraphs = paragraphs.slice(2);

    return (
      <section
        className="village-story story-qcs"
        aria-labelledby="village-story-heading"
      >
        <div className="section-container">
          <div className="story-qcs__top">
            <div className="story-qcs__intro">
              <h2 id="village-story-heading" className="village-story__title">
                {title}
              </h2>
              {subtitle && (
                <p className="village-story__subtitle story-qcs__subtitle">
                  {subtitle}
                </p>
              )}

              {topParagraphs.length > 0 && (
                <div className="village-story__paragraphs">
                  {topParagraphs.map((para, idx) => (
                    <p key={idx} className="village-story__paragraph">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="story-qcs__hero-media village-story__frame">
              {heroSrc ? (
                <img
                  src={heroSrc}
                  alt={heroAlt}
                  className="story-qcs__hero-img"
                  loading="lazy"
                />
              ) : (
                <div className="village-story__placeholder">{village?.name}</div>
              )}
            </div>
          </div>

          {tailParagraphs.length > 0 && (
            <div className="story-qcs__mid-copy village-story__paragraphs">
              {tailParagraphs.map((para, idx) => (
                <p key={idx + 2} className="village-story__paragraph">
                  {para}
                </p>
              ))}
            </div>
          )}

          {bottomSlots.length > 0 && (
            <div className="story-qcs__gallery">
              {bottomSlots.map(({ item, modifier }, idx) => {
                const src = resolveMockAsset(item?.url);
                const alt = item?.alt || `${village?.name || "Quạt"} ${idx + 2}`;
                return (
                  <div
                    key={idx}
                    className="story-qcs__gallery-card village-story__frame"
                  >
                    {src ? (
                      <img
                        src={src}
                        alt={alt}
                        className={`story-qcs__gallery-img ${modifier}`.trim()}
                        loading="lazy"
                      />
                    ) : (
                      <div className="village-story__placeholder">{alt}</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }

  // Mặc định & Gốm Bát Tràng (GBT)
  const middleCards = [
    { item: images[0], modifier: "" },
    { item: images[1], modifier: "story-gbt__gallery-img--vase" },
    { item: images[2], modifier: "" },
  ].filter((slot) => slot.item);

  const bannerSrc = resolveMockAsset(images[3]?.url);
  const bannerAlt = images[3]?.alt || village?.name || "Gốm Bát Tràng";

  // Tách "Bát Tràng – Nơi đất và lửa tạo nên tinh hoa gốm Việt." thành 2 dòng nghệ thuật như ảnh mẫu
  const cleanSubtitle = subtitle.replace(/[.。]+$/u, "").trim();
  const dashParts = cleanSubtitle.split(/\s*[–—-]\s*/);
  const bannerHeading =
    dashParts.length > 1 ? dashParts[0] : village?.name || "Bát Tràng";
  const bannerTagline =
    dashParts.length > 1 ? dashParts.slice(1).join(" – ") : cleanSubtitle;

  return (
    <section
      className="village-story story-gbt"
      aria-labelledby="village-story-heading"
    >
      <div className="section-container">
        <div className="story-gbt__top">
          <header className="story-gbt__header">
            <h2 id="village-story-heading" className="village-story__title">
              {title}
            </h2>
            {subtitle && (
              <p className="village-story__subtitle story-gbt__subtitle">
                {subtitle}
              </p>
            )}
          </header>

          {paragraphs.length > 0 && (
            <div className="story-gbt__copy village-story__paragraphs">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="village-story__paragraph">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>

        {middleCards.length > 0 && (
          <div className="story-gbt__gallery">
            {middleCards.map(({ item, modifier }, idx) => {
              const src = resolveMockAsset(item?.url);
              const alt = item?.alt || `${village?.name || "Gốm"} ${idx + 1}`;
              return (
                <div
                  key={idx}
                  className="story-gbt__gallery-card village-story__frame"
                >
                  {src ? (
                    <img
                      src={src}
                      alt={alt}
                      className={`story-gbt__gallery-img ${modifier}`.trim()}
                      loading="lazy"
                    />
                  ) : (
                    <div className="village-story__placeholder">{alt}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {(bannerSrc || bannerTagline) && (
        <div className="story-gbt__banner">
          {bannerSrc && (
            <img
              src={bannerSrc}
              alt={bannerAlt}
              className="story-gbt__banner-img"
              loading="lazy"
            />
          )}
          <div className="story-gbt__banner-overlay" aria-hidden="true" />
          <div className="story-gbt__banner-caption">
            {bannerHeading && (
              <p className="story-gbt__banner-title">{bannerHeading}</p>
            )}
            {bannerTagline && (
              <p className="story-gbt__banner-subtitle">{bannerTagline}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
