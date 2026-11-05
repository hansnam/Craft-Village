import React from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

export default function FacilityCapacities({
  capacities = [],
  facilityName = "",
  onOpenLightbox,
}) {
  const sortedCapacities = [...capacities].sort(
    (a, b) => (Number(a.order) || 0) - (Number(b.order) || 0)
  );

  return (
    <section id="nang-luc-san-xuat" className="workshop-section workshop-capacities" aria-labelledby="capacities-heading">
      <div className="workshop-section__container">
        <header className="workshop-section__header">
          <h2 id="capacities-heading" className="workshop-section__title">
            Năng lực sản xuất
          </h2>
          <p className="workshop-section__subtitle">
            Tập trung vào dòng sản phẩm đặc trưng và khả năng tùy biến theo yêu cầu
          </p>
        </header>

        {sortedCapacities.length > 0 ? (
          <div className="workshop-capacities__timeline">
            {/* Đường nét đứt uốn cong trang trí nối các bước (Dashed curved line) */}
            <div className="workshop-capacities__path-decoration" aria-hidden="true">
              <svg
                viewBox="0 0 600 1200"
                preserveAspectRatio="none"
                className="workshop-capacities__svg-path"
              >
                <path
                  d="M 280 60 C 450 180, 480 320, 300 420 C 120 520, 150 720, 320 820 C 460 900, 400 1100, 300 1160"
                  fill="none"
                  stroke="#c5b8a5"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
              </svg>
            </div>

            <div className="workshop-capacities__list">
              {sortedCapacities.map((item, index) => {
                const isEven = index % 2 === 1; // Item 0: Img Left, Item 1: Img Right, Item 2: Img Left, Item 3: Img Right
                const rawImg = item?.image?.url || item?.imageUrl || "";
                const imageUrl = resolveMockAsset(rawImg);

                return (
                  <div
                    key={item.id || index}
                    className={`workshop-capacity-row ${isEven ? "workshop-capacity-row--reverse" : ""}`}
                  >
                    {/* Khối Hình ảnh */}
                    <div className="workshop-capacity-row__media">
                      {imageUrl ? (
                        <div
                          className="workshop-capacity-row__img-frame"
                          onClick={() => onOpenLightbox && onOpenLightbox(imageUrl, item.name)}
                          title="Bấm để phóng to hình ảnh"
                        >
                          <img
                            src={imageUrl}
                            alt={item?.image?.alt || item.name || "Năng lực xưởng"}
                            className="workshop-capacity-row__img"
                            loading="lazy"
                          />
                          <span className="workshop-capacity-row__zoom-hint">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            Phóng to
                          </span>
                        </div>
                      ) : (
                        <div className="workshop-capacity-row__img-placeholder">
                          <span>{item.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Khối Nội dung text */}
                    <div className="workshop-capacity-row__content">
                      <span className="workshop-capacity-row__step-num">
                        Bước 0{index + 1}
                      </span>
                      <h3 className="workshop-capacity-row__title">
                        {item.name}
                      </h3>
                      <p className="workshop-capacity-row__desc">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="workshop-empty-state">
            <p>Thông tin năng lực sản xuất đang được cập nhật thêm.</p>
          </div>
        )}
      </div>
    </section>
  );
}
