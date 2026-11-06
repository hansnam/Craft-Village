import React, { useState, useEffect } from "react";
import { resolveMockAsset } from "../utils/resolveMockAsset.js";
import ImageLightboxModal from "../components/facility/ImageLightboxModal.jsx";

export default function AboutPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, imageUrl: "", title: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Về chúng tôi | CRAFT FOLIO - Kết nối làng nghề truyền thống";
  }, []);

  const openLightbox = (url, title) => {
    setLightbox({ isOpen: true, imageUrl: url, title: title || "Hình ảnh dự án" });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imageUrl: "", title: "" });
  };

  // Image assets downloaded from Figma
  const heroBannerUrl = resolveMockAsset("/download/images/about_us/about_hero_banner.jpg");
  const projectMidUrl = resolveMockAsset("/download/images/about_us/about_project_mid.jpg");
  const galleryLeftUrl = resolveMockAsset("/download/images/about_us/about_gallery_left.jpg");
  const galleryCenterUrl = resolveMockAsset("/download/images/about_us/about_gallery_center.jpg");
  const galleryRightUrl = resolveMockAsset("/download/images/about_us/about_gallery_right.jpg");
  const missionMainUrl = resolveMockAsset("/download/images/about_us/about_mission_main.jpg");
  const missionThumb1Url = resolveMockAsset("/download/images/about_us/about_mission_thumb1.jpg");
  const missionThumb2Url = resolveMockAsset("/download/images/about_us/about_mission_thumb2.jpg");
  const visionMainUrl = resolveMockAsset("/download/images/about_us/about_vision_main.jpg");

  return (
    <div className="about-page">
      {/* Botanical Pattern Background Overlay */}
      <div className="about-page__bg-pattern" aria-hidden="true" />

      <div className="about-page__container">
        {/* ==================================================================
            1. HERO BANNER
           ================================================================== */}
        <section className="about-hero" aria-label="Hình ảnh giới thiệu dự án">
          <div
            className="about-hero__banner-wrap"
            onClick={() => openLightbox(heroBannerUrl, "Craft Folio - Làng nghề Việt Nam")}
            data-cursor="button"
          >
            <img
              src={heroBannerUrl}
              alt="Craft Folio - Di sản và bàn tay làng nghề truyền thống"
              className="about-hero__banner-img"
              loading="eager"
            />
            <div className="about-hero__zoom-hint">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Phóng to</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. THÔNG TIN DỰ ÁN
           ================================================================== */}
        <section className="about-section about-project" aria-labelledby="project-info-title">
          <div className="about-section__header">
            <h1 id="project-info-title" className="about-section__title">
              Thông tin dự án
            </h1>
            <p className="about-section__tagline">
              Nơi lưu giữ vẻ đẹp duyên dáng của các sản phẩm thủ công Việt Nam
            </p>
            <p className="about-section__lead about-section__lead--center">
              CRAFT FOLIO là dự án xây dựng website giới thiệu các làng nghề thủ công Việt Nam,
              tập trung vào thông tin về sản phẩm và cơ sở sản xuất. Website cung cấp những nội dung
              cần thiết để người dùng tìm hiểu đặc điểm sản phẩm, chất liệu, kỹ thuật chế tác và
              thông tin của các xưởng thủ công.
            </p>
          </div>

          {/* Panoramic Mid Banner */}
          <div
            className="about-project__mid-banner-wrap"
            onClick={() => openLightbox(projectMidUrl, "Mây tre đan - Kỹ nghệ thủ công Việt")}
            data-cursor="button"
          >
            <img
              src={projectMidUrl}
              alt="Mây tre đan thủ công"
              className="about-project__mid-banner-img"
              loading="lazy"
            />
          </div>

          {/* Callout Quote */}
          <div className="about-section__highlight-quote">
            “CRAFT FOLIO không chỉ giới thiệu sản phẩm mà còn tạo điều kiện để các cơ sở sản xuất
            thể hiện năng lực và đặc điểm riêng của mình trên nền tảng số.”
          </div>

          <p className="about-section__lead about-section__lead--center" style={{ maxWidth: 840, margin: "0 auto" }}>
            Thông qua việc tổng hợp và hệ thống hóa dữ liệu, CRAFT FOLIO hướng đến việc giúp các
            doanh nghiệp, đơn vị thiết kế và những khách hàng có nhu cầu hợp tác dễ dàng tìm kiếm
            sản phẩm thủ công phù hợp. Website cũng là nơi lưu trữ thông tin giới thiệu về các làng
            nghề và những sản phẩm đặc trưng, giúp người dùng tiếp cận nguồn thông tin tập trung hơn.
          </p>

          {/* 3-Image Triptych Showcase */}
          <div className="about-gallery" role="region" aria-label="Bộ sưu tập hình ảnh dự án">
            <div
              className="about-gallery__item about-gallery__item--left"
              onClick={() => openLightbox(galleryLeftUrl, "Tác phẩm thủ công truyền thống")}
              data-cursor="button"
            >
              <img src={galleryLeftUrl} alt="Nghề thủ công Việt Nam" loading="lazy" />
              <span className="about-zoom-pill">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Xem ảnh
              </span>
            </div>

            <div
              className="about-gallery__item about-gallery__item--center"
              onClick={() => openLightbox(galleryCenterUrl, "Không gian chế tác làng nghề")}
              data-cursor="button"
            >
              <img src={galleryCenterUrl} alt="Không gian làng nghề" loading="lazy" />
              <span className="about-zoom-pill">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Xem ảnh
              </span>
            </div>

            <div
              className="about-gallery__item about-gallery__item--right"
              onClick={() => openLightbox(galleryRightUrl, "Sản phẩm thủ công tinh xảo")}
              data-cursor="button"
            >
              <img src={galleryRightUrl} alt="Sản phẩm tinh xảo" loading="lazy" />
              <span className="about-zoom-pill">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Xem ảnh
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            3. SỨ MỆNH
           ================================================================== */}
        <section className="about-section about-mission" aria-labelledby="mission-title">
          <div className="about-section__header" style={{ marginBottom: 24 }}>
            <h2 id="mission-title" className="about-section__title">
              Sứ mệnh
            </h2>
          </div>

          <div className="about-mission__layout">
            {/* Cột trái: Ảnh tiêu biểu */}
            <div
              className="about-mission__media-main"
              onClick={() => openLightbox(missionMainUrl, "Sứ mệnh kết nối nghề Việt")}
              data-cursor="button"
            >
              <img src={missionMainUrl} alt="Sứ mệnh kết nối nghề Việt" loading="lazy" />
              <span className="about-zoom-pill">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Phóng to
              </span>
            </div>

            {/* Cột phải: 2 ảnh nhỏ bên trên + Nội dung bên dưới */}
            <div className="about-mission__content">
              <div className="about-mission__thumbs">
                <div
                  className="about-mission__thumb-item"
                  onClick={() => openLightbox(missionThumb1Url, "Chi tiết tay nghề thợ thủ công")}
                  data-cursor="button"
                >
                  <img src={missionThumb1Url} alt="Tay nghề thợ thủ công" loading="lazy" />
                </div>
                <div
                  className="about-mission__thumb-item"
                  onClick={() => openLightbox(missionThumb2Url, "Sản phẩm làng nghề")}
                  data-cursor="button"
                >
                  <img src={missionThumb2Url} alt="Sản phẩm làng nghề" loading="lazy" />
                </div>
              </div>

              <h3 className="about-mission__subheading">Kết nối nghề Việt</h3>

              <p className="about-section__lead about-section__lead--left">
                CRAFT FOLIO hướng đến việc xây dựng một nguồn thông tin rõ ràng, dễ tiếp cận về các
                làng nghề, sản phẩm và cơ sở sản xuất thủ công. Dự án mong muốn hỗ trợ người dùng tìm
                hiểu sản phẩm, xác định cơ sở phù hợp và có thêm cơ sở để lựa chọn đối tác sản xuất.
              </p>

              <p className="about-section__lead about-section__lead--left">
                Thông qua việc giới thiệu sản phẩm và thông tin xưởng trên cùng một nền tảng, CRAFT
                FOLIO góp phần mở rộng khả năng tiếp cận khách hàng cho các cơ sở thủ công, đồng thời
                giúp doanh nghiệp thuận tiện hơn khi tìm kiếm những sản phẩm phù hợp với nhu cầu của
                mình.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. TẦM NHÌN
           ================================================================== */}
        <section className="about-section about-vision" aria-labelledby="vision-title">
          <div className="about-section__header" style={{ marginBottom: 24 }}>
            <h2 id="vision-title" className="about-section__title">
              Tầm nhìn
            </h2>
          </div>

          <div className="about-vision__layout">
            {/* Cột 1: Subtitle + Đoạn 1 */}
            <div className="about-vision__col">
              <h3 className="about-vision__subheading">Từ làng nghề đến đối tác</h3>
              <p className="about-section__lead about-section__lead--left">
                CRAFT FOLIO hướng đến việc mở rộng hệ thống dữ liệu về các làng nghề, đa dạng hóa
                danh mục sản phẩm và cập nhật thông tin của các cơ sở sản xuất. Trong tương lai, dự
                án mong muốn trở thành địa chỉ tham khảo hữu ích cho các doanh nghiệp và đơn vị thiết
                kế khi tìm kiếm sản phẩm thủ công phục vụ hoạt động kinh doanh.
              </p>
            </div>

            {/* Cột 2: Ảnh đứng trung tâm */}
            <div
              className="about-vision__center-media"
              onClick={() => openLightbox(visionMainUrl, "Tầm nhìn phát triển di sản thủ công")}
              data-cursor="button"
            >
              <img src={visionMainUrl} alt="Tầm nhìn Craft Folio" loading="lazy" />
              <span className="about-zoom-pill">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Phóng to
              </span>
            </div>

            {/* Cột 3: Đoạn 2 */}
            <div className="about-vision__col">
              <p className="about-section__lead about-section__lead--left">
                Thông qua việc xây dựng nội dung có hệ thống và duy trì thông tin rõ ràng, CRAFT
                FOLIO hướng đến việc thu hẹp khoảng cách giữa các cơ sở sản xuất thủ công và khách
                hàng doanh nghiệp, tạo điều kiện để hai bên tìm hiểu và kết nối thuận tiện hơn.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        onClose={closeLightbox}
      />
    </div>
  );
}
