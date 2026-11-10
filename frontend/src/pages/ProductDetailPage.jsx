import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products, facilities, villages } from "../data/mockData.js";
import { resolveMockAsset } from "../utils/resolveMockAsset.js";
import ImageLightboxModal from "../components/facility/ImageLightboxModal.jsx";
import FacilityConnectModal from "../components/facility/FacilityConnectModal.jsx";

// Helper icon placeholder for missing craft product images
function CraftProductPlaceholder({ name, facilityName }) {
  return (
    <div className="product-placeholder">
      <div className="product-placeholder__pattern" aria-hidden="true" />
      <div className="product-placeholder__content">
        <div className="product-placeholder__emblem">
          <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Traditional Craft Emblem: Lotus motif & pottery/weave contour */}
            <path d="M24 6c-3 6-8 10-14 12 6 2 11 6 14 12 3-6 8-10 14-12-6-2-11-6-14-12z" />
            <circle cx="24" cy="24" r="5" />
            <path d="M12 36c4-1 8-1 12 0 4-1 8-1 12 0" />
            <path d="M18 40c2-.5 4-.5 6 0 2-.5 4-.5 6 0" />
          </svg>
        </div>
        <p className="product-placeholder__title">{name || "Sản phẩm thủ công"}</p>
        <span className="product-placeholder__badge">Chế tác thủ công</span>
        <p className="product-placeholder__hint">
          {facilityName ? `Cơ sở: ${facilityName}` : "Hình ảnh đang được cơ sở cập nhật"}
        </p>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find product by id or aliasIds (case-insensitive)
  const product = useMemo(() => {
    if (!productId) return null;
    const lower = String(productId).toLowerCase();
    return products.find(
      (p) =>
        String(p.id).toLowerCase() === lower ||
        (Array.isArray(p.aliasIds) &&
          p.aliasIds.some((a) => a.toLowerCase() === lower))
    );
  }, [productId]);

  // Find facility associated with product
  const facility = useMemo(() => {
    if (!product?.coSoSanXuatId) return null;
    return facilities.find((f) => f.id === product.coSoSanXuatId);
  }, [product]);

  // Find village associated with facility
  const village = useMemo(() => {
    if (!facility?.langNgheId) return null;
    return villages.find((v) => v.id === facility.langNgheId);
  }, [facility]);

  // Gallery images logic
  const galleryImages = useMemo(() => {
    if (!product) return [];
    const imgs = [];

    // Extract valid images from product data
    if (Array.isArray(product.images)) {
      product.images.forEach((imgObj) => {
        const rawUrl = typeof imgObj === "string" ? imgObj : imgObj?.Url || imgObj?.url;
        const resolved = resolveMockAsset(rawUrl);
        if (resolved) {
          imgs.push({
            url: resolved,
            alt: (typeof imgObj === "object" && imgObj?.alt) || product.name,
          });
        }
      });
    }

    return imgs;
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("specs"); // 'specs' | 'culture' | 'care' for tabs template
  const [isFavorite, setIsFavorite] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [lightbox, setLightbox] = useState({ open: false, url: "", alt: "" });
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  // Manage favorites in localStorage
  useEffect(() => {
    if (!productId) return;
    try {
      const favs = JSON.parse(localStorage.getItem("craft_favorites") || "[]");
      setIsFavorite(favs.includes(productId));
    } catch {
      setIsFavorite(false);
    }
  }, [productId]);

  // Manage recently viewed products in localStorage
  useEffect(() => {
    if (!productId) return;
    try {
      const recents = JSON.parse(localStorage.getItem("craft_recently_viewed") || "[]");
      const filtered = recents.filter((id) => id !== productId);
      const updated = [productId, ...filtered].slice(0, 8);
      localStorage.setItem("craft_recently_viewed", JSON.stringify(updated));
    } catch {
      // ignore
    }
  }, [productId]);

  // Reset active image index when product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [productId]);

  // Handle favorite toggle
  const toggleFavorite = () => {
    try {
      const favs = JSON.parse(localStorage.getItem("craft_favorites") || "[]");
      let nextFavs;
      if (favs.includes(productId)) {
        nextFavs = favs.filter((id) => id !== productId);
        setIsFavorite(false);
        showToast("Đã xóa khỏi danh sách yêu thích");
      } else {
        nextFavs = [...favs, productId];
        setIsFavorite(true);
        showToast("Đã lưu vào danh sách yêu thích");
      }
      localStorage.setItem("craft_favorites", JSON.stringify(nextFavs));
    } catch {
      setIsFavorite(!isFavorite);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };

  // Scroll to tabs section (used only in tabs template)
  const scrollToTabs = () => {
    const el = document.getElementById("product-tabs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Related products (prioritize same facility)
  const relatedProducts = useMemo(() => {
    if (!product) return [];

    const sameFacility = products.filter(
      (p) => p.coSoSanXuatId === product.coSoSanXuatId && p.id !== product.id && !p.isHomeFeaturedOnly
    );

    const others = products.filter(
      (p) => p.id !== product.id && p.coSoSanXuatId !== product.coSoSanXuatId && !p.isHomeFeaturedOnly
    );

    return [...sameFacility, ...others].slice(0, 6);
  }, [product]);

  // Carousel controls for related products
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxCarouselIndex = Math.max(0, relatedProducts.length - 3);

  const prevCarousel = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => Math.min(maxCarouselIndex, prev + 1));
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="product-not-found__card">
          <div className="product-not-found__icon">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <h1>Không tìm thấy sản phẩm</h1>
          <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật.</p>
          <div className="product-not-found__actions">
            <Link to="/" className="btn-primary">Về trang chủ</Link>
            <Link to="/#villages" className="btn-secondary">Khám phá làng nghề</Link>
          </div>
        </div>
      </div>
    );
  }

  const currentMainImage = galleryImages[activeImageIndex] || null;
  const isTabsTemplate = product.detailTemplate === "tabs";
  const isChairPdf52 = product.id === "SP_MTD_GMTDM";
  const sampleProfileAssets = {
    30: { quote: "/download/images/banners/quote_lotus_pdf.jpg", contact: "/download/images/banners/contact_pdf30.jpg", lotus: true },
    52: { quote: "/download/images/banners/quote_banner_mtd.png", contact: "/download/images/banners/contact_p52_weaving.jpg" },
    63: { quote: "/download/images/banners/quote_lotus_pdf.jpg", contact: "/download/images/banners/contact_pdf63.jpg", lotus: true },
    82: { quote: "/download/images/banners/quote_pdf82.jpg", contact: "/download/images/banners/contact_card_mtd.png" },
  }[product.sourcePdfPage];
  const pdfPage = product.sourcePdfPage;
  const isP2Product = (pdfPage >= 30 && pdfPage <= 41) || (pdfPage >= 43 && pdfPage <= 48) || (pdfPage >= 51 && pdfPage <= 74) || (pdfPage >= 82 && pdfPage <= 99) || (pdfPage >= 101 && pdfPage <= 130);
  const fallbackQuote = {
    GBT: "/download/images/banners/quote_lotus_pdf.jpg",
    MTD: "/download/images/banners/quote_banner_mtd.png",
    QCS: "/download/images/banners/quote_pdf82.jpg",
    NLC: "/download/images/banners/quote_non_pdf101.jpg",
    LNX: "/download/images/banners/quote_lua_pdf119.jpg",
  }[facility?.langNgheId];
  const templateContact = {
    NLC: "/download/images/banners/contact_non_pdf101.jpg",
    LNX: "/download/images/banners/contact_lua_pdf119.jpg",
  }[facility?.langNgheId];
  const profileAssets = sampleProfileAssets || (isP2Product && fallbackQuote && facility?.images?.consultation
    ? { quote: fallbackQuote, contact: templateContact || facility.images.consultation, lotus: facility.langNgheId === "GBT" }
    : null);
  const quoteImage = profileAssets?.quote || fallbackQuote;
  const isLotusBanner = profileAssets?.lotus || (!profileAssets && facility?.langNgheId === "GBT");
  const explicitMaterialUrl = product.featureImages?.material && resolveMockAsset(product.featureImages.material);
  const explicitShapeUrl = product.featureImages?.design && resolveMockAsset(product.featureImages.design);
  const materialImage = (explicitMaterialUrl && { url: explicitMaterialUrl }) || (isP2Product ? galleryImages[0] : galleryImages[1]);
  const shapeImage = (explicitShapeUrl && { url: explicitShapeUrl }) || (isP2Product ? galleryImages[0] : galleryImages[2]);

  return (
    <div className={`product-detail-page ${isTabsTemplate ? "has-tabs-template" : "has-profile-template"}${profileAssets ? " product-detail-page--profile-reference" : ""}${isLotusBanner ? " product-detail-page--lotus" : ""}${facility?.langNgheId === "LNX" ? " product-detail-page--silk" : ""}${isChairPdf52 ? " product-detail-page--pdf52" : ""}`}>
      {/* Toast feedback notification */}
      {toastMessage && (
        <div className="craft-toast" role="status" aria-live="polite">
          <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Navigation - only rendered for tabs template, profile template starts directly under navbar per PDF */}
      {isTabsTemplate && product.sourcePdfPage !== 42 && (
        <nav className="product-breadcrumb" aria-label="Đường dẫn trang">
          <div className="product-container">
            <ol className="product-breadcrumb__list">
              <li>
                <Link to="/">Trang chủ</Link>
                <span className="product-breadcrumb__separator">/</span>
              </li>
              <li>
                <Link to="/#villages">Làng nghề</Link>
                <span className="product-breadcrumb__separator">/</span>
              </li>
              {village && (
                <li>
                  <Link to={`/lang-nghe/${village.id}`}>{village.name}</Link>
                  <span className="product-breadcrumb__separator">/</span>
                </li>
              )}
              {facility && (
                <li>
                  <Link to={`/co-so/${facility.id}`}>{facility.name}</Link>
                  <span className="product-breadcrumb__separator">/</span>
                </li>
              )}
              <li aria-current="page">
                <span className="product-breadcrumb__current">{product.name}</span>
              </li>
            </ol>
          </div>
        </nav>
      )}

      {/* =========================================================================
          BRANCH A: PROFILE NARRATIVE TEMPLATE (Matching PDF Page 52 & Variants)
          ========================================================================= */}
      {!isTabsTemplate ? (
        <div className="product-profile">
          {/* SECTION 1: TOP HERO SHOWCASE */}
          <section className="product-profile-hero">
            <div className="product-container product-profile-hero__grid">

              {/* Left Column: 1:1 Square Product Image */}
              <div className="product-profile-hero__gallery">
                <div
                  className={`product-profile-hero__main-box ${currentMainImage ? "is-clickable" : ""}`}
                  onClick={() => {
                    if (currentMainImage?.url) {
                      setLightbox({
                        open: true,
                        url: currentMainImage.url,
                        alt: currentMainImage.alt || product.name,
                      });
                    }
                  }}
                  title={currentMainImage ? "Nhấp để phóng to ảnh" : undefined}
                >
                  {currentMainImage ? (
                    <>
                      <img
                        src={currentMainImage.url}
                        alt={currentMainImage.alt || product.name}
                        className="product-profile-hero__main-img"
                      />
                      <div className="product-profile-hero__zoom-badge" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <CraftProductPlaceholder
                      name={product.name}
                      facilityName={facility?.name}
                    />
                  )}

                  {/* Slider controls: Only visible when multiple authentic gallery images exist */}
                  {galleryImages.length > 1 && (
                    <div className="product-profile-hero__slider-arrows" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="product-profile-hero__arrow prev"
                        onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
                        aria-label="Ảnh trước"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="product-profile-hero__arrow next"
                        onClick={() => setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
                        aria-label="Ảnh tiếp theo"
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {/* Only render thumbnails when authentic multiple images exist */}
                {(galleryImages.length > 1 || (isChairPdf52 && galleryImages.length === 1)) && (
                  <div className="product-profile-hero__thumbs">
                    {galleryImages.map((img, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={`product-profile-hero__thumb-btn ${
                          idx === activeImageIndex ? "is-active" : ""
                        }`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`Xem ảnh ${idx + 1}`}
                      >
                        <img src={img.url} alt={img.alt} className="product-profile-hero__thumb-img" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Narrative Info & Specifications */}
              <div className="product-profile-hero__info">
                <div className="product-profile-hero__tag">
                  {facility ? (
                    <Link to={`/co-so/${facility.id}`}>{facility.name.toUpperCase()}</Link>
                  ) : village ? (
                    <Link to={`/lang-nghe/${village.id}`}>{village.name.toUpperCase()}</Link>
                  ) : (
                    <span>LÀNG NGHỀ THỦ CÔNG</span>
                  )}
                </div>

                <h1 className="product-profile-hero__title">{product.name}</h1>

                <p className="product-profile-hero__desc">
                  {product.itemDescription ||
                    product.dacDiemDescription ||
                    "Sản phẩm thủ công truyền thống tinh xảo, gìn giữ nét văn hóa đặc trưng của làng nghề Việt Nam."}
                </p>

                {/* 3 Specs Rows with icons and horizontal alignment matching PDF 52 */}
                <div className="product-profile-hero__specs">
                  <div className="product-profile-spec-row">
                    <span className="product-profile-spec-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </span>
                    <strong className="product-profile-spec-label">Chất liệu:</strong>
                    <span className="product-profile-spec-val">
                      {product.chatLieu || "Nguyên vật liệu tự nhiên tuyển chọn"}
                    </span>
                  </div>

                  <div className="product-profile-spec-row">
                    <span className="product-profile-spec-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </span>
                    <strong className="product-profile-spec-label">Kĩ thuật:</strong>
                    <span className="product-profile-spec-val">
                      {product.kyThuat || "Tạo hình và hoàn thiện thủ công"}
                    </span>
                  </div>

                  <div className="product-profile-spec-row">
                    <span className="product-profile-spec-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <strong className="product-profile-spec-label">Xuất xứ:</strong>
                    <span className="product-profile-spec-val">
                      {product.xuatXu || (village ? village.name : "Việt Nam")}
                    </span>
                  </div>
                </div>

                {/* Primary CTA button + Subtle secondary actions */}
                <div className="product-profile-hero__actions">
                  <button
                    type="button"
                    className="btn-profile-primary"
                    onClick={() => setIsConnectModalOpen(true)}
                  >
                    Gửi yêu cầu
                  </button>

                  <div className="product-profile-hero__secondary-actions">
                    {facility && (
                      <Link
                        to={`/dat-lich/${facility.id}?productId=${product.id}`}
                        className="btn-profile-secondary"
                        title="Đặt lịch tham quan trực tiếp tại xưởng"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>Đặt lịch xưởng</span>
                      </Link>
                    )}

                    <button
                      type="button"
                      className={`btn-profile-fav ${isFavorite ? "is-active" : ""}`}
                      onClick={toggleFavorite}
                      aria-label={isFavorite ? "Xóa khỏi mục yêu thích" : "Lưu vào mục yêu thích"}
                      title={isFavorite ? "Đã lưu yêu thích" : "Lưu yêu thích"}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ĐẶC ĐIỂM SẢN PHẨM (2-Column: Left Text, Right 2 Side-by-Side Cards) */}
          <section className="product-profile-features">
            <div className="product-container">
              <h2 className="product-profile-section-title">ĐẶC ĐIỂM SẢN PHẨM</h2>

              <div className="product-profile-features__grid">
                {/* Left Column: Headline and Narrative Text */}
                <div className="product-profile-features__content">
                  <h3 className="product-profile-features__headline">
                    {product.dacDiemTitle || "Vẻ mộc tự nhiên, nâng niu từng phút giây"}
                  </h3>

                  <p className="product-profile-features__main-desc">
                    {product.dacDiemDescription ||
                      product.itemDescription ||
                      "Chiếc ghế kết hợp kết cấu khung chắc chắn với bề mặt đan thoáng, mang lại vẻ đẹp giản dị mà vẫn có điểm nhấn thủ công. Sản phẩm phù hợp với không gian phòng khách, góc đọc sách, homestay hoặc khu nghỉ dưỡng theo phong cách tự nhiên."}
                  </p>
                </div>

                {/* Right Column: Two Side-by-Side Feature Cards */}
                <div className="product-profile-features__side-cards">
                  {/* Card 1: Chất liệu và màu sắc */}
                  <div className="product-profile-feature-card">
                    <div className="product-profile-feature-card__img-box">
                      {materialImage ? (
                        <img
                          src={materialImage.url}
                          alt={`Chi tiết chất liệu ${product.name}`}
                          className="product-profile-feature-card__img is-clickable"
                          onClick={() => setLightbox({ open: true, url: materialImage.url, alt: `Chi tiết chất liệu ${product.name}` })}
                        />
                      ) : (
                        <div className="product-profile-feature-card__placeholder">
                          <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="#A89C8D" strokeWidth="1.5">
                            <circle cx="18" cy="18" r="14" />
                            <path d="M12 18c3-3 6-3 12 0M18 12v12" />
                          </svg>
                          <span className="placeholder-note">Hình ảnh chi tiết đang cập nhật</span>
                        </div>
                      )}
                    </div>
                    <h4 className="product-profile-feature-card__title">Chất liệu và màu sắc</h4>
                    <p className="product-profile-feature-card__text">
                      {product.chatLieuVaMauSac || product.chatLieu || "Tông nâu vàng tự nhiên, kết hợp đệm ngồi màu sáng, dễ phối hợp với nhiều không gian nội thất."}
                    </p>
                  </div>

                  {/* Card 2: Họa tiết và kiểu dáng */}
                  <div className="product-profile-feature-card">
                    <div className="product-profile-feature-card__img-box">
                      {shapeImage ? (
                        <img
                          src={shapeImage.url}
                          alt={`Chi tiết kiểu dáng ${product.name}`}
                          className="product-profile-feature-card__img is-clickable"
                          onClick={() => setLightbox({ open: true, url: shapeImage.url, alt: `Chi tiết kiểu dáng ${product.name}` })}
                        />
                      ) : (
                        <div className="product-profile-feature-card__placeholder">
                          <svg viewBox="0 0 36 36" width="32" height="32" fill="none" stroke="#A89C8D" strokeWidth="1.5">
                            <rect x="6" y="6" width="24" height="24" rx="4" />
                            <path d="M10 26l6-6 4 4 6-6" />
                          </svg>
                          <span className="placeholder-note">Hình ảnh chi tiết đang cập nhật</span>
                        </div>
                      )}
                    </div>
                    <h4 className="product-profile-feature-card__title">Họa tiết và kiểu dáng</h4>
                    <p className="product-profile-feature-card__text">
                      {product.hoaTietVaKieuDang || product.kyThuat || "Ghế tựa lưng chữ nhật đan đều, chân nghiêng và tay vịn thấp, mang thiết kế gọn nhẹ, gần gũi với thiên nhiên."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: QUOTE BANNER WITH AUTHENTIC RATTAN BACKGROUND */}
          <section
            className={`product-profile-quote-strip${quoteImage ? "" : " product-profile-quote-strip--plain"}`}
            style={{
              backgroundImage: quoteImage
                ? isLotusBanner
                  ? `url('${resolveMockAsset(quoteImage)}')`
                  : `linear-gradient(rgba(30, 20, 15, 0.35), rgba(30, 20, 15, 0.35)), url('${resolveMockAsset(quoteImage)}')`
                : undefined,
            }}
          >
            <div className="product-container">
              <blockquote className="product-profile-quote-strip__text">
                “Mỗi sản phẩm là một câu chuyện, được tạo nên bởi bàn tay và tâm huyết của người thợ Việt”
              </blockquote>
            </div>
          </section>

          {/* SECTION 4: HƯỚNG DẪN LIÊN HỆ XƯỞNG */}
          <section className="product-profile-contact">
            <div className="product-container">
              <h2 className="product-profile-section-title">HƯỚNG DẪN LIÊN HỆ XƯỞNG</h2>

              <div className="product-profile-contact__grid">
                {/* Left: Contact Info with Icons matching PDF */}
                <div className="product-profile-contact__info">
                  <h3 className="product-profile-contact__subtitle">Trao đổi trực tiếp với xưởng</h3>

                  <div className="product-profile-contact__rows">
                    <div className="product-profile-contact-row">
                      <div className="product-profile-contact-row__head">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#730000" strokeWidth="2" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="product-profile-contact-row__label">Hotline - Zalo</span>
                      </div>
                      <span className="product-profile-contact-row__val">
                        {product.id === "SP_MTD_GMTDM" ? "0912 916 992" : (facility?.soDienThoai || "Liên hệ xưởng")}
                      </span>
                    </div>

                    {facility?.email?.trim() && <div className="product-profile-contact-row">
                      <div className="product-profile-contact-row__head">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#730000" strokeWidth="2" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="product-profile-contact-row__label">Email</span>
                      </div>
                      <span className="product-profile-contact-row__val">
                        {facility.email.trim()}
                      </span>
                    </div>}

                    <div className="product-profile-contact-row">
                      <div className="product-profile-contact-row__head">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#730000" strokeWidth="2" aria-hidden="true">
                          <polyline points="21 8 21 21 3 21 3 8" />
                          <rect x="1" y="3" width="22" height="5" />
                          <line x1="10" y1="12" x2="14" y2="12" />
                        </svg>
                        <span className="product-profile-contact-row__label">Dịch vụ đi kèm</span>
                      </div>
                      <span className="product-profile-contact-row__val">
                        Nhận đơn số lượng lớn, trao đổi về mẫu thiết kế và báo giá theo nhu cầu.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Callout Prompt & CTA with Background Image */}
                <div className="product-profile-contact__callout">
                  <div
                    className="product-profile-contact__callout-card"
                    style={{
                      backgroundImage: profileAssets
                        ? `linear-gradient(rgba(247, 241, 230, 0.53), rgba(247, 241, 230, 0.53)), url('${resolveMockAsset(profileAssets.contact)}')`
                        : facility?.images?.consultation
                          ? `linear-gradient(rgba(247, 241, 230, 0.86), rgba(247, 241, 230, 0.86)), url('${resolveMockAsset(facility.images.consultation)}')`
                          : undefined,
                    }}
                  >
                    {profileAssets && (
                      <img className="product-profile-contact__callout-image" src={resolveMockAsset(profileAssets.contact)} alt="Hình minh họa nghề thủ công" />
                    )}
                    <div className="product-profile-contact__callout-content">
                    <p className="product-profile-contact__callout-prompt">
                      Bạn cần tư vấn thêm về sản phẩm hoặc đặt hàng số lượng lớn?
                    </p>
                    <button
                      type="button"
                      className="btn-profile-primary"
                      onClick={() => setIsConnectModalOpen(true)}
                    >
                      Gửi yêu cầu
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: SẢN PHẨM CÙNG DÒNG (3-Card Grid Matching PDF) */}
          {relatedProducts.length > 0 && (
            <section className="product-profile-related">
              <div className="product-container">
                <header className="product-profile-related__header">
                  <div>
                    <h2 className="product-profile-section-title">SẢN PHẨM CÙNG DÒNG</h2>
                    <p className="product-profile-related__subtitle">Khám phá thêm các sản phẩm khác</p>
                  </div>

                  {relatedProducts.length > 3 && (
                    <div className="product-profile-related__controls">
                      <button
                        type="button"
                        className="product-profile-related__arrow"
                        onClick={prevCarousel}
                        disabled={carouselIndex === 0}
                        aria-label="Sản phẩm trước"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="product-profile-related__arrow"
                        onClick={nextCarousel}
                        disabled={carouselIndex >= maxCarouselIndex}
                        aria-label="Sản phẩm tiếp theo"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </header>

                <div className="product-profile-related__grid">
                  {relatedProducts.slice(carouselIndex, carouselIndex + 3).map((item) => {
                    const rawItemImg =
                      Array.isArray(item.images) && item.images.length > 0
                        ? item.images[0]
                        : "";
                    const itemImgUrl = resolveMockAsset(rawItemImg);

                    return (
                      <article
                        key={item.id}
                        className="product-profile-card"
                        onClick={() => navigate(`/san-pham/${item.id}`)}
                      >
                        <div className="product-profile-card__media">
                          {itemImgUrl ? (
                            <img
                              src={itemImgUrl}
                              alt={item.name}
                              className="product-profile-card__img"
                              loading="lazy"
                            />
                          ) : (
                            <div className="product-profile-card__placeholder">
                              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                              </svg>
                              <span>{item.name}</span>
                            </div>
                          )}
                        </div>

                        <div className="product-profile-card__body">
                          <h3 className="product-profile-card__title">{item.name}</h3>

                          <Link
                            to={`/san-pham/${item.id}`}
                            className="product-profile-card__btn"
                            aria-label={`Xem chi tiết ${item.name}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
                              <circle cx="16" cy="16" r="16" fill="#730000" />
                              <path d="M11 21l10-10M11 11h10v10" stroke="#FFFBF2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        /* =========================================================================
            BRANCH B: TABS E-COMMERCE TEMPLATE (Preserved for PDF Page 42)
            ========================================================================= */
        <div className="product-tabs-layout">
          {/* Main Product Showcase */}
          <section className="product-showcase">
            <div className="product-container product-showcase__grid">

              {/* Left Gallery */}
              <div className="product-gallery">
                <div
                  className={`product-gallery__main ${currentMainImage ? "is-clickable" : ""}`}
                  onClick={() => {
                    if (currentMainImage?.url) {
                      setLightbox({
                        open: true,
                        url: currentMainImage.url,
                        alt: currentMainImage.alt || product.name,
                      });
                    }
                  }}
                  title={currentMainImage ? "Nhấp để xem ảnh kích thước lớn" : undefined}
                >
                  {currentMainImage ? (
                    <>
                      <img
                        src={currentMainImage.url}
                        alt={currentMainImage.alt || product.name}
                        className="product-gallery__main-img"
                      />
                      <div className="product-gallery__zoom-badge" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <CraftProductPlaceholder
                      name={product.name}
                      facilityName={facility?.name}
                    />
                  )}
                </div>

                <div className="product-gallery__thumbs">
                  {galleryImages.length > 0 ? (
                    galleryImages.map((img, idx) => (
                      <button
                        type="button"
                        key={idx}
                        className={`product-gallery__thumb-btn ${
                          idx === activeImageIndex ? "is-active" : ""
                        }`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`Xem ảnh ${idx + 1}`}
                      >
                        <img src={img.url} alt={img.alt} className="product-gallery__thumb-img" />
                      </button>
                    ))
                  ) : (
                    [0, 1, 2, 3].map((slot) => (
                      <div
                        key={slot}
                        className={`product-gallery__thumb-btn is-placeholder ${slot === 0 ? "is-active" : ""}`}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Right Information Column */}
              <div className="product-info">
                {facility && (
                  <Link to={`/co-so/${facility.id}`} className="product-info__facility-badge">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 11h2v3H9v-3zm4 0h2v3h-2v-3z" />
                    </svg>
                    <span>Xưởng chế tác: <strong>{facility.name}</strong></span>
                  </Link>
                )}

                <h1 className="product-info__title">{product.name}</h1>

                <div className="product-info__price-box">
                  <div className="product-info__price-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="product-info__price-content">
                    <span className="product-info__price-label">Giá sản phẩm:</span>
                    <p className="product-info__price-text">
                      Liên hệ xưởng để nhận báo giá theo chất liệu, mẫu mã và số lượng đặt hàng.
                    </p>
                  </div>
                </div>

                <div className="product-info__summary">
                  <p>
                    {product.itemDescription ||
                      product.dacDiemDescription ||
                      "Sản phẩm thủ công truyền thống tinh xảo, gìn giữ nét văn hóa đặc trưng của làng nghề Việt Nam."}
                  </p>
                </div>

                <div className="product-info__quick-specs">
                  {product.chatLieu && (
                    <div className="quick-spec-pill">
                      <span className="quick-spec-pill__label">Chất liệu:</span>
                      <span className="quick-spec-pill__value">{product.chatLieu}</span>
                    </div>
                  )}
                  {product.kyThuat && (
                    <div className="quick-spec-pill">
                      <span className="quick-spec-pill__label">Kỹ thuật:</span>
                      <span className="quick-spec-pill__value">{product.kyThuat}</span>
                    </div>
                  )}
                  {product.xuatXu && (
                    <div className="quick-spec-pill">
                      <span className="quick-spec-pill__label">Xuất xứ:</span>
                      <span className="quick-spec-pill__value">{product.xuatXu}</span>
                    </div>
                  )}
                </div>

                <div className="product-info__actions">
                  <button
                    type="button"
                    className="btn-quote"
                    onClick={() => setIsConnectModalOpen(true)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>Yêu cầu báo giá</span>
                  </button>

                  {facility && (
                    <Link
                      to={`/dat-lich/${facility.id}?productId=${product.id}`}
                      className="btn-booking"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>Đặt lịch đến xưởng</span>
                    </Link>
                  )}

                  <button
                    type="button"
                    className={`btn-favorite ${isFavorite ? "is-active" : ""}`}
                    onClick={toggleFavorite}
                    aria-label={isFavorite ? "Xóa khỏi mục yêu thích" : "Thêm vào mục yêu thích"}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span>{isFavorite ? "Đã lưu yêu thích" : "Thêm vào mục yêu thích"}</span>
                  </button>

                  <button
                    type="button"
                    className="btn-scroll-details"
                    onClick={scrollToTabs}
                  >
                    <span>Đọc chi tiết</span>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3v10M3 8l5 5 5-5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section id="product-tabs" className="product-tabs-section">
            <div className="product-container">
              <div className="product-tabs__nav" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "specs"}
                  className={`product-tabs__tab-btn ${activeTab === "specs" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("specs")}
                >
                  CHI TIẾT SẢN PHẨM
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "culture"}
                  className={`product-tabs__tab-btn ${activeTab === "culture" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("culture")}
                >
                  GIÁ TRỊ VĂN HÓA
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "care"}
                  className={`product-tabs__tab-btn ${activeTab === "care" ? "is-active" : ""}`}
                  onClick={() => setActiveTab("care")}
                >
                  HƯỚNG DẪN BẢO QUẢN
                </button>
              </div>

              <div className="product-tabs__content">
                {activeTab === "specs" && (
                  <div className="product-tab-pane">
                    {product.sourcePdfPage === 42 && (
                      <div className="product-tab-reference42">
                        <p>Khâu nón (thắt nón) được coi là công đoạn rất khó, đòi hỏi sự khéo léo của mỗi người bởi nếu không khéo lá sẽ bị rách. Điều quan trọng là mũi khâu phải ngắn, lỗ nhỏ để chiếc nón tròn, khít và mịn từ mép lá đến đường khâu. Các mối nối sợi móc được giấu kín, chỉ còn những mũi khâu đều tăm tắp.</p>
                        <img src={resolveMockAsset('/download/images/product_detail/pdf42_embroidery.jpg')} alt="Chi tiết thêu trên nón cưới" />
                      </div>
                    )}
                    <div className="product-specs-grid">
                      <div className="product-specs-table-wrapper">
                        <h3 className="product-tab-pane__title">Thông số kỹ thuật & Chế tác</h3>
                        <table className="product-specs-table">
                          <tbody>
                            <tr>
                              <th>Xuất xứ</th>
                              <td>{product.xuatXu || (village ? `${village.name}, Hà Nội` : "Làng nghề thủ công Việt Nam")}</td>
                            </tr>
                            <tr>
                              <th>Cơ sở chế tác</th>
                              <td>{facility ? facility.name : "Xưởng thủ công truyền thống"}</td>
                            </tr>
                            <tr>
                              <th>Chất liệu</th>
                              <td>{product.chatLieu || "Nguyên vật liệu tự nhiên tuyển chọn, an toàn và thân thiện môi trường"}</td>
                            </tr>
                            <tr>
                              <th>Kỹ thuật chế tác</th>
                              <td>{product.kyThuat || "Tạo hình và đan chuốt hoàn toàn bằng tay theo phương pháp cổ truyền"}</td>
                            </tr>
                            {product.hoaTietVaKieuDang && (
                              <tr>
                                <th>Kiểu dáng & Họa tiết</th>
                                <td>{product.hoaTietVaKieuDang}</td>
                              </tr>
                            )}
                            {product.chatLieuVaMauSac && (
                              <tr>
                                <th>Màu sắc</th>
                                <td>{product.chatLieuVaMauSac}</td>
                              </tr>
                            )}
                            <tr>
                              <th>Tùy chỉnh theo yêu cầu</th>
                              <td>Nhận thiết kế riêng về kích thước, họa tiết và màu sắc theo đơn đặt hàng</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="product-specs-highlight">
                        <h3 className="product-tab-pane__title">
                          {product.dacDiemTitle || "Đặc điểm nổi bật"}
                        </h3>
                        <p className="product-specs-highlight__text">
                          {product.dacDiemDescription || product.itemDescription ||
                            "Mỗi sản phẩm đều mang đậm dấu ấn của bàn tay người nghệ nhân."}
                        </p>
                        <div className="product-specs-highlight__callout">
                          <strong>Cam kết xưởng:</strong> 100% chế tác thủ công truyền thống, hỗ trợ đóng gói quà tặng và xuất hóa đơn VAT theo yêu cầu doanh nghiệp.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "culture" && (
                  <div className="product-tab-pane">
                    <div className="product-culture-content">
                      <h3 className="product-tab-pane__title">Hồn cốt văn hóa trong từng tác phẩm thủ công</h3>
                      <div className="product-culture-text">
                        <p>
                          Đằng sau vẻ đẹp tinh giản của sản phẩm là câu chuyện về hàng trăm năm lịch sử của một làng nghề truyền thống.
                        </p>
                        {village?.story?.paragraphs?.[0] && (
                          <blockquote>
                            “{village.story.paragraphs[0]}”
                          </blockquote>
                        )}
                        <p>
                          Việc lựa chọn và sử dụng sản phẩm thủ công truyền thống tiếp sức cho các nghệ nhân gìn giữ di sản cha ông.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "care" && (
                  <div className="product-tab-pane">
                    <h3 className="product-tab-pane__title">Hướng dẫn sử dụng và bảo quản đồ thủ công</h3>
                    <div className="product-care-grid">
                      <div className="product-care-card">
                        <div className="product-care-card__icon">
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                          </svg>
                        </div>
                        <h4>Tránh ánh nắng gắt</h4>
                        <p>Không để sản phẩm dưới ánh nắng mặt trời gay gắt kéo dài hoặc gần nguồn nhiệt cao.</p>
                      </div>

                      <div className="product-care-card">
                        <div className="product-care-card__icon">
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        </div>
                        <h4>Giữ nơi khô thoáng</h4>
                        <p>Bảo quản trong môi trường khô ráo, thoáng khí.</p>
                      </div>

                      <div className="product-care-card">
                        <div className="product-care-card__icon">
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                        </div>
                        <h4>Vệ sinh nhẹ nhàng</h4>
                        <p>Sử dụng khăn mềm ẩm hoặc cọ mềm để vệ sinh bề mặt.</p>
                      </div>

                      <div className="product-care-card">
                        <div className="product-care-card__icon">
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          </svg>
                        </div>
                        <h4>Giữ dáng và cất giữ</h4>
                        <p>Tránh vật nặng đè ép gây biến dạng form dáng ban đầu.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Process Banner */}
          <section className="product-process-banner">
            <div
              className="product-process-banner__bg"
              style={{
                backgroundImage: `url('${resolveMockAsset("/images/product_detail/prod_process_banner.jpg") || resolveMockAsset(facility?.images?.imageStory) || ""}')`,
              }}
            >
              <div className="product-process-banner__overlay" />
              <div className="product-container product-process-banner__content">
                <span className="product-process-banner__tag">QUY TRÌNH CHẾ TÁC THỦ CÔNG</span>
                <h2 className="product-process-banner__title">Tinh hoa bàn tay người thợ làng nghề</h2>
                <p className="product-process-banner__desc">
                  Mỗi công đoạn đều đòi hỏi sự kiên nhẫn và đôi bàn tay tài hoa của nghệ nhân.
                </p>
                {facility && (
                  <Link to={`/co-so/${facility.id}`} className="product-process-banner__btn">
                    <span>Khám phá không gian xưởng {facility.name}</span>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </section>

      {/* Related / Recently Viewed Products Section (Figma Frame 799:109) */}
      {relatedProducts.length > 0 && (
        <section className="product-related-section">
          <div className="product-container">
            <header className="product-related__header">
              <div>
                <h2 className="product-related__title">SẢN PHẨM ĐÃ XEM</h2>
                <p className="product-related__subtitle">
                  Khám phá các tác phẩm thủ công truyền thống đặc sắc khác từ các nghệ nhân làng nghề
                </p>
              </div>

                  {relatedProducts.length > 3 && (
                    <div className="product-related__controls">
                      <button
                        type="button"
                        className="product-related__arrow"
                        onClick={prevCarousel}
                        disabled={carouselIndex === 0}
                        aria-label="Sản phẩm trước"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="product-related__arrow"
                        onClick={nextCarousel}
                        disabled={carouselIndex >= maxCarouselIndex}
                        aria-label="Sản phẩm tiếp theo"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </header>

                <div className="product-related__grid">
                  {relatedProducts
                    .slice(carouselIndex, carouselIndex + 3)
                    .map((item) => {
                      const rawItemImg =
                        Array.isArray(item.images) && item.images.length > 0
                          ? item.images[0]
                          : "";
                      const itemImgUrl = resolveMockAsset(rawItemImg);

                      return (
                        <article
                          key={item.id}
                          className="product-related-card"
                          onClick={() => navigate(`/san-pham/${item.id}`)}
                        >
                          <div className="product-related-card__media">
                            {itemImgUrl ? (
                              <img
                                src={itemImgUrl}
                                alt={item.name}
                                className="product-related-card__img"
                                loading="lazy"
                              />
                            ) : (
                              <div className="product-related-card__placeholder">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <rect x="3" y="3" width="18" height="18" rx="2" />
                                  <circle cx="8.5" cy="8.5" r="1.5" />
                                  <polyline points="21 15 16 10 5 21" />
                                </svg>
                                <span>{item.name}</span>
                              </div>
                            )}
                            <div className="product-related-card__overlay" />
                          </div>

                          <div className="product-related-card__body">
                            <div className="product-related-card__content">
                              <h3 className="product-related-card__title">{item.name}</h3>
                              <p className="product-related-card__subtitle">
                                {item.dacDiemTitle || "Gìn giữ nét Việt, lưu giữ ngày nên duyên."}
                              </p>
                            </div>

                            <Link
                              to={`/san-pham/${item.id}`}
                              className="product-related-card__btn"
                              aria-label={`Xem chi tiết ${item.name}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
                                <circle cx="16" cy="16" r="16" fill="#730000" />
                                <path d="M11 21l10-10M11 11h10v10" stroke="#FFFBF2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                              </svg>
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                </div>
              </div>
            </section>
          )}
        </div>
      )}

      {/* Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightbox.open}
        imageUrl={lightbox.url}
        altText={lightbox.alt}
        onClose={() => setLightbox({ open: false, url: "", alt: "" })}
      />

      {/* Connect / Quote Request Modal */}
      {facility && (
        <FacilityConnectModal
          isOpen={isConnectModalOpen}
          facility={facility}
          onClose={() => setIsConnectModalOpen(false)}
        />
      )}
    </div>
  );
}
