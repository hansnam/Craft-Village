import React, { useState, useEffect, useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { facilities, products } from "../data/mockData.js";
import { resolveMockAsset, resolveFacilityThumbnail } from "../utils/resolveMockAsset.js";

const PURPOSE_OPTIONS = [
  "Tham quan xưởng",
  "Tư vấn trực tiếp",
  "Xem mẫu sản phẩm",
  "Đặt gia công / sản xuất",
  "Trao đổi hợp tác",
  "Khác",
];

const TIME_SLOTS = [
  "08:30 - 10:00",
  "10:00 - 11:30",
  "14:00 - 15:30",
  "15:30 - 17:00",
  "Linh hoạt theo thỏa thuận",
];

export default function BookingPage() {
  const { facilityId } = useParams();
  const [searchParams] = useSearchParams();
  const productIdFromQuery = searchParams.get("productId");

  // Determine active facility
  const [selectedFacilityId, setSelectedFacilityId] = useState(
    facilityId || facilities[0]?.id || ""
  );

  useEffect(() => {
    if (facilityId) {
      setSelectedFacilityId(facilityId);
    }
  }, [facilityId]);

  const activeFacility = useMemo(() => {
    return (
      facilities.find((f) => f.id === selectedFacilityId) || facilities[0] || null
    );
  }, [selectedFacilityId]);

  // Product referenced (if any)
  const referencedProduct = useMemo(() => {
    if (!productIdFromQuery) return null;
    return products.find(
      (p) => String(p.id).toLowerCase() === String(productIdFromQuery).toLowerCase()
    );
  }, [productIdFromQuery]);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    purpose: "Tham quan xưởng",
    preferredDate: "",
    timeSlot: "08:30 - 10:00",
    notes: referencedProduct
      ? `Quan tâm sản phẩm: ${referencedProduct.name}. Cần trao đổi thêm về mẫu mã và đơn giá.`
      : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "notes" && value.length > 500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePurposeSelect = (purpose) => {
    setFormData((prev) => ({ ...prev, purpose }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*)");
      return;
    }

    // Generate reference code e.g. BK-8492
    const code = "BK-" + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(code);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      purpose: "Tham quan xưởng",
      preferredDate: "",
      timeSlot: "08:30 - 10:00",
      notes: "",
    });
  };

  // Get contact person details
  const contactPerson = activeFacility?.tenChuXuong || "Chủ xưởng / Nghệ nhân";
  const contactPhone = activeFacility?.soDienThoai || "0901234567";
  const contactEmail = activeFacility?.email || "cskh.langnghe@gmail.com";
  const contactAddress = activeFacility?.diaChi || "Làng nghề truyền thống Việt Nam";
  const heroBg = resolveMockAsset("/images/booking/booking_hero_bg.jpg");

  return (
    <div className="booking-page">
      {/* Hero Banner (Figma Frame 203:85 & 78:414) */}
      <section
        className="booking-hero"
        style={{
          backgroundImage: heroBg ? `url('${heroBg}')` : undefined,
        }}
      >
        <div className="booking-hero__overlay" />
        <div className="booking-container booking-hero__content">
          <nav className="booking-breadcrumb" aria-label="Đường dẫn">
            <Link to="/">Trang chủ</Link>
            <span>/</span>
            <span className="booking-breadcrumb__current">Đặt lịch</span>
          </nav>

          <span className="booking-hero__pill">KẾT NỐI VỚI CHỦ XƯỞNG</span>
          <h1 className="booking-hero__title">Đặt lịch làm việc với chủ xưởng</h1>
          <p className="booking-hero__subtitle">
            Điền thông tin bên dưới để gửi yêu cầu đặt lịch. Chủ xưởng sẽ liên hệ lại để xác nhận.
          </p>

          {/* Badges (Figma Frame 204:177) */}
          <div className="booking-hero__badges">
            <div className="booking-hero__badge">
              <div className="booking-hero__badge-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="booking-hero__badge-text">
                <strong>Tư vấn nhanh chóng</strong>
                <span>Phản hồi trong 24h</span>
              </div>
            </div>

            <div className="booking-hero__badge">
              <div className="booking-hero__badge-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="booking-hero__badge-text">
                <strong>Linh hoạt thời gian</strong>
                <span>Đặt lịch theo giờ bạn muốn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: 2-Column Form & Contact Sidebar */}
      <section className="booking-content-section">
        <div className="booking-container booking-content-grid">
          
          {/* Left Column: Form / Confirmation */}
          <div className="booking-form-card">
            {submitted ? (
              <div className="booking-success">
                <div className="booking-success__icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#2e7d32" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="booking-success__title">Gửi yêu cầu đặt lịch thành công!</h2>
                <p className="booking-success__ref">
                  Mã cuộc hẹn: <strong>{bookingRef}</strong>
                </p>
                <div className="booking-success__details">
                  <div className="booking-success__row">
                    <span>Xưởng làm việc:</span>
                    <strong>{activeFacility?.name}</strong>
                  </div>
                  <div className="booking-success__row">
                    <span>Người đặt hẹn:</span>
                    <strong>{formData.fullName} ({formData.phone})</strong>
                  </div>
                  <div className="booking-success__row">
                    <span>Mục đích:</span>
                    <strong>{formData.purpose}</strong>
                  </div>
                  <div className="booking-success__row">
                    <span>Thời gian hẹn:</span>
                    <strong>{formData.preferredDate} ({formData.timeSlot})</strong>
                  </div>
                </div>
                <div className="booking-success__note">
                  Chủ xưởng <strong>{contactPerson}</strong> sẽ liên hệ trực tiếp qua số điện thoại hoặc Zalo của bạn trong vòng 24 giờ để xác nhận buổi làm việc.
                </div>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleReset}
                >
                  Đặt thêm lịch hẹn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form">
                <h2 className="booking-form__title">Đặt lịch làm việc với chủ xưởng</h2>
                <p className="booking-form__desc">
                  Vui lòng cung cấp thông tin để xưởng chuẩn bị đón tiếp và tư vấn chi tiết nhất.
                </p>

                {/* Facility Selector */}
                <div className="booking-field">
                  <label htmlFor="facilitySelect" className="booking-field__label">
                    Cơ sở / Xưởng muốn làm việc <span className="req">*</span>
                  </label>
                  <div className="booking-select-wrapper">
                    <select
                      id="facilitySelect"
                      className="booking-field__select"
                      value={selectedFacilityId}
                      onChange={(e) => setSelectedFacilityId(e.target.value)}
                    >
                      {facilities.map((fac) => (
                        <option key={fac.id} value={fac.id}>
                          {fac.name} - ({fac.diaChi})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row: Name & Phone */}
                <div className="booking-form__row">
                  <div className="booking-field">
                    <label htmlFor="fullName" className="booking-field__label">
                      Họ và tên <span className="req">*</span>
                    </label>
                    <div className="booking-field__input-wrap">
                      <span className="booking-field__icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        className="booking-field__input"
                        placeholder="Nhập họ và tên"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-field">
                    <label htmlFor="phone" className="booking-field__label">
                      Số điện thoại <span className="req">*</span>
                    </label>
                    <div className="booking-field__input-wrap">
                      <span className="booking-field__icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="booking-field__input"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="booking-field">
                  <label htmlFor="email" className="booking-field__label">
                    Email (không bắt buộc)
                  </label>
                  <div className="booking-field__input-wrap">
                    <span className="booking-field__icon">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="booking-field__input"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Purpose Selection Chips (Figma Frame 62:386, 62:387) */}
                <div className="booking-field">
                  <label className="booking-field__label">
                    Mục đích đặt lịch <span className="req">*</span>
                  </label>
                  <div className="booking-purpose-chips" role="radiogroup">
                    {PURPOSE_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`purpose-chip ${formData.purpose === opt ? "is-selected" : ""}`}
                        onClick={() => handlePurposeSelect(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row: Date & Time Slot */}
                <div className="booking-form__row">
                  <div className="booking-field">
                    <label htmlFor="preferredDate" className="booking-field__label">
                      Ngày mong muốn <span className="req">*</span>
                    </label>
                    <div className="booking-field__input-wrap">
                      <span className="booking-field__icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </span>
                      <input
                        id="preferredDate"
                        type="date"
                        name="preferredDate"
                        className="booking-field__input"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>
                  </div>

                  <div className="booking-field">
                    <label htmlFor="timeSlot" className="booking-field__label">
                      Khung giờ mong muốn <span className="req">*</span>
                    </label>
                    <div className="booking-select-wrapper">
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        className="booking-field__select"
                        value={formData.timeSlot}
                        onChange={handleChange}
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Content / Notes Textarea (with 0/500 counter matching Figma 252:178) */}
                <div className="booking-field">
                  <div className="booking-field__header-row">
                    <label htmlFor="notes" className="booking-field__label">
                      Nội dung cần trao đổi
                    </label>
                    <span className="booking-char-counter">
                      {formData.notes.length}/500
                    </span>
                  </div>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="booking-field__textarea"
                    placeholder="Mô tả nhu cầu, sản phẩm quan tâm hoặc yêu cầu riêng..."
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button (Figma Frame 252:179) */}
                <button type="submit" className="booking-submit-btn">
                  <span>Gửi yêu cầu đặt lịch</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Workshop Contact Card (Figma Frame 252:185) */}
          <aside className="booking-sidebar">
            <div className="workshop-contact-card">
              <h3 className="workshop-contact-card__title">Thông tin liên hệ chủ xưởng</h3>

              {activeFacility && (
                <div className="workshop-contact-profile">
                  <div className="workshop-contact-avatar">
                    {resolveFacilityThumbnail(activeFacility) ? (
                      <img
                        src={resolveFacilityThumbnail(activeFacility)}
                        alt={activeFacility.name}
                        className="workshop-contact-avatar__img"
                      />
                    ) : (
                      <div className="workshop-contact-avatar__placeholder">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="workshop-contact-names">
                    <h4 className="workshop-contact-person">{contactPerson}</h4>
                    <span className="workshop-contact-role">Người phụ trách xưởng</span>
                    <p className="workshop-contact-facname">{activeFacility.name}</p>
                  </div>
                </div>
              )}

              {/* Contact list with icons */}
              <div className="workshop-contact-list">
                <div className="workshop-contact-item">
                  <div className="workshop-contact-item__icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="workshop-contact-item__text">
                    <span className="label">Số điện thoại / Zalo</span>
                    <a href={`tel:${contactPhone.replace(/\D/g, "")}`} className="value">
                      {contactPhone} (Zalo)
                    </a>
                  </div>
                </div>

                <div className="workshop-contact-item">
                  <div className="workshop-contact-item__icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="workshop-contact-item__text">
                    <span className="label">Email</span>
                    <a href={`mailto:${contactEmail}`} className="value">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="workshop-contact-item">
                  <div className="workshop-contact-item__icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="workshop-contact-item__text">
                    <span className="label">Địa chỉ xưởng</span>
                    <span className="value">{contactAddress}</span>
                  </div>
                </div>

                <div className="workshop-contact-item">
                  <div className="workshop-contact-item__icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="workshop-contact-item__text">
                    <span className="label">Giờ làm việc</span>
                    <span className="value">08:00 - 17:00 (Thứ 2 - Thứ 7)</span>
                  </div>
                </div>
              </div>

              {/* Response SLA Tag */}
              <div className="workshop-sla-tag">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.4 5.9-4.2 4.2a.8.8 0 0 1-1.1 0L4.6 8.6a.8.8 0 1 1 1.1-1.1L7.1 8.9l3.6-3.6a.8.8 0 0 1 1.1 1.1z" />
                </svg>
                <span>Thời gian phản hồi cam kết trong 24h</span>
              </div>

              {/* Quick Actions (Figma Frame 252:211) */}
              <div className="workshop-quick-actions">
                <span className="workshop-quick-actions__title">Hỗ trợ nhanh</span>
                <div className="workshop-quick-actions__grid">
                  <a
                    href={`https://zalo.me/${contactPhone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="quick-action-btn quick-action-btn--zalo"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>Nhắn Zalo</span>
                  </a>

                  <a
                    href={`tel:${contactPhone.replace(/\D/g, "")}`}
                    className="quick-action-btn quick-action-btn--call"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Gọi điện</span>
                  </a>

                  <a
                    href={`mailto:${contactEmail}`}
                    className="quick-action-btn quick-action-btn--mail"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>Gửi mail</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
