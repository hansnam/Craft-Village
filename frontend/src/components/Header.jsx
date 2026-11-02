import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { brandAssets } from "../data/homeData.js";
import HeaderSearch from "./HeaderSearch.jsx";

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ", targetHash: "#home" },
  { id: "villages", label: "Làng nghề", targetHash: "#villages" },
  { id: "about", label: "Về chúng tôi", targetHash: "#about" },
];

export default function Header() {
  const { currentUser, openLoginModal, openRegisterModal, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

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

  const handleNavClick = (event, item) => {
    event.preventDefault();
    setActiveNav(item.id);
    setMobileMenuOpen(false);

    if (item.id === "home") {
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
      const sectionEl = document.getElementById(item.targetHash.slice(1));
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/${item.targetHash}`);
    }
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left">
          <Link
            className="brand"
            to="/"
            aria-label="Craft Folio - Trang chủ"
            data-cursor="link"
            onClick={(event) => handleNavClick(event, NAV_ITEMS[0])}
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
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={
                  activeNav === item.id
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
                href={`/${item.targetHash}`}
                data-cursor="link"
                onClick={(event) => handleNavClick(event, item)}
              >
                {item.label}
              </a>
            ))}
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

      {mobileMenuOpen && (
        <div className="site-header__mobile-drawer">
          <nav className="site-nav--mobile" aria-label="Điều hướng di động">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`/${item.targetHash}`}
                onClick={(event) => handleNavClick(event, item)}
              >
                {item.label}
              </a>
            ))}
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
