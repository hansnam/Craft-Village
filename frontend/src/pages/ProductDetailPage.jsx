import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products, facilities, villages } from "../data/mockData.js";
import { resolveMockAsset, resolveFacilityThumbnail } from "../utils/resolveMockAsset.js";
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
  const [activeTab, setActiveTab] = useState("specs"); // 'specs' | 'culture' | 'care'
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

  // Scroll to tabs section
  const scrollToTabs = () => {
    const el = document.getElementById("product-tabs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Related / Recently viewed products
  const relatedProducts = useMemo(() => {
    if (!product) return [];

    // Prioritize other products from same facility
    const sameFacility = products.filter(
      (p) => p.coSoSanXuatId === product.coSoSanXuatId && p.id !== product.id
    );

    // If not enough, include other products
    const others = products.filter(
      (p) => p.id !== product.id && p.coSoSanXuatId !== product.coSoSanXuatId
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

  return (
    <div className="product-detail-page">
      {/* Toast feedback notification */}
      {toastMessage && (
        <div className="craft-toast" role="status" aria-live="polite">
          <svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Navigation */}
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

      {/* Main Product Showcase (Figma Frame 757:732 Top Section) */}
      <section className="product-showcase">
        <div className="product-container product-showcase__grid">
          
          {/* Left Gallery: Main view + Thumbnails */}
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

            {/* Thumbnails row (4 thumbnails matching Figma) */}
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
                // Graceful fallback placeholder thumbnails
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

            {/* Price / Quotation Banner (Matching Figma: "Liên hệ xưởng để nhận báo giá...") */}
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

            {/* Excerpt / Summary */}
            <div className="product-info__summary">
              <p>
                {product.itemDescription ||
                  product.dacDiemDescription ||
                  "Sản phẩm thủ công truyền thống tinh xảo, gìn giữ nét văn hóa đặc trưng của làng nghề Việt Nam. Từng chi tiết đều được chăm chút tỉ mỉ từ khâu chọn nguyên liệu đến hoàn thiện cuối cùng."}
              </p>
            </div>

            {/* Quick Specs Highlight Pills */}
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

            {/* Action Buttons (Figma Frame 788:111, 788:113, 788:115) */}
            <div className="product-info__actions">
              {/* Button 1: Yêu cầu báo giá (Crimson) */}
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

              {/* Button: Đặt lịch đến xưởng (Navigate to /dat-lich/:facilityId) */}
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

              {/* Button 2: Thêm vào mục yêu thích (Outline) */}
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

              {/* Button 3: Đọc chi tiết (Scroll) */}
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

      {/* Tabs Navigation & Detailed Content (Figma Frame 788:119, 788:121, 788:123) */}
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
            {/* TAB 1: Chi tiết sản phẩm */}
            {activeTab === "specs" && (
              <div className="product-tab-pane">
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
                        "Mỗi sản phẩm đều mang đậm dấu ấn của bàn tay người nghệ nhân. Từ việc lựa chọn nguyên liệu tự nhiên kỹ càng, xử lý chống ẩm mốc truyền thống đến từng đường khâu, nếp đan hay nét men đều được kiểm soát nghiêm ngặt nhằm tạo nên sản phẩm hoàn hảo nhất."}
                    </p>
                    <div className="product-specs-highlight__callout">
                      <strong>Cam kết xưởng:</strong> 100% chế tác thủ công truyền thống, hỗ trợ đóng gói quà tặng và xuất hóa đơn VAT theo yêu cầu doanh nghiệp.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Giá trị văn hóa */}
            {activeTab === "culture" && (
              <div className="product-tab-pane">
                <div className="product-culture-content">
                  <h3 className="product-tab-pane__title">Hồn cốt văn hóa trong từng tác phẩm thủ công</h3>
                  <div className="product-culture-text">
                    <p>
                      Đằng sau vẻ đẹp tinh giản của sản phẩm là câu chuyện về hàng trăm năm lịch sử của một làng nghề truyền thống. Mỗi đường nét, màu sắc và chất liệu không chỉ phục vụ đời sống thường nhật mà còn chuyên chở cốt cách, tâm hồn và quan niệm thẩm mỹ mộc mạc mà sâu sắc của người Việt.
                    </p>
                    {village?.story?.paragraphs?.[0] && (
                      <blockquote>
                        “{village.story.paragraphs[0]}”
                      </blockquote>
                    )}
                    <p>
                      Việc lựa chọn và sử dụng sản phẩm thủ công truyền thống không chỉ mang đến cho không gian sống sự thanh lịch, ấm áp mà còn là hành động thiết thực tiếp sức cho các nghệ nhân gìn giữ di sản cha ông, để ngọn lửa nghề không bao giờ tắt.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Hướng dẫn bảo quản */}
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
                    <p>Không để sản phẩm dưới ánh nắng mặt trời gay gắt kéo dài hoặc gần nguồn nhiệt cao để tránh giòn sợi, nứt men hoặc phai màu tự nhiên.</p>
                  </div>

                  <div className="product-care-card">
                    <div className="product-care-card__icon">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h4>Giữ nơi khô thoáng</h4>
                    <p>Bảo quản trong môi trường khô ráo, thoáng khí. Nếu sản phẩm bị dính nước hoặc độ ẩm cao, hãy dùng khăn mềm lau khô và phơi trong bóng râm.</p>
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
                    <p>Sử dụng chổi lông mềm, cọ mềm hoặc khăn vi sợi ẩm để làm sạch bụi bẩn trên bề mặt. Tuyệt đối không ngâm trong nước hay dùng chất tẩy rửa mạnh.</p>
                  </div>

                  <div className="product-care-card">
                    <div className="product-care-card__icon">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                    <h4>Giữ dáng và cất giữ</h4>
                    <p>Khi không sử dụng hoặc vận chuyển, nên bọc một lớp giấy lụa bảo vệ, đặt trong hộp cứng hoặc treo phẳng phiu, tránh để vật nặng đè ép gây biến dạng.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Artisan Process Banner (Figma Frame 799:83) */}
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
            <h2 className="product-process-banner__title">
              Tinh hoa bàn tay người thợ làng nghề
            </h2>
            <p className="product-process-banner__desc">
              Khâu nón, chuốt gốm hay đan mây – mỗi công đoạn đều đòi hỏi sự kiên nhẫn và đôi bàn tay tài hoa của nghệ nhân để từng đường nét đều tăm tắp, tròn khít và bền đẹp theo năm tháng.
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

                        {/* Circular arrow button matching Figma bi--arrow-down-left-circle-fill */}
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

      {/* Image Lightbox */}
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

