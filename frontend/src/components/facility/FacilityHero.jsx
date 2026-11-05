import React, { useState, useEffect, useRef } from "react";
import { resolveMockAsset, resolveFacilityThumbnail } from "../../utils/resolveMockAsset.js";

/**
 * Component hiển thị con số đếm từ 0 lên giá trị đích mỗi khi lướt tới
 */
function AnimatedStatValue({ type, value, from, to, unit = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [displayFrom, setDisplayFrom] = useState(0);
  const [displayTo, setDisplayTo] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let rafId = null;
    let startTime = null;
    const duration = 1400; // 1.4s

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Bắt đầu chạy animation từ 0 mỗi khi phần tử xuất hiện trong viewport
          startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing cubic out
            const ease = 1 - Math.pow(1 - progress, 3);

            if (type === "range") {
              setDisplayFrom(Math.round(from * ease));
              setDisplayTo(Math.round(to * ease));
            } else {
              setDisplayValue(Math.round(value * ease));
            }

            if (progress < 1) {
              rafId = requestAnimationFrame(animate);
            }
          };

          rafId = requestAnimationFrame(animate);
        } else {
          // Reset về 0 khi người dùng lướt ra ngoài, để lần lướt đến tiếp theo lại chạy lại
          if (rafId) cancelAnimationFrame(rafId);
          setDisplayValue(0);
          setDisplayFrom(0);
          setDisplayTo(0);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [type, value, from, to]);

  return (
    <span ref={containerRef} className="workshop-stat-card__number">
      {type === "range" ? (
        <>
          {displayFrom} – {displayTo}
          {unit && <span className="workshop-stat-card__unit"> {unit}</span>}
        </>
      ) : (
        <>
          {displayValue}
          {unit && <span className="workshop-stat-card__unit">{unit}</span>}
        </>
      )}
    </span>
  );
}

export default function FacilityHero({ facility, onOpenConnect, onOpenLightbox }) {
  // Chuẩn bị đường dẫn ảnh Hero
  const rawHeroImage =
    facility?.images?.header ||
    facility?.images?.consultation ||
    facility?.images?.imageStory;
  const heroImageUrl = resolveMockAsset(rawHeroImage) || resolveFacilityThumbnail(facility);

  // 1. Thu thập tối đa 5 thuộc tính chỉ số
  const stats = [];

  // Thuộc tính 1: Diện tích xưởng
  if (facility?.dienTichXuong?.value != null) {
    stats.push({
      id: "dienTich",
      type: "single",
      value: Number(facility.dienTichXuong.value),
      unit: facility.dienTichXuong.unit || "m²",
      label: "Diện tích xưởng",
    });
  }

  // Thuộc tính 2: Kinh nghiệm sản xuất
  if (facility?.kinhNghiem?.value != null) {
    stats.push({
      id: "kinhNghiem",
      type: "single",
      value: Number(facility.kinhNghiem.value),
      unit: ` ${facility.kinhNghiem.unit || "năm"}`,
      label: "Kinh nghiệm sản xuất",
    });
  }

  // Thuộc tính 3: Số lượng tối thiểu
  if (facility?.soLuongToiThieu?.value != null) {
    stats.push({
      id: "soLuongToiThieu",
      type: "single",
      value: Number(facility.soLuongToiThieu.value),
      unit: "",
      label: "Số lượng tối thiểu",
    });
  }

  // Thuộc tính 4: Tùy vào số lượng đặt hàng (Thời gian hoàn thành)
  if (
    facility?.thoiGianGiaoHang?.from != null &&
    facility?.thoiGianGiaoHang?.to != null
  ) {
    stats.push({
      id: "thoiGianGiaoHang",
      type: "range",
      from: Number(facility.thoiGianGiaoHang.from),
      to: Number(facility.thoiGianGiaoHang.to),
      unit: facility.thoiGianGiaoHang.unit || "ngày",
      label: "Tùy vào số lượng đặt hàng",
    });
  } else if (facility?.thoiGianGiaoHang?.value != null) {
    stats.push({
      id: "thoiGianGiaoHang",
      type: "single",
      value: Number(facility.thoiGianGiaoHang.value),
      unit: ` ${facility.thoiGianGiaoHang.unit || "ngày"}`,
      label: "Tùy vào số lượng đặt hàng",
    });
  }

  // Thuộc tính 5: Hỗ trợ thiết kế & làm mẫu
  if (facility?.hoTroThietKeLamMau?.value != null) {
    stats.push({
      id: "hoTroThietKeLamMau",
      type: "single",
      value: Number(facility.hoTroThietKeLamMau.value),
      unit: facility.hoTroThietKeLamMau.unit || "%",
      label: "Hỗ trợ thiết kế & làm mẫu",
    });
  }

  return (
    <section className="workshop-hero" aria-labelledby="workshop-title">
      <div className="workshop-hero__container">
        {/* Hàng trên: Tiêu đề + Giới thiệu + Nút CTA & Ảnh nổi bật */}
        <div className="workshop-hero__top-row">
          <div className="workshop-hero__content">
            <h1 id="workshop-title" className="workshop-hero__title">
              {facility?.name || "Cơ sở sản xuất"}
            </h1>

            <p className="workshop-hero__desc">
              {facility?.description ||
                facility?.sanPhamDescription ||
                "Cơ sở sản xuất thủ công truyền thống với kỹ nghệ tinh xảo và khả năng đáp ứng theo yêu cầu của đối tác."}
            </p>

            <div className="workshop-hero__action">
              <button
                type="button"
                className="workshop-hero__cta-btn"
                onClick={onOpenConnect}
                data-cursor="button"
              >
                <span>Gửi yêu cầu kết nối</span>
                <span className="workshop-hero__cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="workshop-hero__media">
            {heroImageUrl ? (
              <div
                className="workshop-hero__img-frame"
                onClick={() => onOpenLightbox && onOpenLightbox(heroImageUrl, facility?.name)}
                title="Bấm để phóng to hình ảnh"
              >
                <img
                  src={heroImageUrl}
                  alt={facility?.name || "Hình ảnh xưởng sản xuất"}
                  className="workshop-hero__img"
                  loading="eager"
                />
                <span className="workshop-hero__zoom-pill">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Phóng to
                </span>
              </div>
            ) : (
              <div className="workshop-hero__placeholder">
                <div className="workshop-hero__placeholder-logo">
                  {facility?.name?.charAt(0) || "X"}
                </div>
                <span>{facility?.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hàng dưới: Các ô chỉ số (Chỉ hiển thị các trường cơ sở có, số chạy mỗi khi lướt tới) */}
        {stats.length > 0 && (
          <div
            className="workshop-hero__stats"
            style={{ "--stat-count": stats.length }}
            role="region"
            aria-label="Thông số năng lực xưởng"
          >
            {stats.map((item) => (
              <div key={item.id} className="workshop-stat-card">
                <div className="workshop-stat-card__val-wrap">
                  <AnimatedStatValue
                    type={item.type}
                    value={item.value}
                    from={item.from}
                    to={item.to}
                    unit={item.unit}
                  />
                </div>
                <div className="workshop-stat-card__label">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
