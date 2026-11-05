import React from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

export default function FacilityProducts({
  facility,
  products = [],
  onSelectProduct,
  onOpenLightbox,
}) {
  const subtitle =
    facility?.sanPhamDescription ||
    "Dòng sản phẩm thủ công truyền thống phù hợp với khách hàng có nhu cầu tìm kiếm sản phẩm chất lượng phục vụ trang trí, quà tặng hoặc sử dụng chuyên biệt.";

  return (
    <section id="san-pham" className="workshop-section workshop-products" aria-labelledby="products-heading">
      <div className="workshop-section__container">
        <header className="workshop-section__header">
          <h2 id="products-heading" className="workshop-section__title">
            Sản phẩm
          </h2>
          <p className="workshop-section__subtitle">{subtitle}</p>
        </header>

        {products.length > 0 ? (
          <div className="workshop-products__grid">
            {products.map((product, index) => {
              const rawImg =
                Array.isArray(product.images) && product.images.length > 0
                  ? product.images[0]
                  : "";
              const imageUrl = resolveMockAsset(rawImg);

              return (
                <article
                  key={product.id || index}
                  className="workshop-product-card"
                  data-cursor="card"
                  onClick={() => onSelectProduct && onSelectProduct(product)}
                >
                  <div className="workshop-product-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={product.name || "Sản phẩm xưởng"}
                        className="workshop-product-card__img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="workshop-product-card__placeholder">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span>{product.name || "Sản phẩm thủ công"}</span>
                      </div>
                    )}
                  </div>

                  {/* Gradient tối ở đáy thẻ để làm nổi bật tên & nút */}
                  <div className="workshop-product-card__overlay" />

                  <div className="workshop-product-card__footer">
                    <h3 className="workshop-product-card__name">
                      {product.name || "Sản phẩm thủ công"}
                    </h3>

                    <button
                      type="button"
                      className="workshop-product-card__btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectProduct) onSelectProduct(product);
                      }}
                      aria-label={`Xem chi tiết ${product.name || "sản phẩm"}`}
                    >
                      <span>Xem chi tiết</span>
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="workshop-empty-state">
            <p>Danh mục sản phẩm của cơ sở đang được cập nhật thêm.</p>
          </div>
        )}
      </div>
    </section>
  );
}

