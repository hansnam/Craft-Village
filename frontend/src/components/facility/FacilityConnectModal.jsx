import React, { useState, useEffect } from "react";

export default function FacilityConnectModal({ isOpen, facility, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    purpose: "DatHangMau",
    preferredDate: "",
    timeSlot: "Sang",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div
      className="workshop-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-modal-title"
    >
      <div className="workshop-modal-backdrop" />

      <div
        className="workshop-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="workshop-modal-close"
          onClick={onClose}
          aria-label="Đóng biểu mẫu"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="workshop-connect-success">
            <div className="workshop-connect-success__icon">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="workshop-connect-success__title">Gửi yêu cầu kết nối thành công!</h3>
            <p className="workshop-connect-success__desc">
              Cơ sở sản xuất <strong>{facility?.name}</strong> đã nhận được thông tin và sẽ liên hệ lại với bạn sớm nhất.
            </p>
          </div>
        ) : (
          <form className="workshop-connect-form" onSubmit={handleSubmit}>
            <div className="workshop-connect-form__header">
              <span className="workshop-connect-form__kicker">KẾT NỐI DOANH NGHIỆP & XƯỞNG</span>
              <h2 id="connect-modal-title" className="workshop-connect-form__title">
                Gửi yêu cầu tới {facility?.name}
              </h2>
              <p className="workshop-connect-form__subtitle">
                {facility?.tuVanDescription || "Vui lòng để lại thông tin để xưởng chuẩn bị mẫu phác thảo và báo giá chi tiết."}
              </p>
            </div>

            <div className="workshop-connect-form__body">
              <div className="workshop-form-row">
                <div className="workshop-form-group">
                  <label htmlFor="connect-fullname" className="workshop-form-label">Họ và tên *</label>
                  <input
                    id="connect-fullname"
                    type="text"
                    name="fullName"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="workshop-form-input"
                  />
                </div>

                <div className="workshop-form-group">
                  <label htmlFor="connect-phone" className="workshop-form-label">Số điện thoại *</label>
                  <input
                    id="connect-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="0987xxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="workshop-form-input"
                  />
                </div>
              </div>

              <div className="workshop-form-group">
                <label htmlFor="connect-email" className="workshop-form-label">Email liên hệ</label>
                <input
                  id="connect-email"
                  type="email"
                  name="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="workshop-form-input"
                />
              </div>

              <div className="workshop-form-row">
                <div className="workshop-form-group">
                  <label htmlFor="connect-purpose" className="workshop-form-label">Mục đích kết nối</label>
                  <select
                    id="connect-purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="workshop-form-select"
                  >
                    <option value="DatHangMau">Đặt hàng mẫu thử nghiệm</option>
                    <option value="DatHangSoLuongLon">Sản xuất số lượng lớn</option>
                    <option value="ThietKeRieng">Gia công thiết kế riêng</option>
                    <option value="ThamQuanXuong">Đến tham quan xưởng trực tiếp</option>
                  </select>
                </div>

                <div className="workshop-form-group">
                  <label htmlFor="connect-date" className="workshop-form-label">Thời gian dự kiến</label>
                  <input
                    id="connect-date"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="workshop-form-input"
                  />
                </div>
              </div>

              <div className="workshop-form-group">
                <label htmlFor="connect-notes" className="workshop-form-label">Chi tiết yêu cầu / Ghi chú số lượng</label>
                <textarea
                  id="connect-notes"
                  name="notes"
                  rows="3"
                  placeholder="Số lượng mong muốn, quy cách đóng gói, thời gian cần nhận hàng..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="workshop-form-textarea"
                />
              </div>

              {facility?.soDienThoai && (
                <div className="workshop-connect-direct">
                  <span>Hoặc liên hệ hotline trực tiếp: </span>
                  <a href={`tel:${facility.soDienThoai}`} className="workshop-connect-direct__link">
                    <strong>{facility.soDienThoai}</strong> ({facility.tenChuXuong || "Chủ xưởng"})
                  </a>
                </div>
              )}
            </div>

            <div className="workshop-connect-form__footer">
              <button
                type="button"
                className="workshop-btn workshop-btn--secondary"
                onClick={onClose}
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                className="workshop-btn workshop-btn--primary"
              >
                Gửi yêu cầu ngay
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
