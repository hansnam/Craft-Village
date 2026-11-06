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
            <div className="workshop-capacities__list">
              {sortedCapacities.map((item, index) => {
                const isEven = index % 2 === 1; // index 0 (Row 1): Img Left, index 1 (Row 2): Img Right, index 2 (Row 3): Img Left, index 3 (Row 4): Img Right
                const rawImg = item?.image?.url || item?.imageUrl || "";
                const imageUrl = resolveMockAsset(rawImg);
                const hasNext = index < sortedCapacities.length - 1;

                return (
                  <React.Fragment key={item.id || index}>
                    {/* Hàng năng lực sản xuất */}
                    <div
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
                        <h3 className="workshop-capacity-row__title">
                          {item.name}
                        </h3>
                        <p className="workshop-capacity-row__desc">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Đường nét đứt uốn lượn mềm mại giữa các ảnh như hình mẫu */}
                    {hasNext && (
                      <div className="workshop-capacity-connector" aria-hidden="true">
                        <svg
                          viewBox="0 0 600 160"
                          preserveAspectRatio="none"
                          className="workshop-capacity-connector__svg"
                        >
                          {index % 2 === 0 ? (
                            // Uốn lượn từ Row ảnh bên Trái sang Row ảnh bên Phải (Row 1 -> Row 2, Row 3 -> Row 4)
                            <path
                              d="M 205 5 C 210 90, 370 75, 440 155"
                              fill="none"
                              stroke="#c4b5a4"
                              strokeWidth="2.5"
                              strokeDasharray="8 8"
                              strokeLinecap="round"
                            />
                          ) : (
                            // Uốn lượn từ Row ảnh bên Phải sang Row ảnh bên Trái (Row 2 -> Row 3)
                            <path
                              d="M 395 5 C 390 90, 230 75, 160 155"
                              fill="none"
                              stroke="#c4b5a4"
                              strokeWidth="2.5"
                              strokeDasharray="8 8"
                              strokeLinecap="round"
                            />
                          )}
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
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
