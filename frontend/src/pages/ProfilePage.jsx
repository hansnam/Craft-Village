import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { facilities, products, villages } from "../data/mockData.js";
import { resolveMockAsset } from "../utils/resolveMockAsset.js";
import {
  getUserBookings,
  getUserFavorites,
  subscribeUserDataChanges,
  toggleUserFavorite,
} from "../utils/userDataStorage.js";
import botanicalBgImg from "../../download/Ảnh làng nghề/Nền/nền trang cơ sở xưởng.png";

const VALID_TABS = new Set(["info", "bookings", "favorites"]);

function formatDateVi(isoOrDate) {
  if (!isoOrDate) return "—";
  const d = new Date(isoOrDate);
  if (Number.isNaN(d.getTime())) return isoOrDate;
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getInitials(name, fallback) {
  const source = (name || fallback || "U").trim();
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return source.slice(0, 2).toUpperCase();
}

export default function ProfilePage() {
  const {
    currentUser,
    openLoginModal,
    openRegisterModal,
    updateProfile,
    logout,
    showToast,
  } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get("tab") || "info";
  const activeTab = VALID_TABS.has(rawTab) ? rawTab : "info";

  const [bookings, setBookings] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    bio: "",
  });
  const [profileError, setProfileError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hồ sơ cá nhân | CRAFT FOLIO";
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setBookings([]);
      setFavoriteIds([]);
      return undefined;
    }

    setProfileForm({
      fullName: currentUser.fullName || "",
      phone: currentUser.phone || "",
      email: currentUser.email || "",
      company: currentUser.company || "",
      address: currentUser.address || "",
      bio: currentUser.bio || "",
    });

    const syncData = () => {
      setBookings(getUserBookings(currentUser));
      setFavoriteIds(getUserFavorites(currentUser));
    };

    syncData();
    return subscribeUserDataChanges(syncData);
  }, [currentUser]);

  const setActiveTab = (tab) => {
    setSearchParams({ tab }, { replace: true });
  };

  const favoriteProducts = useMemo(() => {
    return favoriteIds
      .map((pid) => products.find((p) => p.id === pid))
      .filter(Boolean);
  }, [favoriteIds]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
    if (profileError) setProfileError("");
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const res = updateProfile(profileForm);
    if (!res.ok) {
      setProfileError(res.error || "Không thể cập nhật thông tin.");
      return;
    }
    setProfileError("");
  };

  const handleRemoveFavorite = (product) => {
    if (!currentUser || !product) return;
    toggleUserFavorite(currentUser, product.id);
    showToast?.({
      type: "info",
      title: "Đã bỏ khỏi danh sách yêu thích",
      message: product.name,
    });
  };

  return (
    <main
      className="profile-page"
      style={{ "--profile-botanical-bg": `url('${botanicalBgImg}')` }}
    >
      <div className="profile-page__bg-pattern" aria-hidden="true" />

      <div className="profile-container">
        {!currentUser ? (
          <section className="profile-guest-card" aria-labelledby="profile-guest-heading">
            <div className="profile-guest-card__badge">TÀI KHOẢN CRAFT FOLIO</div>
            <h1 id="profile-guest-heading" className="profile-guest-card__title">
              Đăng nhập để quản lý hồ sơ cá nhân
            </h1>
            <p className="profile-guest-card__desc">
              Xem và cập nhật thông tin liên hệ, theo dõi lịch sử các đơn đặt lịch làm việc với
              chủ xưởng và quản lý danh sách sản phẩm thủ công yêu thích của bạn.
            </p>
            <div className="profile-guest-card__actions">
              <button
                type="button"
                className="profile-btn-primary"
                onClick={() => openLoginModal()}
              >
                Đăng nhập ngay
              </button>
              <button
                type="button"
                className="profile-btn-outline"
                onClick={() => openRegisterModal()}
              >
                Tạo tài khoản mới
              </button>
            </div>
          </section>
        ) : (
          <>
            {/* Profile Hero Card */}
            <section className="profile-hero-card" aria-label="Tổng quan tài khoản">
              <div className="profile-hero-card__identity">
                <div className="profile-avatar" aria-hidden="true">
                  {getInitials(currentUser.fullName, currentUser.userName)}
                </div>
                <div className="profile-identity__meta">
                  <div className="profile-identity__top">
                    <h1 className="profile-identity__name">
                      {currentUser.fullName || currentUser.userName}
                    </h1>
                    <span className="profile-identity__username">@{currentUser.userName}</span>
                  </div>
                  <div className="profile-identity__contacts">
                    <span>{currentUser.email || "Chưa cập nhật email"}</span>
                    <span aria-hidden="true">•</span>
                    <span>{currentUser.phone || "Chưa cập nhật số điện thoại"}</span>
                    {currentUser.company && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>{currentUser.company}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="profile-hero-card__stats">
                <button
                  type="button"
                  className="profile-stat-box"
                  onClick={() => setActiveTab("bookings")}
                >
                  <strong className="profile-stat-box__num">{bookings.length}</strong>
                  <span className="profile-stat-box__label">Lịch hẹn đã tạo</span>
                </button>

                <button
                  type="button"
                  className="profile-stat-box"
                  onClick={() => setActiveTab("favorites")}
                >
                  <strong className="profile-stat-box__num">{favoriteProducts.length}</strong>
                  <span className="profile-stat-box__label">Sản phẩm yêu thích</span>
                </button>

                <div className="profile-hero-card__quick-links">
                  <button
                    type="button"
                    className="profile-btn-primary profile-btn-primary--sm"
                    onClick={logout}
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            </section>

            {/* Tab Switcher */}
            <nav className="profile-tabs" role="tablist" aria-label="Danh mục hồ sơ">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "info"}
                className={`profile-tab ${activeTab === "info" ? "is-active" : ""}`}
                onClick={() => setActiveTab("info")}
              >
                <span>Thông tin cá nhân</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "bookings"}
                className={`profile-tab ${activeTab === "bookings" ? "is-active" : ""}`}
                onClick={() => setActiveTab("bookings")}
              >
                <span>Lịch sử đặt lịch</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "favorites"}
                className={`profile-tab ${activeTab === "favorites" ? "is-active" : ""}`}
                onClick={() => setActiveTab("favorites")}
              >
                <span>Sản phẩm yêu thích</span>
              </button>
            </nav>

            {/* TAB 1: THÔNG TIN CÁ NHÂN */}
            {activeTab === "info" && (
              <section className="profile-panel-grid" aria-label="Thông tin cá nhân">
                <form className="profile-card" onSubmit={handleSaveProfile}>
                  <div className="profile-card__head">
                    <h2 className="profile-card__title">Cập nhật thông tin cá nhân</h2>
                    <p className="profile-card__subtitle">
                      Thông tin này sẽ tự động điền khi bạn đặt lịch làm việc với các xưởng.
                    </p>
                  </div>

                  {profileError && (
                    <div className="profile-alert profile-alert--error">{profileError}</div>
                  )}

                  <div className="profile-form__grid">
                    <div className="profile-field">
                      <label htmlFor="pf-userName" className="profile-field__label">
                        Tên đăng nhập
                      </label>
                      <input
                        id="pf-userName"
                        type="text"
                        className="profile-input is-readonly"
                        value={currentUser.userName}
                        readOnly
                        disabled
                      />
                    </div>

                    <div className="profile-field">
                      <label htmlFor="pf-fullName" className="profile-field__label">
                        Họ và tên <span className="req">*</span>
                      </label>
                      <input
                        id="pf-fullName"
                        name="fullName"
                        type="text"
                        className="profile-input"
                        placeholder="Nhập họ và tên của bạn"
                        value={profileForm.fullName}
                        onChange={handleProfileChange}
                        required
                      />
                    </div>

                    <div className="profile-field">
                      <label htmlFor="pf-phone" className="profile-field__label">
                        Số điện thoại
                      </label>
                      <input
                        id="pf-phone"
                        name="phone"
                        type="tel"
                        className="profile-input"
                        placeholder="Số điện thoại liên hệ"
                        value={profileForm.phone}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="profile-field">
                      <label htmlFor="pf-email" className="profile-field__label">
                        Email
                      </label>
                      <input
                        id="pf-email"
                        name="email"
                        type="email"
                        className="profile-input"
                        placeholder="example@email.com"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="profile-field">
                      <label htmlFor="pf-company" className="profile-field__label">
                        Doanh nghiệp / Đơn vị thiết kế
                      </label>
                      <input
                        id="pf-company"
                        name="company"
                        type="text"
                        className="profile-input"
                        placeholder="Tên công ty / studio (nếu có)"
                        value={profileForm.company}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="profile-field">
                      <label htmlFor="pf-address" className="profile-field__label">
                        Địa chỉ liên hệ
                      </label>
                      <input
                        id="pf-address"
                        name="address"
                        type="text"
                        className="profile-input"
                        placeholder="Tỉnh/thành phố hoặc địa chỉ cụ thể"
                        value={profileForm.address}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="profile-field profile-field--full">
                      <label htmlFor="pf-bio" className="profile-field__label">
                        Giới thiệu / Nhu cầu tìm nguồn hàng
                      </label>
                      <textarea
                        id="pf-bio"
                        name="bio"
                        rows={3}
                        className="profile-textarea"
                        placeholder="Ghi chú ngắn về lĩnh vực hoạt động hoặc sản phẩm thủ công bạn đang tìm kiếm..."
                        value={profileForm.bio}
                        onChange={handleProfileChange}
                      />
                    </div>
                  </div>

                  <div className="profile-card__footer">
                    <button type="submit" className="profile-btn-primary">
                      Lưu thông tin
                    </button>
                  </div>
                </form>
              </section>
            )}

            {/* TAB 2: LỊCH SỬ ĐẶT LỊCH */}
            {activeTab === "bookings" && (
              <section className="profile-card" aria-label="Lịch sử đặt lịch">
                <div className="profile-tab-summary">
                  <strong>{bookings.length} đơn đặt lịch</strong>
                </div>

                {bookings.length === 0 ? (
                  <div className="profile-empty-state">
                    <h3>Chưa có đơn đặt lịch nào</h3>
                    <p>
                      Bạn có thể đặt lịch tham quan xưởng, xem mẫu trực tiếp hoặc trao đổi gia công
                      cùng các cơ sở sản xuất trên Craft Folio.
                    </p>
                    <Link to="/dat-lich" className="profile-btn-primary">
                      Đặt lịch đến xưởng ngay
                    </Link>
                  </div>
                ) : (
                  <div className="profile-booking-list">
                    {bookings.map((booking) => {
                      const fac = facilities.find((f) => f.id === booking.facilityId);
                      const prd = booking.productId
                        ? products.find((p) => p.id === booking.productId)
                        : null;
                      const prdImg = prd?.images?.[0]
                        ? resolveMockAsset(
                            typeof prd.images[0] === "string"
                              ? prd.images[0]
                              : prd.images[0]?.url || prd.images[0]?.Url
                          )
                        : null;

                      return (
                        <article key={booking.id} className="profile-booking-item">
                          <div className="profile-booking-item__top">
                            <div className="profile-booking-item__codes">
                              <span className="profile-booking-item__id">{booking.id}</span>
                              <span className="profile-booking-status is-confirmed">
                                Đã xác nhận
                              </span>
                            </div>
                            <span className="profile-booking-item__created">
                              Tạo ngày {formatDateVi(booking.createdAt)}
                            </span>
                          </div>

                          <div className="profile-booking-item__main">
                            <div className="profile-booking-item__info">
                              <h3 className="profile-booking-item__facility">
                                <Link to={`/co-so/${booking.facilityId}`}>
                                  {booking.facilityName || fac?.name || "Cơ sở sản xuất"}
                                </Link>
                              </h3>

                              <div className="profile-booking-item__meta-grid">
                                <div>
                                  <span>Ngày hẹn:</span>{" "}
                                  <strong>{formatDateVi(booking.preferredDate)}</strong>
                                </div>
                                <div>
                                  <span>Khung giờ:</span> <strong>{booking.timeSlot}</strong>
                                </div>
                                <div>
                                  <span>Mục đích:</span> <strong>{booking.purpose}</strong>
                                </div>
                                <div>
                                  <span>Người đặt:</span>{" "}
                                  <strong>
                                    {booking.fullName} ({booking.phone})
                                  </strong>
                                </div>
                              </div>

                              {booking.notes && (
                                <p className="profile-booking-item__notes">
                                  <strong>Ghi chú:</strong> {booking.notes}
                                </p>
                              )}
                            </div>

                            {prd && (
                              <Link
                                to={`/san-pham/${prd.id}`}
                                className="profile-booking-item__product"
                              >
                                {prdImg && <img src={prdImg} alt={prd.name} />}
                                <div>
                                  <span>Sản phẩm quan tâm</span>
                                  <strong>{prd.name}</strong>
                                </div>
                              </Link>
                            )}
                          </div>

                          <div className="profile-booking-item__actions">
                            <Link
                              to={`/co-so/${booking.facilityId}`}
                              className="profile-mini-btn"
                            >
                              Xem xưởng
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            )}

            {/* TAB 3: SẢN PHẨM YÊU THÍCH */}
            {activeTab === "favorites" && (
              <section className="profile-card" aria-label="Sản phẩm yêu thích">
                <div className="profile-tab-summary">
                  <strong>{favoriteProducts.length} sản phẩm yêu thích</strong>
                </div>

                {favoriteProducts.length === 0 ? (
                  <div className="profile-empty-state">
                    <h3>Chưa có sản phẩm yêu thích nào</h3>
                    <p>
                      Hãy nhấn nút “Yêu thích sản phẩm” tại các trang chi tiết sản phẩm để lưu
                      lại mẫu mã phù hợp cho dự án của bạn.
                    </p>
                    <Link to="/#villages" className="profile-btn-primary">
                      Khám phá làng nghề ngay
                    </Link>
                  </div>
                ) : (
                  <div className="profile-favorites-grid">
                    {favoriteProducts.map((product) => {
                      const rawImg =
                        typeof product.images?.[0] === "string"
                          ? product.images[0]
                          : product.images?.[0]?.url || product.images?.[0]?.Url;
                      const imgUrl = resolveMockAsset(rawImg);
                      const fac = facilities.find((f) => f.id === product.coSoSanXuatId);
                      const village = fac ? villages.find((v) => v.id === fac.langNgheId) : null;

                      return (
                        <article key={product.id} className="profile-fav-card">
                          <Link
                            to={`/san-pham/${product.id}`}
                            className="profile-fav-card__media"
                          >
                            {imgUrl ? (
                              <img src={imgUrl} alt={product.name} loading="lazy" />
                            ) : (
                              <div className="profile-fav-card__placeholder">Craft Folio</div>
                            )}
                          </Link>

                          <button
                            type="button"
                            className="profile-fav-card__unfav"
                            onClick={() => handleRemoveFavorite(product)}
                            title="Bỏ khỏi mục yêu thích"
                            aria-label={`Bỏ ${product.name} khỏi mục yêu thích`}
                          >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="currentColor" strokeWidth="1.8">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                          </button>

                          <div className="profile-fav-card__body">
                            <span className="profile-fav-card__kicker">
                              {village?.name || product.xuatXu || "Làng nghề thủ công"}
                            </span>
                            <h3 className="profile-fav-card__title">
                              <Link to={`/san-pham/${product.id}`}>{product.name}</Link>
                            </h3>
                            <p className="profile-fav-card__desc">
                              {fac?.name ? `Xưởng: ${fac.name}` : product.chatLieu || "Thủ công truyền thống"}
                            </p>

                            <div className="profile-fav-card__actions">
                              <Link
                                to={`/san-pham/${product.id}`}
                                className="profile-mini-btn profile-mini-btn--primary"
                              >
                                Xem chi tiết
                              </Link>
                              {fac && (
                                <Link
                                  to={`/dat-lich/${fac.id}?productId=${product.id}`}
                                  className="profile-mini-btn"
                                >
                                  Đặt lịch xưởng
                                </Link>
                              )}
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
