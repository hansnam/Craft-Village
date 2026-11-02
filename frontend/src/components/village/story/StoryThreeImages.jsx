import React from "react";
import { resolveMockAsset } from "../../../utils/resolveMockAsset.js";

/**
 * PHẦN 2: CHUYỆN LÀNG NGHỀ — Template 'story-three-images' (Nón lá Chuông - NLC)
 * Bố cục theo thiết kế:
 * - Khối trên 2 cột bất đối xứng:
 *   + Cột trái: Tiêu đề "Chuyện làng nghề", phụ đề in đậm, bên dưới là ảnh nón lá sát mép trái màn hình bo góc phải.
 *   + Cột phải: 2 đoạn văn đầu, ảnh gánh hàng rong bo tròn ở giữa, đoạn văn thứ 3 bên dưới.
 * - Khối dưới: Banner nền tối toàn chiều ngang kèm câu trích dẫn nghệ thuật.
 */
export default function StoryThreeImages({ village, story }) {
  if (!story) return null;

  const title = story?.title || "Chuyện làng nghề";
  const subtitle = story?.subtitle || "";
  const paragraphs = Array.isArray(story?.paragraphs) ? story.paragraphs : [];
  const images = Array.isArray(story?.images) ? story.images : [];

  const leftImgSrc = resolveMockAsset(images[0]?.url);
  const leftImgAlt = images[0]?.alt || village?.name || "Chuyện làng nghề 1";

  const rightImgSrc = resolveMockAsset(images[1]?.url);
  const rightImgAlt = images[1]?.alt || village?.name || "Chuyện làng nghề 2";

  const quoteImgSrc = resolveMockAsset(images[2]?.url);
  const quoteImgAlt = images[2]?.alt || village?.name || "Trích dẫn làng nghề";

  const topParagraphs = paragraphs.slice(0, 2);
  const bottomParagraphs = paragraphs.slice(2);
  const cleanQuote = subtitle.replace(/[.。]+$/u, "").trim();

  return (
    <section
      className="village-story story-nlc"
      aria-labelledby="village-story-heading"
    >
      <div className="story-nlc__upper">
        {/* Cột trái: Tiêu đề + Phụ đề + Ảnh nón lá tràn mép trái */}
        <div className="story-nlc__left">
          <header className="story-nlc__intro">
            <h2 id="village-story-heading" className="village-story__title">
              {title}
            </h2>
            {subtitle && (
              <p className="village-story__subtitle story-nlc__subtitle">
                {subtitle}
              </p>
            )}
          </header>

          <div className="story-nlc__left-media village-story__frame">
            {leftImgSrc ? (
              <img
                src={leftImgSrc}
                alt={leftImgAlt}
                className="story-nlc__left-img"
                loading="lazy"
              />
            ) : (
              <div className="village-story__placeholder">{village?.name}</div>
            )}
          </div>
        </div>

        {/* Cột phải: 2 đoạn văn + Ảnh gánh hàng rong + Đoạn văn kết */}
        <div className="story-nlc__right">
          {topParagraphs.length > 0 && (
            <div className="village-story__paragraphs">
              {topParagraphs.map((para, idx) => (
                <p key={idx} className="village-story__paragraph">
                  {para}
                </p>
              ))}
            </div>
          )}

          <div className="story-nlc__right-media village-story__frame">
            {rightImgSrc ? (
              <img
                src={rightImgSrc}
                alt={rightImgAlt}
                className="story-nlc__right-img"
                loading="lazy"
              />
            ) : (
              <div className="village-story__placeholder">{village?.name}</div>
            )}
          </div>

          {bottomParagraphs.length > 0 && (
            <div className="village-story__paragraphs">
              {bottomParagraphs.map((para, idx) => (
                <p key={idx + 2} className="village-story__paragraph">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Khối trích dẫn nền sẫm toàn chiều rộng phía dưới */}
      {(quoteImgSrc || cleanQuote) && (
        <div className="story-nlc__quote-banner">
          {quoteImgSrc && (
            <img
              src={quoteImgSrc}
              alt={quoteImgAlt}
              className="story-nlc__quote-bg"
              loading="lazy"
            />
          )}
          <div className="story-nlc__quote-overlay" aria-hidden="true" />
          {cleanQuote && (
            <blockquote className="story-nlc__quote-content">
              <p className="story-nlc__quote-text">“{cleanQuote}”</p>
            </blockquote>
          )}
        </div>
      )}
    </section>
  );
}
