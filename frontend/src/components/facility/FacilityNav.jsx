import React, { useState, useEffect } from "react";

export default function FacilityNav({ activeSection, onSelectSection, hasProjects = true }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 480);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "san-pham", label: "Sản phẩm" },
    { id: "cau-chuyen", label: "Câu chuyện" },
    { id: "nang-luc-san-xuat", label: "Năng lực sản xuất" },
    ...(hasProjects ? [{ id: "du-an", label: "Dự án đã thực hiện" }] : []),
    { id: "danh-gia", label: "Đánh giá" },
  ];

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

