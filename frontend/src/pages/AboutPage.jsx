import React, { useState, useEffect, useRef } from "react";
import { resolveMockAsset } from "../utils/resolveMockAsset.js";
import ImageLightboxModal from "../components/facility/ImageLightboxModal.jsx";

const base = import.meta.env.BASE_URL || "/";

function getAssetUrl(relPath) {
  if (!relPath) return "";
  const resolved = resolveMockAsset(relPath);
  if (resolved) return resolved;
  const cleanPath = relPath.replace(/^\/+/, "");
  return `${base}${cleanPath}`;
}

export default function AboutPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, imageUrl: "", title: "" });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Về chúng tôi | CRAFT FOLIO - Kết nối làng nghề truyền thống";

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsVideoLoaded(true))
            .catch(() => {
              // Autoplay policy: muted is set so this rarely triggers
            });
        }
      };

      attemptPlay();
    }
  }, []);

  const openLightbox = (url, title) => {
    setLightbox({ isOpen: true, imageUrl: url, title: title || "Hình ảnh dự án" });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imageUrl: "", title: "" });
  };

  // Base-aware asset URLs from folder 'Ảnh làng nghề/Về Chúng Tôi'
  const posterUrl = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/avatar du an.jpg");
  const videoStream720Url = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/header.mp4");
  const videoStream1080Url = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/header.mp4");
  const videoOriginalUrl = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/header.mp4");
  const projectAvatarUrl = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/avatar du an.jpg");
  const statementStripsUrl = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/Thông tin dự án.png");
  const missionCard1Url = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/sumenh.jpg");
  const missionCard2Url = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/sumenh(1).jpg");
  const visionCollageUrl = getAssetUrl("download/Ảnh làng nghề/Về Chúng Tôi/Tầm nhìn.png");
  const botanicalPatternUrl = getAssetUrl("download/Ảnh làng nghề/Nền/nền trang cơ sở xưởng.png");

  return (
    <div className="about-page">
      {/* Botanical Pattern Background Overlay */}
      <div
        className="about-page__bg-pattern"
        aria-hidden="true"
        style={{ backgroundImage: `url('${botanicalPatternUrl}')` }}
      />

      {/* ==================================================================
          1. HEADER VIDEO BANNER (Optimized progressive chunk streaming with FastStart & poster)
         ================================================================== */}
      <section className="about-hero" aria-label="Video giới thiệu dự án">
        <div className="about-hero__video-container">
          {/* Instant poster placeholder */}
          <img
            src={posterUrl}
            alt="Craft Folio Hero Poster"
            className={`about-hero__poster-img ${isVideoLoaded ? "is-hidden" : ""}`}
            loading="eager"
          />

          <video
            ref={videoRef}
            src={videoStream720Url}
            className={`about-hero__video ${isVideoLoaded ? "is-loaded" : ""}`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={posterUrl}
            onLoadedData={() => setIsVideoLoaded(true)}
            onCanPlay={() => setIsVideoLoaded(true)}
            onPlaying={() => setIsVideoLoaded(true)}
          >
            {/* Streamable 720p (3.4MB with FastStart moov progressive chunk streaming) */}
            <source src={videoStream720Url} type="video/mp4" />
            {/* Streamable 1080p (8.5MB with FastStart moov progressive chunk streaming) */}
            <source src={videoStream1080Url} type="video/mp4" />
            {/* Original video fallback */}
            <source src={videoOriginalUrl} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>
      </section>

      <div className="about-page__container">
        {/* ==================================================================
            2. THÔNG TIN DỰ ÁN
           ================================================================== */}
        <section className="about-section about-project" aria-labelledby="project-info-title">
          <div className="about-project__grid">
            {/* Left: Project Image Banner (avatar du an.jpg) */}
            <div
              className="about-project__media-wrap"
              onClick={() => openLightbox(projectAvatarUrl, "Craft Folio - Thông tin dự án")}
              data-cursor="button"
            >
              <img
                src={projectAvatarUrl}
                alt="Craft Folio - Kết nối tinh hoa thủ công Việt"
                className="about-project__img"
                loading="lazy"
              />
            </div>

            {/* Right: Typography Content */}
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

          {/* Centered Callout Quote below 2-column info */}
          <div className="about-project__highlight-quote">
            “CRAFT FOLIO không chỉ giới thiệu sản phẩm mà còn tạo điều kiện để các cơ sở sản xuất
            thể hiện năng lực và đặc điểm riêng của mình trên nền tảng số”
          </div>
        </section>

        {/* ==================================================================
            3. ĐẠI CẢNH 5 CỘT ẢNH NGHỆ THUẬT & ĐOẠN VĂN BẢN KẾT NỐI
           ================================================================== */}
        <section className="about-section about-statement" aria-label="Bộ sưu tập và sứ mệnh kết nối">
          <div
            className="about-statement__strips-wrap"
            onClick={() => openLightbox(statementStripsUrl, "Tinh hoa làng nghề truyền thống Việt Nam")}
            data-cursor="button"
          >
            <img
              src={statementStripsUrl}
              alt="5 nét đẹp thủ công: Quạt Chàng Sơn, Nón Làng Chuông, Gốm Bát Tràng, Lụa Nha Xá, Mây tre đan Phú Vinh"
              className="about-statement__strips-img"
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

        {/* ==================================================================
            4. SỨ MỆNH
           ================================================================== */}
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
                  alt="Không gian trưng bày mây tre đan thủ công"
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
                  alt="Không gian giới thiệu sản phẩm làng nghề đến khách hàng"
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

        {/* ==================================================================
            5. TẦM NHÌN
           ================================================================== */}
        <section
          className="about-section about-vision"
          aria-labelledby="vision-title"
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
            {/* Left Column: Strategic Vision Paragraphs */}
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

            {/* Right Column: Artisan Collage Image */}
            <div
              className="about-vision__collage-wrap"
              onClick={() => openLightbox(visionCollageUrl, "Tầm nhìn phát triển Craft Folio")}
              data-cursor="button"
            >
              <img
                src={visionCollageUrl}
                alt="Các nghệ nhân làng nghề chế tác nón lá, quạt và đồ gốm"
                className="about-vision__collage-img"
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
