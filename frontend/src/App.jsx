import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer.jsx";

function CraftRibbon() {
  return (
    <svg
      className="hero__ribbon-art"
      viewBox="0 0 1600 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbon-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#d8c88c" stopOpacity=".12" />
          <stop offset="48%" stopColor="#a9c5b5" stopOpacity=".56" />
          <stop offset="100%" stopColor="#d8c88c" stopOpacity=".18" />
        </linearGradient>
        <linearGradient id="ribbon-highlight" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#b5cfc0" stopOpacity=".08" />
          <stop offset="55%" stopColor="#e9dfbc" stopOpacity=".5" />
          <stop offset="100%" stopColor="#95b5a9" stopOpacity=".12" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path
          d="M-80 120 C180 -10 280 250 530 125 S870 15 1050 135 S1380 275 1680 70"
          stroke="url(#ribbon-gradient)"
          strokeWidth="19"
        />
        <path
          d="M-70 145 C175 28 285 275 530 150 S870 42 1050 160 S1380 298 1680 98"
          stroke="url(#ribbon-highlight)"
          strokeWidth="2"
        />
        <path
          d="M-60 230 C160 365 305 75 555 225 S900 355 1080 205 S1390 80 1660 250"
          stroke="url(#ribbon-gradient)"
          strokeWidth="11"
        />
        <path
          d="M-90 310 C170 160 310 440 585 300 S930 180 1115 315 S1400 445 1690 275"
          stroke="url(#ribbon-highlight)"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

export default function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (motionPreference.matches) return undefined;

    const updatePointer = (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      hero.style.setProperty("--bg-x", `${x * -16}px`);
      hero.style.setProperty("--bg-y", `${y * -12}px`);
      hero.style.setProperty("--ribbon-x", `${x * 22}px`);
      hero.style.setProperty("--ribbon-y", `${y * 17}px`);
      hero.style.setProperty("--ribbon-tilt", `${x * 1.2}deg`);
      hero.style.setProperty("--ribbon-back-x", `${x * -11}px`);
      hero.style.setProperty("--ribbon-back-y", `${y * -8.5}px`);
      hero.style.setProperty("--ribbon-back-tilt", `${x * -0.6}deg`);
    };

    const resetPointer = () => {
      hero.style.setProperty("--bg-x", "0px");
      hero.style.setProperty("--bg-y", "0px");
      hero.style.setProperty("--ribbon-x", "0px");
      hero.style.setProperty("--ribbon-y", "0px");
      hero.style.setProperty("--ribbon-tilt", "0deg");
      hero.style.setProperty("--ribbon-back-x", "0px");
      hero.style.setProperty("--ribbon-back-y", "0px");
      hero.style.setProperty("--ribbon-back-tilt", "0deg");
    };

    const updateScroll = () => {
      hero.style.setProperty(
        "--scroll-y",
        `${Math.min(window.scrollY * 0.18, 110)}px`,
      );
    };

    hero.addEventListener("pointermove", updatePointer);
    hero.addEventListener("pointerleave", resetPointer);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      hero.removeEventListener("pointermove", updatePointer);
      hero.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Craft Folk - trang chủ">
          <span className="brand__mark" aria-hidden="true">
            C
          </span>
          <span className="brand__name">
            Craft<span>Folk</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Điều hướng chính">
          <a className="site-nav__link site-nav__link--active" href="#home">
            Trang chủ
          </a>
          <a className="site-nav__link" href="#crafts">
            Làng nghề
          </a>
          <a className="site-nav__link" href="#about">
            Về chúng tôi
          </a>
        </nav>

        <form
          className="site-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="site-search">
            Tìm kiếm làng nghề
          </label>
          <input id="site-search" type="search" placeholder="Tìm kiếm" />
          <button type="submit" aria-label="Tìm kiếm">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="8.7" cy="8.7" r="5.5" />
              <path d="m13 13 4 4" />
            </svg>
          </button>
        </form>

        <div className="site-header__actions">
          <a className="site-header__login" href="#login">
            Đăng nhập
          </a>
          <a className="site-header__signup" href="#register">
            Đăng ký
          </a>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          ref={heroRef}
          aria-labelledby="hero-title"
        >
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__ribbon hero__ribbon--back" aria-hidden="true">
            <CraftRibbon />
          </div>
          <div className="hero__ribbon hero__ribbon--front" aria-hidden="true">
            <CraftRibbon />
          </div>
          <div className="hero__content">
            <h1 className="hero__title" id="hero-title">
              Kết nối xưởng thủ công với khách hàng doanh nghiệp
            </h1>
            <p className="hero__description">
              Số hóa thông tin - thể hiện năng lực - mở rộng kết nối
            </p>
          </div>
        </section>

        <section className="welcome" id="crafts" aria-labelledby="welcome-title">
          <span className="welcome__eyebrow">Di sản trong từng bàn tay</span>
          <h2 id="welcome-title">Nơi tinh hoa làng nghề gặp gỡ tương lai</h2>
          <p>
            Khám phá những xưởng thủ công, câu chuyện và giá trị văn hóa được
            gìn giữ qua nhiều thế hệ.
          </p>
          <a className="welcome__link" id="about" href="#footer">
            Tìm hiểu về Craft Folk <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
