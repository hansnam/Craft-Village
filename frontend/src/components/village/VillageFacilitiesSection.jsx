import React from "react";
import { Link } from "react-router-dom";
import { facilities } from "../../data/mockData.js";
import { resolveFacilityThumbnail } from "../../utils/resolveMockAsset.js";

function FacilityCard({ facility, index }) {
  const thumbUrl = resolveFacilityThumbnail(facility);
  const shortSummary =
    facility?.description ||
    facility?.sanPhamDescription ||
    "Cơ sở sản xuất thủ công truyền thống phục vụ đối tác và khách hàng doanh nghiệp.";

  const supportsCustomDesign =
    facility?.hoTroThietKeLamMau === null ||
    facility?.hoTroThietKeLamMau === undefined ||
    Number(facility?.hoTroThietKeLamMau?.value) > 0;

  return (
    <article
      className="facility-card"
      style={{ "--facility-index": index }}
      data-cursor="card"
    >
      <Link
        to={`/co-so/${facility.id}`}
        className="facility-card__media"
        aria-label={`Xem chi tiết cơ sở ${facility?.name || ""}`}
      >
        {thumbUrl ? (
          <img
            className="facility-card__image"
            src={thumbUrl}
            alt={facility?.name || "Cơ sở sản xuất làng nghề"}
            loading="lazy"
          />
        ) : (
          <div className="facility-card__placeholder" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <path d="M8 38h32M12 38V20l12-9 12 9v18M20 38v-9h8v9" />
            </svg>
            <span>{facility?.name || "Xưởng thủ công"}</span>
          </div>
        )}
      </Link>

      <div className="facility-card__content">
        <div className="facility-card__top-row">
          <h3 className="facility-card__title">
            <Link to={`/co-so/${facility.id}`}>{facility?.name}</Link>
          </h3>

          <span className="village-card__badge facility-card__verified">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="m3.2 8.3 3.1 3.1 6.5-6.6" />
            </svg>
            <span>Đã xác thực</span>
          </span>
        </div>

        <div className="facility-card__meta">
          <div className="facility-card__meta-row">
            <span className="facility-card__meta-icon" aria-hidden="true">
              {/* Biểu tượng túi sản phẩm có dấu kiểm chuẩn Ảnh 3 */}
              <svg viewBox="0 0 22 22">
                <path d="M5.2 7.5h11.6l1 11.2a1.4 1.4 0 0 1-1.4 1.5H5.6a1.4 1.4 0 0 1-1.4-1.5l1-11.2Z" />
                <path d="M8 7.5V5.8a3 3 0 0 1 6 0v1.7" />
                <path d="m8.4 13.3 1.9 1.9 3.5-3.6" />
              </svg>
            </span>
            <p className="facility-card__meta-text">{shortSummary}</p>
          </div>

          {facility?.diaChi && (
            <div className="facility-card__meta-row">
              <span className="facility-card__meta-icon" aria-hidden="true">
                <svg viewBox="0 0 22 22">
                  <path d="M11 19.4s6-5.2 6-10.1a6 6 0 1 0-12 0c0 4.9 6 10.1 6 10.1Z" />
                  <circle cx="11" cy="9.2" r="2.2" />
                </svg>
              </span>
              <p className="facility-card__meta-text">{facility.diaChi}</p>
            </div>
          )}
        </div>

        <div className="facility-card__footer">
          <div className="facility-card__tags">
            <span className="facility-card__tag">Nhận đơn hàng lớn</span>
            {supportsCustomDesign && (
              <span className="facility-card__tag">
                Nhận thiết kế theo yêu cầu
              </span>
            )}
          </div>

          <Link
            to={`/co-so/${facility.id}`}
            className="facility-card__detail-btn"
            data-cursor="link"
          >
            <span>Xem chi tiết</span>
            <span className="facility-card__detail-circle" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <path d="M4.8 11.2 11.2 4.8" />
                <path d="M6 4.8h5.2V10" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function VillageFacilitiesSection({ village }) {
  const villageFacilities = Array.isArray(facilities)
    ? facilities.filter((item) => item?.langNgheId === village?.id)
    : [];

  if (!villageFacilities.length) return null;

  return (
    <section
      className="home-section village-facilities-section"
      id="facilities"
      aria-labelledby="village-facilities-heading"
    >
      <div className="section-container">
        <h2
          className="village-facilities__heading"
          id="village-facilities-heading"
        >
          CƠ SỞ SẢN XUẤT
        </h2>

        <div className="village-facilities__list">
          {villageFacilities.map((facility, idx) => (
            <FacilityCard
              key={facility?.id || idx}
              facility={facility}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

