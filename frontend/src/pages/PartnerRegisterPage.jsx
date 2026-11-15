import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { villages } from "../data/mockData.js";
import workshopBannerImg from "../../download/Ảnh làng nghề/Trang chủ/vechungtoi.jpg";
import businessBannerImg from "../../download/Ảnh làng nghề/Về Chúng Tôi/sumenh(1).jpg";
import botanicalBgImg from "../../download/Ảnh làng nghề/Nền/nền trang cơ sở xưởng.png";

const STORAGE_KEY = "craft_partner_registrations";

const VILLAGE_OPTIONS = [
  ...villages.map((v) => ({ value: v.name, label: v.name })),
  { value: "Làng nghề truyền thống khác", label: "Làng nghề truyền thống khác" },
];

const PRODUCT_GROUP_OPTIONS = [
  "Mây tre đan",
  "Lụa thủ công",
  "Gốm sứ mỹ nghệ",
  "Quạt thủ công truyền thống",
  "Nón lá thủ công",
  "Đồ trang trí & quà tặng doanh nghiệp",
  "Sản xuất theo mẫu thiết kế riêng",
];

const BUSINESS_SECTOR_OPTIONS = [
  "Nội thất & Kiến trúc",
  "Nhà hàng & Khách sạn (HORECA)",
  "Thiết kế & Thời trang",
  "Quà tặng doanh nghiệp & Sự kiện",
  "Thương mại, Bán lẻ & Xuất khẩu",
  "Khác",
];

const INITIAL_WORKSHOP_FORM = {
  facilityName: "",
  representative: "",
  phone: "",
  email: "",
  village: "",
  productGroup: "",
  address: "",
  shortIntro: "",
};

const INITIAL_BUSINESS_FORM = {
  companyName: "",
  contactName: "",
  position: "",
  email: "",
  phone: "",
  sector: "",
  searchNeed: "",
  estimatedQuantity: "",
  otherContent: "",
};

