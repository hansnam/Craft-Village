import React, { useState, useEffect } from "react";

export default function FacilityNav({
  activeSection,
  onSelectSection,
  hasCapacities = true,
}) {
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { id: "san-pham", label: "Sản phẩm" },
    { id: "cau-chuyen", label: "Câu chuyện" },
    ...(hasCapacities ? [{ id: "nang-luc-san-xuat", label: "Năng lực sản xuất" }] : []),
    { id: "danh-gia", label: "Đánh giá" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 480);

      const threshold = 160;
      let currentId = navItems[0]?.id || "san-pham";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          currentId = item.id;
        }
      }
      onSelectSection((prev) => (prev === currentId ? prev : currentId));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasCapacities, onSelectSection]);

  const handleClick = (e, id) => {
    e.preventDefault();
    onSelectSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`workshop-subnav ${isSticky ? "workshop-subnav--sticky" : ""}`}
      aria-label="Điều hướng nội dung cơ sở sản xuất"
    >
      <div className="workshop-subnav__container">
        <ul className="workshop-subnav__list" role="tablist">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="workshop-subnav__item" role="presentation">
                <a
                  href={`#${item.id}`}
                  role="tab"
                  aria-selected={isActive}
                  className={`workshop-subnav__link ${isActive ? "workshop-subnav__link--active" : ""}`}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  {item.label}
                  {isActive && <span className="workshop-subnav__indicator" />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

