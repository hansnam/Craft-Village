import React from "react";
import { Link, useParams } from "react-router-dom";
import { facilities, villages } from "../data/mockData.js";
import VillageNotFound from "../components/village/VillageNotFound.jsx";

export default function FacilityPlaceholderPage() {
  const { facilityId } = useParams();
  const normalizedId = (facilityId || "").trim().toUpperCase();

  const facility = Array.isArray(facilities)
    ? facilities.find(
        (item) => (item?.id || "").toUpperCase() === normalizedId
      )
    : null;

  if (!facility) {
    return (
      <VillageNotFound
        title="Không tìm thấy cơ sở sản xuất"
        description="Cơ sở sản xuất bạn đang tìm kiếm không tồn tại hoặc đường dẫn không hợp lệ."
      />
    );
  }

  const parentVillage = Array.isArray(villages)
    ? villages.find((v) => v?.id === facility?.langNgheId)
    : null;

  return (
    <section className="village-not-found" aria-labelledby="facility-heading">
      <div className="section-container village-not-found__card">
        <span className="village-not-found__kicker">
          {parentVillage ? `LÀNG NGHỀ ${parentVillage.name.toUpperCase()}` : "CƠ SỞ SẢN XUẤT"}
        </span>
        <h1 className="village-not-found__title" id="facility-heading">
          {facility?.name}
        </h1>
        <p className="village-not-found__desc">
          {facility?.description || facility?.sanPhamDescription}
        </p>
        {facility?.diaChi && (
          <p className="village-not-found__meta">Địa chỉ: {facility.diaChi}</p>
        )}
        <div className="village-not-found__actions">
          {facility?.langNgheId && (
            <Link
              to={`/lang-nghe/${facility.langNgheId}`}
              className="village-not-found__btn"
              data-cursor="link"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M16.5 10H4" />
                <path d="M8.5 5.5 4 10l4.5 4.5" />
              </svg>
              <span>Quay lại {parentVillage?.name || "Làng nghề"}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

