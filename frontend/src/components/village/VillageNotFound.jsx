import React from "react";
import { Link } from "react-router-dom";

export default function VillageNotFound({
  title = "Không tìm thấy làng nghề",
  description = "Làng nghề bạn đang tìm kiếm không tồn tại hoặc đường dẫn không hợp lệ. Vui lòng quay lại Trang chủ để khám phá các làng nghề truyền thống Việt Nam.",
}) {
  return (
    <section className="village-not-found" aria-labelledby="not-found-heading">
      <div className="section-container village-not-found__card">
        <span className="village-not-found__kicker">CRAFT FOLIO</span>
        <h1 className="village-not-found__title" id="not-found-heading">
          {title}
        </h1>
        <p className="village-not-found__desc">{description}</p>
        <Link to="/" className="village-not-found__btn" data-cursor="link">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M16.5 10H4" />
            <path d="M8.5 5.5 4 10l4.5 4.5" />
          </svg>
          <span>Quay về Trang chủ</span>
        </Link>
      </div>
    </section>
  );
}

