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
  { id: "home", label: "Trang chủ", targetHash: "#home" },
  { id: "villages", label: "Làng nghề", targetHash: "#villages", hasMenu: true },
  { id: "about", label: "Về chúng tôi", targetHash: "#about" },
];

export default function Header() {
  const { currentUser, openLoginModal, openRegisterModal, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [villageMenuOpen, setVillageMenuOpen] = useState(false);
  const [mobileVillagesOpen, setMobileVillagesOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
    setVillageMenuOpen(false);
    setMobileVillagesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!villageMenuOpen) return undefined;

    const handlePointerDownOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setVillageMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setVillageMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [villageMenuOpen]);

  useEffect(() => {
    if (
      location.pathname.startsWith("/lang-nghe") ||
      location.pathname.startsWith("/co-so")
    ) {
      setActiveNav("villages");
      return undefined;
    }

    const updateActiveOnScroll = () => {
      const scrollPos = window.scrollY + 180;
      const villagesEl = document.getElementById("villages");
      const aboutEl = document.getElementById("about");

      if (villagesEl && scrollPos >= villagesEl.offsetTop) {
        setActiveNav("villages");
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveNav("about");
      } else {
        setActiveNav("home");
      }
    };

    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    updateActiveOnScroll();
    return () => window.removeEventListener("scroll", updateActiveOnScroll);
  }, [location.pathname]);

  const jumpToSection = (event, targetHash, navId) => {
    event.preventDefault();
    setActiveNav(navId);
    setVillageMenuOpen(false);
    setMobileMenuOpen(false);

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
      const sectionEl = document.getElementById(targetHash.slice(1));
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/${targetHash}`);
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
                  href={`/${item.targetHash}`}
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
              <>
                <span className="site-header__greeting">
                  <span className="site-header__user-dot" aria-hidden="true" />
                  <span>Xin chào, {currentUser.userName}</span>
                </span>
                <span className="site-header__divider" aria-hidden="true">
                  |
                </span>
                <button
                  type="button"
                  className="site-header__auth-link site-header__auth-btn"
                  data-cursor="link"
                  onClick={logout}
                >
                  Đăng xuất
                </button>
              </>
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
                  href={`/${item.targetHash}`}
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
        </div>
      )}
    </header>
  );
}
