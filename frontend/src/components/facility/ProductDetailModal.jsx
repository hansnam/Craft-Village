import React, { useEffect } from "react";
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
                title="Bấm để phóng to ảnh"
              >
                <img
                  src={imageUrl}
                  alt={product.name || "Sản phẩm thủ công"}
                  className="workshop-product-modal__img"
                />
                <span className="workshop-product-modal__zoom-hint">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Phóng to
                </span>
              </div>
            ) : (
              <div className="workshop-product-modal__placeholder">
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
          </div>
        </div>
      </div>
    </div>
  );
}