function readStoredRegistrations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function PartnerRegisterPage() {
  const { currentUser, showToast } = useAuth();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const resolveInitialTab = () => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "business" || tabParam === "doanh-nghiep") return "business";
    if (tabParam === "workshop" || tabParam === "xuong") return "workshop";
    if (location.pathname.includes("doanh-nghiep")) return "business";
    return "workshop";
  };

  const [activeTab, setActiveTab] = useState(resolveInitialTab);
  const [workshopForm, setWorkshopForm] = useState(INITIAL_WORKSHOP_FORM);
  const [businessForm, setBusinessForm] = useState(() => ({
    ...INITIAL_BUSINESS_FORM,
    companyName: currentUser?.company || "",
    contactName: currentUser?.fullName || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
  }));
  const [errors, setErrors] = useState({});
  const [submittedRecord, setSubmittedRecord] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      activeTab === "business"
        ? "Đăng ký khách hàng doanh nghiệp | CRAFT FOLIO"
        : "Tham gia cùng Craft Folio | Đăng ký đối tác";
  }, [activeTab]);

  useEffect(() => {
    const nextTab = resolveInitialTab();
    setActiveTab(nextTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, searchParams]);

  useEffect(() => {
    if (currentUser) {
      setBusinessForm((prev) => ({
        ...prev,
        companyName: prev.companyName || currentUser.company || "",
        contactName: prev.contactName || currentUser.fullName || "",
        email: prev.email || currentUser.email || "",
        phone: prev.phone || currentUser.phone || "",
      }));
    }
  }, [currentUser]);

  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setSubmittedRecord(null);
    setSearchParams({ tab }, { replace: true });
  };

  const handleWorkshopChange = (e) => {
    const { name, value } = e.target;
    setWorkshopForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBusinessChange = (e) => {
    const { name, value } = e.target;
    setBusinessForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateWorkshop = () => {
    const next = {};
    if (!workshopForm.facilityName.trim()) next.facilityName = "Vui lòng nhập tên cơ sở sản xuất.";
    if (!workshopForm.representative.trim()) next.representative = "Vui lòng nhập tên người đại diện.";
    if (!workshopForm.phone.trim()) next.phone = "Vui lòng nhập số điện thoại liên hệ.";
    if (workshopForm.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workshopForm.email.trim())) {
      next.email = "Email chưa đúng định dạng.";
    }
    if (!workshopForm.village) next.village = "Vui lòng chọn làng nghề.";
    if (!workshopForm.productGroup) next.productGroup = "Vui lòng chọn nhóm sản phẩm.";
    if (!workshopForm.address.trim()) next.address = "Vui lòng nhập địa chỉ xưởng.";
    if (!workshopForm.shortIntro.trim()) next.shortIntro = "Vui lòng nhập giới thiệu ngắn về xưởng.";
    return next;
  };

  const validateBusiness = () => {
    const next = {};
    if (!businessForm.companyName.trim()) next.companyName = "Vui lòng nhập tên doanh nghiệp.";
    if (!businessForm.contactName.trim()) next.contactName = "Vui lòng nhập tên người liên hệ.";
    if (!businessForm.email.trim()) {
      next.email = "Vui lòng nhập email công việc.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessForm.email.trim())) {
      next.email = "Email công việc chưa đúng định dạng.";
    }
    if (!businessForm.phone.trim()) next.phone = "Vui lòng nhập số điện thoại liên hệ.";
    if (!businessForm.sector) next.sector = "Vui lòng chọn lĩnh vực hoạt động.";
    if (!businessForm.searchNeed) next.searchNeed = "Vui lòng chọn nhu cầu tìm kiếm.";
    return next;
  };

  const handleSubmitWorkshop = (e) => {
    e.preventDefault();
    const nextErrors = validateWorkshop();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      showToast?.({
        type: "warning",
        title: "Thiếu thông tin bắt buộc",
        message: "Vui lòng kiểm tra lại các trường có dấu *.",
      });
      return;
    }

    const record = {
      id: `PTN-${Math.floor(1000 + Math.random() * 9000)}`,
      type: "workshop",
      userId: currentUser?.id || null,
      ...workshopForm,
      createdAt: new Date().toISOString(),
    };
    const existing = readStoredRegistrations();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing]));
    setSubmittedRecord(record);
    setWorkshopForm(INITIAL_WORKSHOP_FORM);
    showToast?.({
      type: "success",
      title: "Đăng ký xưởng đối tác thành công",
      message: "Craft Folio đã ghi nhận hồ sơ xưởng và sẽ liên hệ xác minh trong 24–48 giờ.",
    });
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmitBusiness = (e) => {
    e.preventDefault();
    const nextErrors = validateBusiness();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      showToast?.({
        type: "warning",
        title: "Thiếu thông tin bắt buộc",
        message: "Vui lòng kiểm tra lại các trường có dấu *.",
      });
      return;
    }

    const record = {
      id: `BIZ-${Math.floor(1000 + Math.random() * 9000)}`,
      type: "business",
      userId: currentUser?.id || null,
      ...businessForm,
      createdAt: new Date().toISOString(),
    };
    const existing = readStoredRegistrations();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing]));
    setSubmittedRecord(record);
    setBusinessForm(INITIAL_BUSINESS_FORM);
    showToast?.({
      type: "success",
      title: "Đăng ký khách hàng doanh nghiệp thành công",
      message: "Craft Folio đã tiếp nhận nhu cầu tìm nguồn hàng của doanh nghiệp bạn.",
    });
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const isWorkshopTab = activeTab === "workshop";

  return (
    <main
      className="partner-page"
      style={{ "--partner-botanical-bg": `url('${botanicalBgImg}')` }}
    >
      <div className="partner-page__bg-pattern" aria-hidden="true" />

      <div className="partner-container">
        {/* Heading Block matching reference frame */}
        <header className="partner-hero">
          <h1 className="partner-hero__title">
            Tham gia cùng <span className="partner-hero__brand">Craft Folio</span>
          </h1>
          <p className="partner-hero__subtitle">
            {isWorkshopTab
              ? "Kết nối giá trị thủ công Việt Nam với những cơ hội hợp tác mới."
              : "Giúp Craft Folio hiểu nhu cầu tìm kiếm nguồn hàng và hỗ trợ kết nối với những xưởng phù hợp."}
          </p>

          <div className="partner-hero__divider" aria-hidden="true">
            <span className="partner-hero__line" />
            <svg viewBox="0 0 36 22" width="28" height="18" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M18 3c2.4 4.2 3.2 8.8 0 13-3.2-4.2-2.4-8.8 0-13Z" />
              <path d="M18 16c-5-.6-9.5-3.4-11-7.8 4.4.4 8.2 3.1 11 7.8Z" />
              <path d="M18 16c5-.6 9.5-3.4 11-7.8-4.4.4-8.2 3.1-11 7.8Z" />
              <path d="M9 17.5h18" strokeLinecap="round" />
            </svg>
            <span className="partner-hero__line" />
          </div>
        </header>

        {/* Interactive Tab Switcher between Workshop and Business Client */}
        <div className="partner-tabs" role="tablist" aria-label="Loại hình đăng ký">
          <button
            type="button"
            role="tab"
            id="tab-workshop"
            aria-selected={isWorkshopTab}
            aria-controls="panel-partner-form"
            className={`partner-tab ${isWorkshopTab ? "is-active" : ""}`}
            onClick={() => handleSwitchTab("workshop")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 21h18M4 21V9l8-5 8 5v12M9 21v-6h6v6" />
            </svg>
            <span>Đăng ký dành cho xưởng sản xuất</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-business"
            aria-selected={!isWorkshopTab}
            aria-controls="panel-partner-form"
            className={`partner-tab ${!isWorkshopTab ? "is-active" : ""}`}
            onClick={() => handleSwitchTab("business")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
            </svg>
            <span>Đăng ký dành cho khách hàng doanh nghiệp</span>
          </button>
        </div>

        {/* Single Centered Form Card matching the screenshot aesthetics */}
        <section
          id="panel-partner-form"
          role="tabpanel"
          aria-labelledby={isWorkshopTab ? "tab-workshop" : "tab-business"}
          className="partner-card"
        >
          {/* Card Visual Header */}
          <div className="partner-card__banner">
            <div className="partner-card__banner-media">
              <img
                src={isWorkshopTab ? workshopBannerImg : businessBannerImg}
                alt={
                  isWorkshopTab
                    ? "Nghệ nhân chế tác mây tre đan thủ công"
                    : "Không gian trưng bày và tư vấn sản phẩm thủ công cho doanh nghiệp"
                }
              />
              <div className="partner-card__banner-fade" aria-hidden="true" />
            </div>

            <div className="partner-card__banner-copy">
              <span className="partner-card__banner-icon" aria-hidden="true">
                {isWorkshopTab ? (
                  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M4 23h20M6 23V10l8-5 8 5v13M10 23v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
                    <path d="M10 12h.01M14 12h.01M18 12h.01" strokeLinecap="round" strokeWidth="2.2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="4" y="8" width="20" height="15" rx="2.5" />
                    <path d="M10 8V5.5A1.5 1.5 0 0 1 11.5 4h5A1.5 1.5 0 0 1 18 5.5V8M4 14h20" />
                    <path d="M12.5 14v2h3v-2" />
                  </svg>
                )}
              </span>

              <div>
                <h2 className="partner-card__banner-title">
                  {isWorkshopTab
                    ? "Đăng ký dành cho xưởng sản xuất"
                    : "Đăng ký dành cho khách hàng doanh nghiệp"}
                </h2>
                <p className="partner-card__banner-desc">
                  {isWorkshopTab
                    ? "Đưa thông tin cơ sở, sản phẩm và năng lực sản xuất lên nền tảng Craft Folio."
                    : "Tìm kiếm xưởng thủ công, khám phá sản phẩm phù hợp nguồn hàng và kết nối hợp tác."}
                </p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="partner-card__body">
            {submittedRecord && submittedRecord.type === activeTab ? (
              <div className="partner-success">
                <div className="partner-success__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="partner-success__title">
                  {submittedRecord.type === "business"
                    ? "Đã tiếp nhận đăng ký khách hàng doanh nghiệp!"
                    : "Đã tiếp nhận hồ sơ xưởng sản xuất!"}
                </h3>
                <p className="partner-success__code">
                  Mã hồ sơ: <strong>{submittedRecord.id}</strong>
                </p>
                <p className="partner-success__desc">
                  {submittedRecord.type === "business"
                    ? `Craft Folio đã ghi nhận nhu cầu tìm kiếm "${submittedRecord.searchNeed}" cho đơn vị ${submittedRecord.companyName}. Đội ngũ kết nối sẽ phản hồi qua email ${submittedRecord.email} hoặc số ${submittedRecord.phone} trong thời gian sớm nhất.`
                    : `Hồ sơ cơ sở "${submittedRecord.facilityName}" (${submittedRecord.village}) đã được lưu. Craft Folio sẽ liên hệ với ${submittedRecord.representative} qua số ${submittedRecord.phone} để hoàn tất đối soát thông tin xưởng.`}
                </p>
                <div className="partner-success__actions">
                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={() => setSubmittedRecord(null)}
                  >
                    <span>Gửi đăng ký khác</span>
                    <span className="partner-btn-arrow" aria-hidden="true">→</span>
                  </button>
                  <Link to="/#villages" className="partner-btn-outline">
                    Khám phá các làng nghề
                  </Link>
                </div>
              </div>
            ) : isWorkshopTab ? (
              <form className="partner-form" onSubmit={handleSubmitWorkshop} noValidate>
                <div className="partner-form__grid">
                  <div className="partner-field">
                    <label htmlFor="ws-facilityName" className="partner-field__label">
                      Tên cơ sở sản xuất <span className="req">*</span>
                    </label>
                    <input
                      id="ws-facilityName"
                      name="facilityName"
                      type="text"
                      className={`partner-input ${errors.facilityName ? "has-error" : ""}`}
                      placeholder="Tên xưởng/hộ kinh doanh/doanh nghiệp"
                      value={workshopForm.facilityName}
                      onChange={handleWorkshopChange}
                    />
                    {errors.facilityName && <span className="partner-error">{errors.facilityName}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="ws-representative" className="partner-field__label">
                      Người đại diện <span className="req">*</span>
                    </label>
                    <input
                      id="ws-representative"
                      name="representative"
                      type="text"
                      className={`partner-input ${errors.representative ? "has-error" : ""}`}
                      placeholder="Họ và tên người liên hệ"
                      value={workshopForm.representative}
                      onChange={handleWorkshopChange}
                    />
                    {errors.representative && <span className="partner-error">{errors.representative}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="ws-phone" className="partner-field__label">
                      Số điện thoại <span className="req">*</span>
                    </label>
                    <input
                      id="ws-phone"
                      name="phone"
                      type="tel"
                      className={`partner-input ${errors.phone ? "has-error" : ""}`}
                      placeholder="Số điện thoại liên hệ"
                      value={workshopForm.phone}
                      onChange={handleWorkshopChange}
                    />
                    {errors.phone && <span className="partner-error">{errors.phone}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="ws-email" className="partner-field__label">
                      Email
                    </label>
                    <input
                      id="ws-email"
                      name="email"
                      type="email"
                      className={`partner-input ${errors.email ? "has-error" : ""}`}
                      placeholder="Email (nếu có)"
                      value={workshopForm.email}
                      onChange={handleWorkshopChange}
                    />
                    {errors.email && <span className="partner-error">{errors.email}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="ws-village" className="partner-field__label">
                      Làng nghề <span className="req">*</span>
                    </label>
                    <div className="partner-select-wrap">
                      <select
                        id="ws-village"
                        name="village"
                        className={`partner-select ${!workshopForm.village ? "is-placeholder" : ""} ${errors.village ? "has-error" : ""}`}
                        value={workshopForm.village}
                        onChange={handleWorkshopChange}
                      >
                        <option value="">Chọn làng nghề</option>
                        {VILLAGE_OPTIONS.map((v) => (
                          <option key={v.value} value={v.value}>
                            {v.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.village && <span className="partner-error">{errors.village}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="ws-productGroup" className="partner-field__label">
                      Nhóm sản phẩm <span className="req">*</span>
                    </label>
                    <div className="partner-select-wrap">
                      <select
                        id="ws-productGroup"
                        name="productGroup"
                        className={`partner-select ${!workshopForm.productGroup ? "is-placeholder" : ""} ${errors.productGroup ? "has-error" : ""}`}
                        value={workshopForm.productGroup}
                        onChange={handleWorkshopChange}
                      >
                        <option value="">Mây tre, gốm sứ, lụa, nón lá...</option>
                        {PRODUCT_GROUP_OPTIONS.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.productGroup && <span className="partner-error">{errors.productGroup}</span>}
                  </div>

                  <div className="partner-field partner-field--full">
                    <label htmlFor="ws-address" className="partner-field__label">
                      Địa chỉ xưởng <span className="req">*</span>
                    </label>
                    <div className="partner-input-icon-wrap">
                      <span className="partner-input-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <input
                        id="ws-address"
                        name="address"
                        type="text"
                        className={`partner-input partner-input--with-icon ${errors.address ? "has-error" : ""}`}
                        placeholder="Địa chỉ cơ sở sản xuất"
                        value={workshopForm.address}
                        onChange={handleWorkshopChange}
                      />
                    </div>
                    {errors.address && <span className="partner-error">{errors.address}</span>}
                  </div>

                  <div className="partner-field partner-field--full">
                    <label htmlFor="ws-shortIntro" className="partner-field__label">
                      Giới thiệu ngắn <span className="req">*</span>
                    </label>
                    <textarea
                      id="ws-shortIntro"
                      name="shortIntro"
                      rows={4}
                      className={`partner-textarea ${errors.shortIntro ? "has-error" : ""}`}
                      placeholder="Mô tả sơ bộ về xưởng và sản phẩm..."
                      value={workshopForm.shortIntro}
                      onChange={handleWorkshopChange}
                    />
                    {errors.shortIntro && <span className="partner-error">{errors.shortIntro}</span>}
                  </div>
                </div>

                <div className="partner-form__footer">
                  <button type="submit" className="partner-btn-primary">
                    <span>Đăng ký trở thành xưởng đối tác</span>
                    <span className="partner-btn-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            ) : (
              <form className="partner-form" onSubmit={handleSubmitBusiness} noValidate>
                <div className="partner-form__grid">
                  <div className="partner-field">
                    <label htmlFor="biz-companyName" className="partner-field__label">
                      Tên doanh nghiệp <span className="req">*</span>
                    </label>
                    <input
                      id="biz-companyName"
                      name="companyName"
                      type="text"
                      className={`partner-input ${errors.companyName ? "has-error" : ""}`}
                      placeholder="Tên công ty/tổ chức"
                      value={businessForm.companyName}
                      onChange={handleBusinessChange}
                    />
                    {errors.companyName && <span className="partner-error">{errors.companyName}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-contactName" className="partner-field__label">
                      Người liên hệ <span className="req">*</span>
                    </label>
                    <input
                      id="biz-contactName"
                      name="contactName"
                      type="text"
                      className={`partner-input ${errors.contactName ? "has-error" : ""}`}
                      placeholder="Họ và tên"
                      value={businessForm.contactName}
                      onChange={handleBusinessChange}
                    />
                    {errors.contactName && <span className="partner-error">{errors.contactName}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-position" className="partner-field__label">
                      Chức vụ
                    </label>
                    <input
                      id="biz-position"
                      name="position"
                      type="text"
                      className="partner-input"
                      placeholder="Chức vụ trong doanh nghiệp (không bắt buộc)"
                      value={businessForm.position}
                      onChange={handleBusinessChange}
                    />
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-email" className="partner-field__label">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      id="biz-email"
                      name="email"
                      type="email"
                      className={`partner-input ${errors.email ? "has-error" : ""}`}
                      placeholder="Email công việc"
                      value={businessForm.email}
                      onChange={handleBusinessChange}
                    />
                    {errors.email && <span className="partner-error">{errors.email}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-phone" className="partner-field__label">
                      Số điện thoại <span className="req">*</span>
                    </label>
                    <input
                      id="biz-phone"
                      name="phone"
                      type="tel"
                      className={`partner-input ${errors.phone ? "has-error" : ""}`}
                      placeholder="Số điện thoại liên hệ"
                      value={businessForm.phone}
                      onChange={handleBusinessChange}
                    />
                    {errors.phone && <span className="partner-error">{errors.phone}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-sector" className="partner-field__label">
                      Lĩnh vực hoạt động <span className="req">*</span>
                    </label>
                    <div className="partner-select-wrap">
                      <select
                        id="biz-sector"
                        name="sector"
                        className={`partner-select ${!businessForm.sector ? "is-placeholder" : ""} ${errors.sector ? "has-error" : ""}`}
                        value={businessForm.sector}
                        onChange={handleBusinessChange}
                      >
                        <option value="">Nội thất, nhà hàng, khách sạn, thiết kế...</option>
                        {BUSINESS_SECTOR_OPTIONS.map((sec) => (
                          <option key={sec} value={sec}>
                            {sec}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.sector && <span className="partner-error">{errors.sector}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-searchNeed" className="partner-field__label">
                      Nhu cầu tìm kiếm <span className="req">*</span>
                    </label>
                    <div className="partner-select-wrap">
                      <select
                        id="biz-searchNeed"
                        name="searchNeed"
                        className={`partner-select ${!businessForm.searchNeed ? "is-placeholder" : ""} ${errors.searchNeed ? "has-error" : ""}`}
                        value={businessForm.searchNeed}
                        onChange={handleBusinessChange}
                      >
                        <option value="">Nhóm sản phẩm quan tâm</option>
                        {PRODUCT_GROUP_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.searchNeed && <span className="partner-error">{errors.searchNeed}</span>}
                  </div>

                  <div className="partner-field">
                    <label htmlFor="biz-estimatedQuantity" className="partner-field__label">
                      Số lượng dự kiến
                    </label>
                    <input
                      id="biz-estimatedQuantity"
                      name="estimatedQuantity"
                      type="text"
                      className="partner-input"
                      placeholder="Nhu cầu đặt hàng (không bắt buộc)"
                      value={businessForm.estimatedQuantity}
                      onChange={handleBusinessChange}
                    />
                  </div>

                  <div className="partner-field partner-field--full">
                    <label htmlFor="biz-otherContent" className="partner-field__label">
                      Nội dung khác
                    </label>
                    <textarea
                      id="biz-otherContent"
                      name="otherContent"
                      rows={4}
                      className="partner-textarea"
                      placeholder="Mô tả nhu cầu hợp tác (không bắt buộc)"
                      value={businessForm.otherContent}
                      onChange={handleBusinessChange}
                    />
                  </div>
                </div>

                <div className="partner-form__footer">
                  <button type="submit" className="partner-btn-primary">
                    <span>Đăng ký tài khoản khách hàng</span>
                    <span className="partner-btn-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
