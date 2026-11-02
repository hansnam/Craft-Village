import React from "react";
import { resolveMockAsset } from "../../../utils/resolveMockAsset.js";

/**
 * PHẦN 2: CHUYỆN LÀNG NGHỀ — Template 'story-two-images'
 * Phục vụ 2 bố cục thiết kế riêng biệt:
 * 1. Mây tre đan Phú Vinh (MTD):
 *    - Khối trên: Cột trái (Tiêu đề, phụ đề, 2 đoạn văn) | Cột phải (Cặp ảnh giỏ mây ngang + đèn mây dọc).
 *    - Khối dưới: Trái (Ảnh bộ đôi đèn thả trần mây tre khổ rộng) | Phải (Đoạn văn thứ 3 căn giữa dọc).
 * 2. Lụa Nha Xá (LNX):
 *    - Cột trái: Tiêu đề, phụ đề và 3 đoạn văn trên nền giấy hoa sen.
 *    - Khối phải tràn sát lề phải: Ảnh nhuộm lụa khổ dọc lớn làm nền + Khung ảnh thiếu nữ áo dài xanh ngọc viền trắng đè lên ranh giới trái.
 */
export default function StoryTwoImages({ village, story }) {
  if (!story) return null;

  const villageId = (village?.id || "").trim().toUpperCase();
  const title = story?.title || "Chuyện làng nghề";
  const subtitle = story?.subtitle || "";
  const paragraphs = Array.isArray(story?.paragraphs) ? story.paragraphs : [];
  const images = Array.isArray(story?.images) ? story.images : [];

  if (villageId === "MTD") {
    const basketsSrc = resolveMockAsset(images[0]?.url);
    const basketsAlt =
      images[0]?.alt || village?.name || "Sản phẩm mây tre đan Phú Vinh";

    const lanternTallSrc = resolveMockAsset(images[1]?.url);
    const lanternTallAlt =
      images[1]?.alt || village?.name || "Đèn lồng mây tre đan";

    const pendantWideItem = images[2] || images[1] || images[0];
    const pendantWideSrc = resolveMockAsset(pendantWideItem?.url);
    const pendantWideAlt =
      pendantWideItem?.alt || village?.name || "Không gian đèn mây tre đan";

    const topParagraphs = paragraphs.slice(0, 2);
    const bottomParagraphs = paragraphs.slice(2);

    return (
      <section
        className="village-story story-mtd"
        aria-labelledby="village-story-heading"
      >
        <div className="section-container">
          <div className="story-mtd__top">
            <div className="story-mtd__intro">
              <h2 id="village-story-heading" className="village-story__title">
                {title}
              </h2>
              {subtitle && (
                <p className="village-story__subtitle story-mtd__subtitle">
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

            <div className="story-mtd__top-pair">
              <div className="story-mtd__pair-wide village-story__frame">
                {basketsSrc ? (
                  <img
                    src={basketsSrc}
                    alt={basketsAlt}
                    className="story-mtd__pair-wide-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="village-story__placeholder">
                    {village?.name}
                  </div>
                )}
              </div>

              <div className="story-mtd__pair-tall village-story__frame">
                {lanternTallSrc ? (
                  <img
                    src={lanternTallSrc}
                    alt={lanternTallAlt}
                    className="story-mtd__pair-tall-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="village-story__placeholder">
                    {village?.name}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="story-mtd__bottom">
            <div className="story-mtd__bottom-media village-story__frame">
              {pendantWideSrc ? (
                <img
                  src={pendantWideSrc}
                  alt={pendantWideAlt}
                  className="story-mtd__bottom-img"
                  loading="lazy"
                />
              ) : (
                <div className="village-story__placeholder">{village?.name}</div>
              )}
            </div>

            {bottomParagraphs.length > 0 && (
              <div className="story-mtd__bottom-copy village-story__paragraphs">
                {bottomParagraphs.map((para, idx) => (
                  <p key={idx + 2} className="village-story__paragraph">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Mặc định & Lụa Nha Xá (LNX)
  const portraitSrc = resolveMockAsset(images[0]?.url);
  const portraitAlt =
    images[0]?.alt || village?.name || "Áo dài lụa truyền thống Nha Xá";

  const dyeingBgSrc = resolveMockAsset((images[1] || images[0])?.url);
  const dyeingBgAlt =
    (images[1] || images[0])?.alt ||
    village?.name ||
    "Nghệ nhân nhuộm lụa Nha Xá";

  return (
    <section
      className="village-story story-lnx"
      aria-labelledby="village-story-heading"
    >
      <div className="section-container story-lnx__container">
        <div className="story-lnx__content">
          <h2 id="village-story-heading" className="village-story__title">
            {title}
          </h2>
          {subtitle && (
            <p className="village-story__subtitle story-lnx__subtitle">
              {subtitle}
            </p>
          )}

          {paragraphs.length > 0 && (
            <div className="story-lnx__paragraphs village-story__paragraphs">
              {paragraphs.map((para, idx) => (
                <p key={idx} className="village-story__paragraph">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="story-lnx__visual">
        <div className="story-lnx__bg-media">
          {dyeingBgSrc ? (
            <img
              src={dyeingBgSrc}
              alt={dyeingBgAlt}
              className="story-lnx__bg-img"
              loading="lazy"
            />
          ) : (
            <div className="village-story__placeholder">{village?.name}</div>
          )}
        </div>

        {portraitSrc && (
          <figure className="story-lnx__inset-card">
            <img
              src={portraitSrc}
              alt={portraitAlt}
              className="story-lnx__inset-img"
              loading="lazy"
            />
          </figure>
        )}
      </div>
    </section>
  );
}
