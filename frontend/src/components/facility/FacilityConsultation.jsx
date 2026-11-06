import React from "react";
import { Link } from "react-router-dom";
import { resolveMockAsset, resolveFacilityThumbnail } from "../../utils/resolveMockAsset.js";

const DEFAULT_BADGES = [
  {
    id: "design",
    icon: "/download/images/facility_common/badge_icon_design.png",
    text: "Miễn phí thiết kế và in mẫu theo yêu cầu",
  },
  {
    id: "handcrafted",
    icon: "/download/images/facility_common/badge_icon_handcrafted.png",
    text: "Cam kết 100% sản phẩm thủ công",
  },
  {
    id: "delivery",
    icon: "/download/images/facility_common/badge_icon_delivery.png",
    text: "Giao hàng toàn quốc",
  },
  {
    id: "invoice",
    icon: "/download/images/facility_common/badge_icon_invoice.png",
    text: "Hỗ trợ xuất hóa đơn nhanh chóng",
  },
];

export default function FacilityConsultation({
  facility,
  onOpenConnect,
  onOpenLightbox,
}) {
  // Resolve consultation image
  const rawConsultImage =
    facility?.images?.consultation ||
    facility?.images?.header ||
    "/download/images/facility_common/consult_main_img.png";

  const consultImageUrl =
    resolveMockAsset(rawConsultImage) ||
    resolveFacilityThumbnail(facility) ||
    resolveMockAsset("/download/images/facility_common/consult_main_img.png");

  // Format phone display
  const phoneText = facility?.soDienThoai
    ? facility?.tenChuXuong
      ? `${facility.soDienThoai} (${facility.tenChuXuong})`
      : facility.soDienThoai
    : "0962.776.595";

  const addressText = facility?.diaChi
    ? `Địa chỉ: ${facility.diaChi}`
    : "Bát Tràng, Gia Lâm, Hà Nội";

  const descriptionText =
    facility?.tuVanDescription ||
    "Liên hệ trực tiếp để trao đổi mẫu thiết kế, số lượng và yêu cầu đặt hàng.";

  return (
    <section
      className="workshop-consult"
      id="tu-van"
      aria-labelledby="consult-heading"
    >
      <div className="workshop-consult__container">
        {/* Khối chính 2 cột: Banner ảnh bên trái + Form/Thông tin bên phải */}
        <div className="workshop-consult__card">
          {/* Cột trái: Ảnh minh họa tư vấn chế tác */}
          <div
            className="workshop-consult__media"
            onClick={() =>
              consultImageUrl &&
              onOpenLightbox &&
              onOpenLightbox(
                consultImageUrl,
                `Tư vấn thiết kế & đặt hàng - ${facility?.name || "Cơ sở"}`
              )
            }
            title={consultImageUrl ? "Nhấp để phóng to ảnh" : undefined}
          >
            {consultImageUrl ? (
              <img
                src={consultImageUrl}
                alt={`Tư vấn thiết kế xưởng ${facility?.name || ""}`}
                className="workshop-consult__img"
                loading="lazy"
              />
            ) : (
              <div className="workshop-consult__placeholder">
                <svg
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Tư vấn chế tác theo yêu cầu</span>
              </div>
            )}
          </div>

          {/* Cột phải: Thông tin tư vấn & Nút gửi yêu cầu */}
          <div className="workshop-consult__info">
            <span className="workshop-consult__tag">DỊCH VỤ CHẾ TÁC THEO YÊU CẦU</span>
            <h2 id="consult-heading" className="workshop-consult__title">
              TƯ VẤN THIẾT KẾ VÀ GỬI YÊU CẦU
            </h2>

            <p className="workshop-consult__desc">{descriptionText}</p>

            {/* Thông tin liên hệ nhanh: Số điện thoại & Địa chỉ */}
            <div className="workshop-consult__contact-box">
              <div className="workshop-consult__contact-item">
                <span className="workshop-consult__contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="workshop-consult__contact-text">
                  Số điện thoại: <strong>{phoneText}</strong>
                </span>
              </div>

              <div className="workshop-consult__contact-item">
                <span className="workshop-consult__contact-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="workshop-consult__contact-text">{addressText}</span>
              </div>
            </div>

            {/* Nút gửi yêu cầu kết nối & đặt lịch */}
            <div className="workshop-consult__action" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <button
                type="button"
                className="workshop-consult__btn"
                onClick={onOpenConnect}
                data-cursor="button"
              >
                <span>Gửi yêu cầu kết nối</span>
                <span className="workshop-consult__btn-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 20 20"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </span>
              </button>

              <Link
                to={`/dat-lich/${facility?.id || ""}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#FFFDF9",
                  color: "#730000",
                  border: "1.5px solid #730000",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.2s ease",
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Đặt lịch đến xưởng</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Thẻ Cam kết / Đặc quyền dịch vụ */}
        <div className="workshop-consult__badges" role="region" aria-label="Cam kết dịch vụ">
          {DEFAULT_BADGES.map((badge) => {
            const iconUrl = resolveMockAsset(badge.icon);
            return (
              <div key={badge.id} className="workshop-consult__badge-card">
                <div className="workshop-consult__badge-icon-wrap">
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt=""
                      className="workshop-consult__badge-icon"
                      loading="lazy"
                    />
                  ) : (
                    <div className="workshop-consult__badge-icon-fallback" />
                  )}
                </div>
                <p className="workshop-consult__badge-text">{badge.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
