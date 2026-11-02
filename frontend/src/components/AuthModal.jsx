import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { brandAssets } from "../data/homeData.js";

function PasswordEyeIcon({ visible }) {
  return visible ? (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2.2 10S5.1 4.8 10 4.8 17.8 10 17.8 10 14.9 15.2 10 15.2 2.2 10 2.2 10Z" />
      <circle cx="10" cy="10" r="2.6" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m3 3 14 14" />
      <path d="M8.4 5.1A8.5 8.5 0 0 1 10 4.8c4.9 0 7.8 5.2 7.8 5.2a14.4 14.4 0 0 1-2.6 3.3" />
      <path d="M5.4 6.5A14.2 14.2 0 0 0 2.2 10s2.9 5.2 7.8 5.2c1.3 0 2.5-.4 3.5-1" />
      <path d="M8.2 8.2a2.6 2.6 0 0 0 3.6 3.6" />
    </svg>
  );
}

export default function AuthModal() {
  const { authModalMode, openAuthModal, closeAuthModal, login, register } =
    useAuth();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");

  const userNameInputRef = useRef(null);
  const isRegister = authModalMode === "register";

  // Reset dữ liệu và lỗi khi mở hoặc chuyển tab Đăng nhập / Đăng ký
  useEffect(() => {
    if (!authModalMode) return undefined;

    setUserName("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setFieldErrors({});
    setFormError("");

    const focusTimer = window.setTimeout(() => {
      userNameInputRef.current?.focus();
    }, 60);

    return () => window.clearTimeout(focusTimer);
  }, [authModalMode]);

  // Khóa cuộn trang nền và đóng bằng phím Escape
  useEffect(() => {
    if (!authModalMode) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAuthModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [authModalMode, closeAuthModal]);

  if (!authModalMode) return null;

  const switchMode = (nextMode) => {
    if (nextMode !== authModalMode) {
      openAuthModal(nextMode);
    }
  };

  const clearFieldError = (fieldName) => {
    setFormError("");
    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[fieldName];
        return copy;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    const trimmedUserName = userName.trim();
    const nextErrors = {};

    if (!trimmedUserName) {
      nextErrors.userName = "Vui lòng nhập tên đăng nhập.";
    } else if (isRegister && /\s/.test(trimmedUserName)) {
      nextErrors.userName = "Tên đăng nhập không được chứa khoảng trắng.";
    }

    if (!password) {
      nextErrors.password = "Vui lòng nhập mật khẩu.";
    }

    if (isRegister) {
      if (!confirmPassword) {
        nextErrors.confirmPassword = "Vui lòng nhập lại mật khẩu.";
      } else if (password && password !== confirmPassword) {
        nextErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      return;
    }

    setFieldErrors({});

    if (isRegister) {
      const result = register({
        userName: trimmedUserName,
        password,
        confirmPassword,
      });

      if (!result.ok) {
        if (result.field) {
          setFieldErrors({ [result.field]: result.error });
        } else {
          setFormError(result.error);
        }
      }
      return;
    }

    const result = login({
      userName: trimmedUserName,
      password,
    });

    if (!result.ok) {
      setFormError(result.error);
    }
  };

  return (
    <div
      className="auth-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeAuthModal();
        }
      }}
    >
      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-heading"
      >
        <button
          type="button"
          className="auth-modal__close"
          aria-label="Đóng cửa sổ xác thực"
          data-cursor="link"
          onClick={closeAuthModal}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" />
          </svg>
        </button>

        <div className="auth-modal__brand">
          <span className="brand__logo-frame brand__logo-frame--modal">
            <img
              className="brand__logo brand__logo--modal"
              src={brandAssets.logo}
              alt="Craft Folio"
            />
          </span>
          <h2 className="auth-modal__title" id="auth-modal-heading">
            {isRegister ? "Gia nhập Craft Folio" : "Chào mừng trở lại"}
          </h2>
          <p className="auth-modal__subtitle">
            {isRegister
              ? "Tạo tài khoản để kết nối và hợp tác trực tiếp cùng các xưởng thủ công truyền thống."
              : "Đăng nhập để khám phá hồ sơ năng lực xưởng và đặt lịch tư vấn hợp tác."}
          </p>
        </div>

        <div className="auth-modal__tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={!isRegister}
            className={`auth-modal__tab ${!isRegister ? "auth-modal__tab--active" : ""
              }`}
            data-cursor="link"
            onClick={() => switchMode("login")}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isRegister}
            className={`auth-modal__tab ${isRegister ? "auth-modal__tab--active" : ""
              }`}
            data-cursor="link"
            onClick={() => switchMode("register")}
          >
            Đăng ký
          </button>
        </div>

        {formError && (
          <div className="auth-modal__alert" role="alert">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="8" />
              <path d="M10 6.2v4.6" />
              <circle cx="10" cy="13.8" r="0.65" fill="currentColor" />
            </svg>
            <span>{formError}</span>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-form__field">
            <label className="auth-form__label" htmlFor="auth-username">
              Tên đăng nhập
            </label>
            <div
              className={`auth-form__control ${fieldErrors.userName ? "auth-form__control--error" : ""
                }`}
            >
              <span className="auth-form__icon" aria-hidden="true">
                <svg viewBox="0 0 20 20">
                  <circle cx="10" cy="6.8" r="3.3" />
                  <path d="M3.8 16.8c.9-3 3.4-4.6 6.2-4.6s5.3 1.6 6.2 4.6" />
                </svg>
              </span>
              <input
                ref={userNameInputRef}
                id="auth-username"
                name="userName"
                type="text"
                autoComplete="username"
                placeholder="Nhập tên đăng nhập"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                  clearFieldError("userName");
                }}
              />
            </div>
            {fieldErrors.userName && (
              <p className="auth-form__error">{fieldErrors.userName}</p>
            )}
          </div>

          <div className="auth-form__field">
            <label className="auth-form__label" htmlFor="auth-password">
              Mật khẩu
            </label>
            <div
              className={`auth-form__control ${fieldErrors.password ? "auth-form__control--error" : ""
                }`}
            >
              <span className="auth-form__icon" aria-hidden="true">
                <svg viewBox="0 0 20 20">
                  <rect x="4.2" y="9" width="11.6" height="8" rx="1.8" />
                  <path d="M6.8 9V6.6a3.2 3.2 0 0 1 6.4 0V9" />
                </svg>
              </span>
              <input
                id="auth-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete={isRegister ? "new-password" : "current-password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  clearFieldError("password");
                }}
              />
              <button
                type="button"
                className="auth-form__eye"
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <PasswordEyeIcon visible={showPassword} />
              </button>
            </div>
            {fieldErrors.password && (
              <p className="auth-form__error">{fieldErrors.password}</p>
            )}
          </div>

          {isRegister && (
            <div className="auth-form__field">
              <label
                className="auth-form__label"
                htmlFor="auth-confirm-password"
              >
                Nhập lại mật khẩu
              </label>
              <div
                className={`auth-form__control ${fieldErrors.confirmPassword ? "auth-form__control--error" : ""
                  }`}
              >
                <span className="auth-form__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20">
                    <path d="M10 2.8 4.4 5.2v4.6c0 3.7 2.4 6.6 5.6 7.6 3.2-1 5.6-3.9 5.6-7.6V5.2L10 2.8Z" />
                    <path d="m7.6 10.1 1.7 1.7 3.2-3.4" />
                  </svg>
                </span>
                <input
                  id="auth-confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Nhập lại mật khẩu xác nhận"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    clearFieldError("confirmPassword");
                  }}
                />
                <button
                  type="button"
                  className="auth-form__eye"
                  aria-label={
                    showConfirmPassword
                      ? "Ẩn mật khẩu xác nhận"
                      : "Hiện mật khẩu xác nhận"
                  }
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <PasswordEyeIcon visible={showConfirmPassword} />
                </button>
              </div>
              {fieldErrors.confirmPassword && (
                <p className="auth-form__error">
                  {fieldErrors.confirmPassword}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="auth-form__submit"
            data-cursor="link"
          >
            {isRegister ? "Đăng ký ngay" : "Đăng nhập"}
          </button>
        </form>

        <p className="auth-modal__switch-hint">
          {isRegister ? "Đã có tài khoản Craft Folio?" : "Chưa có tài khoản?"}{" "}
          <button
            type="button"
            className="auth-modal__switch-link"
            data-cursor="link"
            onClick={() => switchMode(isRegister ? "login" : "register")}
          >
            {isRegister ? "Đăng nhập" : "Đăng ký"}
          </button>
        </p>
      </div>
    </div>
  );
}

