import React from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

export default function FacilityStory({ facility, onOpenLightbox }) {
  const storyImageRaw =
    facility?.images?.imageStory ||
    facility?.images?.consultation ||
    facility?.images?.header;
  const storyImageUrl = resolveMockAsset(storyImageRaw);

  const title = facility?.storyTitle || "Giữ nghề thủ công, kiến tạo giá trị";
  const content =
    facility?.storyContent ||
    facility?.description ||
    "Với bề dày kinh nghiệm và kỹ thuật chế tác thủ công được gìn giữ qua nhiều thế hệ, xưởng cam kết mang đến những sản phẩm đạt tiêu chuẩn cao nhất về thẩm mỹ và chất lượng.";

  return (
    <section id="cau-chuyen" className="workshop-section workshop-story" aria-labelledby="story-heading">
      <div className="workshop-section__container">
        <header className="workshop-section__header">
          <h2 id="story-heading" className="workshop-section__title">
            Câu chuyện
          </h2>
        </header>

        <div className="workshop-story__layout">
          {/* Cột trái: Văn bản câu chuyện */}
          <div className="workshop-story__text-col">
            <h3 className="workshop-story__facility-name">
              {facility?.name}
            </h3>

            {title && (
              <h4 className="workshop-story__kicker">
                {title}
              </h4>
            )}

            <div className="workshop-story__paragraphs">
              {content.split("\n").map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                return <p key={index}>{trimmed}</p>;
              })}
            </div>
          </div>

          {/* Cột phải: Hình ảnh câu chuyện */}
          <div className="workshop-story__media-col">
            {storyImageUrl ? (
              <div
                className="workshop-story__img-wrap"
                onClick={() => onOpenLightbox && onOpenLightbox(storyImageUrl, `${facility?.name} - Câu chuyện`)}
                title="Bấm để phóng to hình ảnh"
              >
                <img
                  src={storyImageUrl}
                  alt={`Câu chuyện ${facility?.name || "xưởng"}`}
                  className="workshop-story__img"
                  loading="lazy"
                />
                <span className="workshop-story__zoom-hint">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Phóng to
                </span>
              </div>
            ) : (
              <div className="workshop-story__img-placeholder">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span>{facility?.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
