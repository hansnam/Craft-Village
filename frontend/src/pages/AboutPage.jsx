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

  // Image assets downloaded from Figma Frame 1576:373
  const heroBannerUrl = resolveMockAsset("/download/images/about_us/about_hero_figma.png");
  const projectThumbUrl = resolveMockAsset("/download/images/about_us/about_project_thumb.png");
  const panoramaArtisanUrl = resolveMockAsset("/download/images/about_us/about_panorama_artisan.png");
  const missionCard1Url = resolveMockAsset("/download/images/about_us/about_mission_card1.png");
  const missionCard2Url = resolveMockAsset("/download/images/about_us/about_mission_card2.png");
  const waveBgUrl = resolveMockAsset("/download/images/about_us/about_wave_bg.png");
  const visionIllustrationUrl = resolveMockAsset("/download/images/about_us/about_vision_illustration.png");

  return (
    <div className="about-page">
      {/* Botanical Pattern Background Overlay */}
      <div className="about-page__bg-pattern" aria-hidden="true" />

      {/* 1. HERO BANNER (Full width matching Figma Rectangle 5) */}
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
        </div>
      </section>

      <div className="about-page__container">
        {/* 2. THÔNG TIN DỰ ÁN */}
        <section className="about-section about-project" aria-labelledby="project-info-title">
          <div className="about-project__grid">
            <div
              className="about-project__media-wrap"
              onClick={() => openLightbox(projectThumbUrl, "Nghệ nhân gốm - Craft Folio")}
              data-cursor="button"
            >
              <img
                src={projectThumbUrl}
                alt="Nghệ nhân gốm thủ công"
                className="about-project__img"
                loading="lazy"
              />
            </div>
            <div className="about-project__content">
              <h1 id="project-info-title" className="about-section__title">
                Thông tin dự án
              </h1>
              <h2 className="about-section__subheading">
                Kết nối tinh hoa thủ công Việt
              </h2>
              <div className="about-section__line" aria-hidden="true" />
              <p className="about-section__lead">
                CRAFT FOLIO là dự án xây dựng website giới thiệu các làng nghề thủ công Việt Nam,
                tập trung vào thông tin về sản phẩm và cơ sở sản xuất. Website cung cấp những nội dung
                cần thiết để người dùng tìm hiểu đặc điểm sản phẩm, chất liệu, kỹ thuật chế tác và
                thông tin của các xưởng thủ công.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ĐẠI CẢNH & TUYÊN NGÔN BẢN SẮC */}
        <section className="about-section about-statement" aria-label="Tuyên ngôn dự án">
          <blockquote className="about-statement__quote">
            “CRAFT FOLIO không chỉ giới thiệu sản phẩm mà còn tạo điều kiện để các cơ sở sản xuất
            thể hiện năng lực và đặc điểm riêng của mình trên nền tảng số”
          </blockquote>

          <div
            className="about-statement__panorama-wrap"
            onClick={() => openLightbox(panoramaArtisanUrl, "Nghệ nhân làng nghề làm việc")}
            data-cursor="button"
          >
            <img
              src={panoramaArtisanUrl}
              alt="Đại cảnh nghệ nhân làng nghề làm việc"
              className="about-statement__panorama-img"
              loading="lazy"
            />
          </div>

          <p className="about-statement__lead">
            Thông qua việc tổng hợp và hệ thống hóa dữ liệu, CRAFT FOLIO hướng đến việc giúp các
            doanh nghiệp, đơn vị thiết kế và những khách hàng có nhu cầu hợp tác dễ dàng tìm kiếm
            sản phẩm thủ công phù hợp. Website cũng là nơi lưu trữ thông tin giới thiệu về các làng
            nghề và những sản phẩm đặc trưng, giúp người dùng tiếp cận nguồn thông tin tập trung hơn.
          </p>
        </section>

        {/* 4. SỨ MỆNH */}
        <section className="about-section about-mission" aria-labelledby="mission-title">
          <div className="about-mission__header">
            <h2 id="mission-title" className="about-section__title">
              Sứ mệnh
            </h2>
            <h3 className="about-section__subheading">
              Kết nối nghề Việt
            </h3>
            <div className="about-section__line" aria-hidden="true" />
          </div>

          <div className="about-mission__cards-grid">
            {/* Card 1: Chúng tôi hướng đến */}
            <div className="about-mission-card">
              <div
                className="about-mission-card__media"
                onClick={() => openLightbox(missionCard1Url, "Chúng tôi hướng đến")}
                data-cursor="button"
              >
                <img
                  src={missionCard1Url}
                  alt="Chúng tôi hướng đến"
                  loading="lazy"
                />
              </div>
              <div className="about-mission-card__body">
                <h4 className="about-mission-card__title">Chúng tôi hướng đến</h4>
                <p className="about-mission-card__desc">
                  CRAFT FOLIO hướng đến việc xây dựng một nguồn thông tin rõ ràng, dễ tiếp cận về các
                  làng nghề, sản phẩm và cơ sở sản xuất thủ công. Dự án mong muốn hỗ trợ người dùng tìm
                  hiểu sản phẩm, xác định cơ sở phù hợp và có thêm cơ sở để lựa chọn đối tác sản xuất.
                </p>
              </div>
            </div>

            {/* Card 2: Giá trị chúng tôi tạo ra */}
            <div className="about-mission-card">
              <div
                className="about-mission-card__media"
                onClick={() => openLightbox(missionCard2Url, "Giá trị chúng tôi tạo ra")}
                data-cursor="button"
              >
                <img
                  src={missionCard2Url}
                  alt="Giá trị chúng tôi tạo ra"
                  loading="lazy"
                />
              </div>
              <div className="about-mission-card__body">
                <h4 className="about-mission-card__title">Giá trị chúng tôi tạo ra</h4>
                <p className="about-mission-card__desc">
                  CRAFT FOLIO góp phần mở rộng khả năng tiếp cận khách hàng cho các cơ sở thủ công,
                  đồng thời giúp doanh nghiệp thuận tiện hơn khi tìm kiếm những sản phẩm phù hợp với
                  nhu cầu của mình.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TẦM NHÌN */}
        <section
          className="about-section about-vision"
          aria-labelledby="vision-title"
          style={{
            backgroundImage: `url('${waveBgUrl}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="about-vision__header">
            <h2 id="vision-title" className="about-section__title">
              Tầm nhìn
            </h2>
            <h3 className="about-section__subheading">
              Từ làng nghề đến đối tác
            </h3>
            <div className="about-section__line" aria-hidden="true" />
          </div>

          <div className="about-vision__grid">
            <div className="about-vision__text-col">
              <p className="about-section__lead">
                CRAFT FOLIO hướng đến việc mở rộng hệ thống dữ liệu về các làng nghề, đa dạng hóa
                danh mục sản phẩm và cập nhật thông tin của các cơ sở sản xuất. Trong tương lai, dự
                án mong muốn trở thành địa chỉ tham khảo hữu ích cho các doanh nghiệp và đơn vị thiết
                kế khi tìm kiếm sản phẩm thủ công phục vụ hoạt động kinh doanh.
              </p>
              <p className="about-section__lead">
                Thông qua việc xây dựng nội dung có hệ thống và duy trì thông tin rõ ràng, CRAFT
                FOLIO hướng đến việc thu hẹp khoảng cách giữa các cơ sở sản xuất thủ công và khách
                hàng doanh nghiệp, tạo điều kiện để hai bên tìm hiểu và kết nối thuận tiện hơn.
              </p>
            </div>

            <div
              className="about-vision__illustration-wrap"
              onClick={() => openLightbox(visionIllustrationUrl, "Tầm nhìn phát triển Craft Folio")}
              data-cursor="button"
            >
              <img
                src={visionIllustrationUrl}
                alt="Minh họa tầm nhìn phát triển làng nghề"
                className="about-vision__illustration-img"
                loading="lazy"
              />
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
