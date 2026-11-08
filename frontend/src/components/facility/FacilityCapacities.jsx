import React from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";
import AnimatedDrawingCurve from "../effects/AnimatedDrawingCurve.jsx";

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
                          >
                            <img
                              src={imageUrl}
                              alt={item?.image?.alt || item.name || "Năng lực xưởng"}
                              className="workshop-capacity-row__img"
                              loading="lazy"
                            />
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

                    {/* Đường chỉ thêu uốn lượn tự động vẽ theo tiến trình cuộn (Mục 5.3) */}
                    {hasNext && (
                      <AnimatedDrawingCurve
                        direction={index % 2 === 0 ? "left-to-right" : "right-to-left"}
                        index={index}
                      />
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
