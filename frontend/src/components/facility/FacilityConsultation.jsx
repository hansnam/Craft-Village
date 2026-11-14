import React from "react";
import { Link } from "react-router-dom";
import { resolveMockAsset, resolveFacilityThumbnail } from "../../utils/resolveMockAsset.js";

const DEFAULT_BADGES = [
  {
    id: "design",
    text: "Miễn phí thiết kế và in\nmẫu theo yêu cầu",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        fill="none"
        stroke="#181010"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M36.5 23.5c0 7.456-6.716 13.5-15 13.5-2.38 0-4.63-.5-6.63-1.39L7.5 37.5l2.1-5.82C7.98 29.43 6.5 26.6 6.5 23.5 6.5 16.044 13.216 10 21.5 10c4.85 0 9.16 2.07 11.9 5.28" />
        <line x1="14" y1="21" x2="24" y2="21" />
        <line x1="14" y1="25.5" x2="27" y2="25.5" />
        <line x1="17" y1="30" x2="23" y2="30" />
        <path d="M27.5 24.5 39.2 12.8a2.4 2.4 0 0 1 3.4 3.4L30.9 27.9l-4.6 1.2 1.2-4.6Z" />
        <path d="m36.8 15.2 3.4 3.4" />
      </svg>
    ),
  },
  {
    id: "handcrafted",
    text: "Cam kết 100%\nsản phẩm thủ công",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        fill="none"
        stroke="#181010"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M24 5.5 27.4 8l4.1-.9 1.8 3.8 4.1 1.1.1 4.2 3.2 2.7-1.6 3.9 1.6 3.9-3.2 2.7-.1 4.2-4.1 1.1-1.8 3.8-4.1-.9L24 40.5l-3.4-2.5-4.1.9-1.8-3.8-4.1-1.1-.1-4.2-3.2-2.7 1.6-3.9-1.6-3.9 3.2-2.7.1-4.2 4.1-1.1 1.8-3.8 4.1.9L24 5.5Z" />
        <circle cx="24" cy="23" r="10.5" />
        <path d="m18.8 23.2 3.4 3.4 7.2-7.2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "delivery",
    text: "Giao hàng toàn quốc",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        width="42"
        height="40"
        fill="none"
        stroke="#181010"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="5" y1="18" x2="12" y2="18" />
        <line x1="3" y1="22.5" x2="12" y2="22.5" />
        <line x1="6.5" y1="27" x2="12" y2="27" />
        <rect x="12" y="13" width="19" height="18" rx="1" />
        <path d="M31 18h7.2l4.8 6.2V31h-12V18Z" />
        <path d="M33.8 20.8h3.4l2.8 3.6h-6.2v-3.6Z" />
        <line x1="10" y1="31" x2="44" y2="31" />
        <circle cx="19" cy="33.5" r="3.5" fill="#ffffff" />
        <circle cx="19" cy="33.5" r="1.2" />
        <circle cx="37" cy="33.5" r="3.5" fill="#ffffff" />
        <circle cx="37" cy="33.5" r="1.2" />
      </svg>
    ),
  },
  {
    id: "invoice",
    text: "Hỗ trợ xuất hóa đơn\nnhanh chóng",
    renderIcon: () => (
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        fill="none"
        stroke="#181010"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 7h24v33l-3-2.2-3 2.2-3-2.2-3 2.2-3-2.2-3 2.2-3-2.2-3 2.2V7Z" />
        <circle cx="24" cy="14.5" r="4.2" />
        <path d="M24 12v5M25.3 13.1c-.4-.4-1.8-.5-2.2.2-.4.7.4 1.1 1.2 1.3.8.2 1.5.6 1.1 1.4-.4.7-1.8.6-2.4.1" strokeWidth="1.3" />
        <line x1="16" y1="22" x2="32" y2="22" />
        <rect x="15.5" y="25" width="2.8" height="2.8" />
        <line x1="21" y1="26.4" x2="32" y2="26.4" />
        <rect x="15.5" y="29.8" width="2.8" height="2.8" />
        <line x1="21" y1="31.2" x2="32" y2="31.2" />
        <rect x="15.5" y="34.6" width="2.8" height="2.8" />
        <line x1="21" y1="36" x2="29" y2="36" />
      </svg>
    ),
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
  const phoneText = facility?.soDienThoai || "";

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
        <h2 id="consult-heading" className="workshop-consult__title">
          TƯ VẤN THIẾT KẾ &amp; GỬI YÊU CẦU
        </h2>
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
                  {phoneText}
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
              {facility?.email?.trim() && (
                <div className="workshop-consult__contact-item workshop-consult__contact-item--email">
                  <span className="workshop-consult__contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="5" width="18" height="14" rx="1" />
                      <path d="m3 6 9 7 9-7" />
                    </svg>
                  </span>
                  <a className="workshop-consult__contact-text" href={`mailto:${facility.email.trim()}`}>
                    {facility.email.trim()}
                  </a>
                </div>
              )}
            </div>

            {/* Nút gửi yêu cầu kết nối & đặt lịch */}
            <div className="workshop-consult__action" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <Link
                to={`/dat-lich/${facility?.id || ""}`}
                className="workshop-consult__btn"
                data-cursor="button"
              >
                <span className="workshop-consult__booking">
                  Đặt lịch đến xưởng
                </span>
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
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Thẻ Cam kết / Đặc quyền dịch vụ */}
        <div className="workshop-consult__badges" role="region" aria-label="Cam kết dịch vụ">
          {DEFAULT_BADGES.map((badge) => (
            <div key={badge.id} className="workshop-consult__badge-card">
              <div className="workshop-consult__badge-icon-wrap">
                {badge.renderIcon ? badge.renderIcon() : null}
              </div>
              <p className="workshop-consult__badge-text">{badge.text}</p>
            </div>
          ))}
        </div>
        {/* <Link className="workshop-consult__booking" to={`/dat-lich/${facility?.id || ""}`}>
          Đặt lịch đến xưởng
        </Link> */}
      </div>
    </section>
  );
}
