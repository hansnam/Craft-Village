import React, { useEffect, useState } from "react";
import { brandAssets } from "../data/homeData.js";

const NAV_ITEMS = [
  { id: "home", label: "Trang chủ", href: "#home" },
  { id: "villages", label: "Làng nghề", href: "#villages" },
  { id: "about", label: "Về chúng tôi", href: "#about" },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
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
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left">
          <a
            className="brand"
            href="#home"
            aria-label="Craft Folio - Trang chủ"
            data-cursor="link"
            onClick={() => setActiveNav("home")}
          >
            <span className="brand__logo-frame">
              <img
                className="brand__logo"
                src={brandAssets.logo}
                alt="Craft Folio"
              />
            </span>
          </a>

          <nav className="site-nav" aria-label="Điều hướng chính">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={
                  activeNav === item.id
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
                href={item.href}
                data-cursor="link"
                onClick={() => setActiveNav(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="site-header__right">
          <form
            className="site-search"
            role="search"
            onSubmit={handleSearch}
          >
            <label className="visually-hidden" htmlFor="header-search-input">
              Tìm kiếm xưởng thủ công hoặc làng nghề
            </label>
            <input
              id="header-search-input"
              type="search"
              placeholder="Tìm kiếm"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit" aria-label="Tìm kiếm" data-cursor="link">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="8.8" cy="8.8" r="5.4" />
                <path d="m12.9 12.9 4.1 4.1" />
              </svg>
            </button>
          </form>

          <div className="site-header__actions">
            <a
              className="site-header__auth-link"
              href="#login"
              data-cursor="link"
            >
              Đăng nhập
            </a>
            <span className="site-header__divider" aria-hidden="true">
              |
            </span>
            <a
              className="site-header__auth-link"
              href="#register"
              data-cursor="link"
            >
              Đăng ký
            </a>
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
                href={item.href}
                onClick={() => {
                  setActiveNav(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <form
            className="site-search site-search--mobile"
            role="search"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Tìm kiếm"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit" aria-label="Tìm kiếm">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="8.8" cy="8.8" r="5.4" />
                <path d="m12.9 12.9 4.1 4.1" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
