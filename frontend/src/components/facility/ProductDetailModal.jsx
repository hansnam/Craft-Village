import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

export default function ProductDetailModal({ isOpen, product, onClose, onOpenLightbox }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const rawImage = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : "";
  const imageUrl = resolveMockAsset(rawImage);

  return (
    <div
      className="workshop-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-modal-title"
    >
      <div className="workshop-modal-backdrop" />

      <div
        className="workshop-modal-card workshop-modal-card--product"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="workshop-modal-close"
          onClick={onClose}
          aria-label="Đóng chi tiết sản phẩm"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="workshop-product-modal__body">
          <div className="workshop-product-modal__media">
            {imageUrl ? (
              <div
                className="workshop-product-modal__img-wrapper"
                onClick={() => onOpenLightbox && onOpenLightbox(imageUrl, product.name)}
              >
                <img
                  src={imageUrl}
                  alt={product.name || "Sản phẩm thủ công"}
                  className="workshop-product-modal__img"
                />
              </div>
            ) : (
              <div className="workshop-product-modal__placeholder">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>Chưa có hình ảnh sản phẩm</span>
              </div>
            )}
          </div>

          <div className="workshop-product-modal__info">
            <span className="workshop-product-modal__badge">SẢN PHẨM NỔI BẬT</span>
            <h2 id="product-detail-modal-title" className="workshop-product-modal__title">
              {product.name || "Sản phẩm thủ công"}
            </h2>

            {product.itemDescription && (
              <p className="workshop-product-modal__desc">{product.itemDescription}</p>
            )}

            <div className="workshop-product-modal__specs">
              {product.chatLieu && (
                <div className="workshop-spec-row">
                  <span className="workshop-spec-row__label">Chất liệu:</span>
                  <span className="workshop-spec-row__value">{product.chatLieu}</span>
                </div>
              )}

              {product.kyThuat && (
                <div className="workshop-spec-row">
                  <span className="workshop-spec-row__label">Kỹ thuật:</span>
                  <span className="workshop-spec-row__value">{product.kyThuat}</span>
                </div>
              )}

              {product.xuatXu && (
                <div className="workshop-spec-row">
                  <span className="workshop-spec-row__label">Xuất xứ:</span>
                  <span className="workshop-spec-row__value">{product.xuatXu}</span>
                </div>
              )}

              {product.chatLieuVaMauSac && (
                <div className="workshop-spec-row">
                  <span className="workshop-spec-row__label">Màu sắc:</span>
                  <span className="workshop-spec-row__value">{product.chatLieuVaMauSac}</span>
                </div>
              )}

              {product.hoaTietVaKieuDang && (
                <div className="workshop-spec-row">
                  <span className="workshop-spec-row__label">Kiểu dáng:</span>
                  <span className="workshop-spec-row__value">{product.hoaTietVaKieuDang}</span>
                </div>
              )}
            </div>

            {product.dacDiemDescription && (
              <div className="workshop-product-modal__highlight">
                <strong>{product.dacDiemTitle || "Đặc điểm nổi bật"}: </strong>
                <span>{product.dacDiemDescription}</span>
              </div>
            )}

            {product.id && (
              <div style={{ marginTop: "20px" }}>
                <Link
                  to={`/san-pham/${product.id}`}
                  onClick={onClose}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#730000",
                    color: "#FFFBF2",
                    padding: "10px 18px",
                    borderRadius: "6px",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  <span>Xem trang chi tiết đầy đủ</span>
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
