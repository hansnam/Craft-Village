import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { brandAssets } from "../data/homeData.js";
import HeaderSearch from "./HeaderSearch.jsx";
import {
  DesktopVillageMegaMenu,
  MobileVillageAccordion,
} from "./VillageMegaMenu.jsx";

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ", targetHash: "#home", href: "/" },
  { id: "villages", label: "Làng nghề", targetHash: "#villages", hasMenu: true, href: "/#villages" },
  { id: "news", label: "Tin tức", href: "/tin-tuc" },
  { id: "about", label: "Về chúng tôi", href: "/ve-chung-toi" },
];

export default function Header() {
  const { currentUser, openLoginModal, openRegisterModal, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const userMenuRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [villageMenuOpen, setVillageMenuOpen] = useState(false);
  const [mobileVillagesOpen, setMobileVillagesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
    setVillageMenuOpen(false);
    setMobileVillagesOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!villageMenuOpen && !userMenuOpen) return undefined;

    const handlePointerDownOutside = (event) => {
      if (villageMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setVillageMenuOpen(false);
      }
      if (userMenuOpen && userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setVillageMenuOpen(false);
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [villageMenuOpen, userMenuOpen]);

  useEffect(() => {
    if (location.pathname.startsWith("/tin-tuc")) {
      setActiveNav("news");
      return undefined;
    }

    if (location.pathname === "/ve-chung-toi") {
      setActiveNav("about");
      return undefined;
    }

    if (
      location.pathname.startsWith("/lang-nghe") ||
      location.pathname.startsWith("/co-so") ||
      location.pathname.startsWith("/san-pham")
    ) {
      setActiveNav("villages");
      return undefined;
    }

    if (location.pathname !== "/") {
      setActiveNav("");
      return undefined;
    }

    setActiveNav("home");
    return undefined;
  }, [location.pathname]);

  const jumpToSection = (event, targetHash, navId) => {
    event.preventDefault();
    setActiveNav(navId);
    setVillageMenuOpen(false);
    setMobileMenuOpen(false);

    if (navId === "news") {
      navigate("/tin-tuc");
      return;
    }

    if (navId === "about") {
      navigate("/ve-chung-toi");
      return;
    }

    if (navId === "home") {
      if (isHomeRoute) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (location.hash) {
          navigate("/", { replace: true });
        }
      } else {
        navigate("/");
      }
      return;
    }

    if (isHomeRoute) {
      const sectionEl = targetHash ? document.getElementById(targetHash.slice(1)) : null;
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(targetHash ? `/${targetHash}` : "/");
    }
  };

  const handleDesktopNavClick = (event, item) => {
    if (item.hasMenu) {
      event.preventDefault();
      setVillageMenuOpen((prev) => !prev);
      return;
    }
    jumpToSection(event, item.targetHash, item.id);
  };

  const handleMobileNavClick = (event, item) => {
    if (item.hasMenu) {
      event.preventDefault();
      setMobileVillagesOpen((prev) => !prev);
      return;
    }
    jumpToSection(event, item.targetHash, item.id);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <div className="site-header__left">
          <Link
            className="brand"
            to="/"
            aria-label="Craft Folio - Trang chủ"
            data-cursor="link"
            onClick={(event) => jumpToSection(event, "#home", "home")}
          >
            <span className="brand__logo-frame">
              <img
                className="brand__logo"
                src={brandAssets.logo}
                alt="Craft Folio"
              />
            </span>
          </Link>

          <nav className="site-nav" aria-label="Điều hướng chính">
            {NAV_ITEMS.map((item) => {
              const isActive =
                activeNav === item.id || (item.hasMenu && villageMenuOpen);

              if (item.hasMenu) {
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`site-nav__link site-nav__trigger ${
                      isActive ? "site-nav__link--active" : ""
                    } ${villageMenuOpen ? "is-open" : ""}`}
                    aria-expanded={villageMenuOpen}
                    aria-haspopup="true"
                    data-cursor="link"
                    onClick={(event) => handleDesktopNavClick(event, item)}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="site-nav__chevron"
                      viewBox="0 0 14 14"
                      aria-hidden="true"
                    >
                      <path d="m3.5 5.2 3.5 3.6 3.5-3.6" />
                    </svg>
                  </button>
                );
              }

              return (
                <a
                  key={item.id}
                  className={
                    isActive
                      ? "site-nav__link site-nav__link--active"
                      : "site-nav__link"
                  }
                  href={item.href || `/${item.targetHash}`}
                  data-cursor="link"
                  onClick={(event) => handleDesktopNavClick(event, item)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="site-header__right">
          <HeaderSearch />

          <div className="site-header__actions">
            {currentUser ? (
              <div className="site-header__user-menu" ref={userMenuRef}>
                <button
                  type="button"
                  className={`site-header__greeting site-header__user-trigger ${
                    userMenuOpen ? "is-open" : ""
                  }`}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                  data-cursor="link"
                  title={`Xin chào, ${currentUser.fullName || currentUser.userName}`}
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                >
                  <span className="site-header__user-dot" aria-hidden="true" />
                  <span className="site-header__greeting-text">
                    Xin chào, {currentUser.fullName || currentUser.userName}
                  </span>
                  <svg
                    className="site-header__user-chevron"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path d="m3.5 5.2 3.5 3.6 3.5-3.6" />
                  </svg>
                </button>

                {userMenuOpen && (
                  <div
                    className="site-header__user-dropdown"
                    role="menu"
                    aria-label="Menu tài khoản"
                  >
                    <Link
                      to="/about-me"
                      role="menuitem"
                      className="site-header__user-item"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Tài khoản của tôi
                    </Link>
                    <button
                      type="button"
                      role="menuitem"
                      className="site-header__user-item site-header__user-item--danger"
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="site-header__auth-link site-header__auth-btn"
                  data-cursor="link"
                  onClick={() => openLoginModal()}
                >
                  Đăng nhập
                </button>
                <span className="site-header__divider" aria-hidden="true">
                  |
                </span>
                <button
                  type="button"
                  className="site-header__auth-link site-header__auth-btn"
                  data-cursor="link"
                  onClick={() => openRegisterModal()}
                >
                  Đăng ký
                </button>
              </>
            )}
          </div>

          <button
            type="button"
            className="site-header__menu-btn"
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu điều hướng"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <DesktopVillageMegaMenu
        isOpen={villageMenuOpen}
        onClose={() => setVillageMenuOpen(false)}
        onJumpToHomeSection={(event) =>
          jumpToSection(event, "#villages", "villages")
        }
      />

      {mobileMenuOpen && (
        <div className="site-header__mobile-drawer">
          <nav className="site-nav--mobile" aria-label="Điều hướng di động">
            {NAV_ITEMS.map((item) => {
              if (item.hasMenu) {
                return (
                  <div className="site-nav__mobile-item" key={item.id}>
                    <button
                      type="button"
                      className={`site-nav__mobile-trigger ${
                        mobileVillagesOpen ? "is-open" : ""
                      }`}
                      aria-expanded={mobileVillagesOpen}
                      onClick={(event) => handleMobileNavClick(event, item)}
                    >
                      <span>{item.label}</span>
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path d="m3.5 5.2 3.5 3.6 3.5-3.6" />
                      </svg>
                    </button>

                    {mobileVillagesOpen && (
                      <MobileVillageAccordion
                        onNavigate={() => {
                          setMobileVillagesOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      />
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href || `/${item.targetHash}`}
                  onClick={(event) => handleMobileNavClick(event, item)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <HeaderSearch
            isMobile
            onNavigateComplete={() => setMobileMenuOpen(false)}
          />

          <div className="site-header__mobile-auth">
            {currentUser ? (
              <>
                <Link
                  to="/about-me"
                  className="site-header__mobile-profile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tài khoản của tôi ({currentUser.fullName || currentUser.userName})
                </Link>
                <button
                  type="button"
                  className="site-header__mobile-auth-btn"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="site-header__mobile-auth-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLoginModal();
                  }}
                >
                  Đăng nhập
                </button>
                <button
                  type="button"
                  className="site-header__mobile-auth-btn site-header__mobile-auth-btn--accent"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openRegisterModal();
                  }}
                >
                  Đăng ký
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
