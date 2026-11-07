import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { craftVillages } from "../data/homeData.js";
import { facilities, products, villages } from "../data/mockData.js";
import {
  resolveFacilityThumbnail,
  resolveMockAsset,
} from "../utils/resolveMockAsset.js";

function normalizeVietnameseChar(ch) {
  return ch
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function normalizeVietnameseText(value) {
  if (!value) return "";
  return Array.from(String(value).normalize("NFC"))
    .map(normalizeVietnameseChar)
    .join("");
}

function HighlightedText({ text, query }) {
  const safeText = String(text || "").normalize("NFC");
  const cleanQuery = normalizeVietnameseText(query).trim();

  if (!cleanQuery) return <>{safeText}</>;

  const chars = Array.from(safeText);
  const normChars = chars.map(normalizeVietnameseChar).join("");
  const queryChars = Array.from(cleanQuery);
  const matchIdx = normChars.indexOf(cleanQuery);

  if (matchIdx === -1) return <>{safeText}</>;

  const before = chars.slice(0, matchIdx).join("");
  const matched = chars.slice(matchIdx, matchIdx + queryChars.length).join("");
  const after = chars.slice(matchIdx + queryChars.length).join("");

  return (
    <>
      {before}
      <mark className="search-suggest__highlight">{matched}</mark>
      {after}
    </>
  );
}

const CATEGORY_LABELS = {
  village: "Làng nghề",
  facility: "Cơ sở SX",
  product: "Sản phẩm",
};

export default function HeaderSearch({
  isMobile = false,
  onNavigateComplete,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const inputId = useId();
  const listboxId = useId();

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const itemRefs = useRef([]);

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Xây dựng chỉ mục tìm kiếm một lần từ mockData.js + ảnh đại diện
  const searchCatalog = useMemo(() => {
    const homeThumbById = new Map(
      (craftVillages || []).map((item) => [item.id, item])
    );
    const villageMap = new Map();
    const facilityMap = new Map();
    const entries = [];

    if (Array.isArray(villages)) {
      villages.forEach((v) => {
        if (!v?.id) return;
        villageMap.set(v.id, v);
        const homeCard = homeThumbById.get(v.id);
        const displayTitle = `Làng nghề ${v.name}`;
        const subtitle =
          homeCard?.location || v?.story?.subtitle || "Làng nghề truyền thống";
        const thumb = homeCard?.image || resolveMockAsset(v.headerImage);

        entries.push({
          key: `village-${v.id}`,
          type: "village",
          title: displayTitle,
          subtitle,
          thumb,
          href: `/lang-nghe/${v.id}`,
          normTitle: normalizeVietnameseText(`${displayTitle} ${v.name}`),
          normMeta: normalizeVietnameseText(
            `${v.id} ${subtitle} ${homeCard?.fullName || ""}`
          ),
        });
      });
    }

    if (Array.isArray(facilities)) {
      facilities.forEach((f) => {
        if (!f?.id) return;
        facilityMap.set(f.id, f);
        const parentVillage = villageMap.get(f.langNgheId);
        const subtitle =
          f.diaChi ||
          (parentVillage ? `Làng nghề ${parentVillage.name}` : "Xưởng thủ công");
        const thumb = resolveFacilityThumbnail(f);

        entries.push({
          key: `facility-${f.id}`,
          type: "facility",
          title: f.name,
          subtitle,
          thumb,
          href: `/co-so/${f.id}`,
          normTitle: normalizeVietnameseText(f.name),
          normMeta: normalizeVietnameseText(
            `${subtitle} ${parentVillage?.name || ""} ${f.tenChuXuong || ""} ${
              f.description || ""
            }`
          ),
        });
      });
    }

    if (Array.isArray(products)) {
      products.forEach((p) => {
        if (!p?.id || !p?.name) return;
        const parentFacility = facilityMap.get(p.coSoSanXuatId);
        const parentVillage = parentFacility
          ? villageMap.get(parentFacility.langNgheId)
          : null;
        const subtitle = parentFacility
          ? `${parentFacility.name}${
              parentVillage ? ` • ${parentVillage.name}` : ""
            }`
          : p.xuatXu || "Sản phẩm thủ công";
        const thumb =
          (Array.isArray(p.images) && p.images.length > 0
            ? resolveMockAsset(p.images[0])
            : "") ||
          (parentFacility ? resolveFacilityThumbnail(parentFacility) : "");
        const targetHref = `/san-pham/${p.id}`;

        entries.push({
          key: `product-${p.id}`,
          type: "product",
          title: p.name,
          subtitle,
          thumb,
          href: targetHref,
          normTitle: normalizeVietnameseText(p.name),
          normMeta: normalizeVietnameseText(
            `${subtitle} ${p.chatLieu || ""} ${p.xuatXu || ""}`
          ),
        });
      });
    }

    return entries;
  }, []);

  const quickVillageChips = useMemo(
    () =>
      Array.isArray(villages)
        ? villages.map((v) => ({
            id: v.id,
            name: v.name,
            href: `/lang-nghe/${v.id}`,
          }))
        : [],
    []
  );

  const suggestions = useMemo(() => {
    const cleanQuery = normalizeVietnameseText(query).trim();
    if (!cleanQuery) return [];

    const typePriority = { village: 0, facility: 1, product: 2 };
    const scored = [];

    for (const entry of searchCatalog) {
      let score = -1;

      if (entry.normTitle.startsWith(cleanQuery)) {
        score = 100 - typePriority[entry.type] * 5;
      } else if (entry.normTitle.includes(` ${cleanQuery}`)) {
        score = 85 - typePriority[entry.type] * 5;
      } else if (entry.normTitle.includes(cleanQuery)) {
        score = 70 - typePriority[entry.type] * 5;
      } else if (entry.normMeta.includes(cleanQuery)) {
        score = 45 - typePriority[entry.type] * 5;
      }

      if (score > 0) {
        scored.push({ entry, score });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8).map((item) => item.entry);
  }, [query, searchCatalog]);

  // Đóng dropdown khi chuyển trang
  useEffect(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, [location.pathname, location.hash]);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handlePointerDownOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () =>
      document.removeEventListener("pointerdown", handlePointerDownOutside);
  }, []);

  // Tự cuộn tới dòng đang active bằng bàn phím
  useEffect(() => {
    if (activeIndex >= 0 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex]);

  const selectSuggestion = (targetHref) => {
    if (!targetHref) return;
    setIsOpen(false);
    setActiveIndex(-1);
    setQuery("");
    if (onNavigateComplete) onNavigateComplete();
    navigate(targetHref);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;

    if (activeIndex >= 0 && suggestions[activeIndex]) {
      selectSuggestion(suggestions[activeIndex].href);
      return;
    }

    if (suggestions.length > 0) {
      selectSuggestion(suggestions[0].href);
    }
  };

  const handleInputChange = (event) => {
    const nextVal = event.target.value;
    setQuery(nextVal);
    setIsOpen(nextVal.trim().length > 0);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (!isOpen || suggestions.length === 0) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? suggestions.length - 1 : prev - 1
      );
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div
      className={
        isMobile
          ? "site-search-wrap site-search-wrap--mobile"
          : "site-search-wrap"
      }
      ref={wrapperRef}
    >
      <form
        className={isMobile ? "site-search site-search--mobile" : "site-search"}
        role="search"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className="visually-hidden" htmlFor={inputId}>
          Tìm kiếm làng nghề, cơ sở sản xuất hoặc sản phẩm thủ công
        </label>
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          inputMode="search"
          placeholder="Tìm kiếm"
          value={query}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 && suggestions[activeIndex]
              ? `${listboxId}-opt-${activeIndex}`
              : undefined
          }
          onChange={handleInputChange}
          onFocus={() => {
            if (query.trim().length > 0) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
        />

        {query && (
          <button
            type="button"
            className="site-search__clear"
            aria-label="Xóa từ khóa tìm kiếm"
            data-cursor="link"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
              setActiveIndex(-1);
              inputRef.current?.focus();
            }}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
            </svg>
          </button>
        )}

        <button type="submit" aria-label="Tìm kiếm" data-cursor="link">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="8.8" cy="8.8" r="5.4" />
            <path d="m12.9 12.9 4.1 4.1" />
          </svg>
        </button>
      </form>

      {showDropdown && (
        <div className="search-suggest" id={listboxId} role="listbox">
          {suggestions.length > 0 ? (
            <>
              <div className="search-suggest__header">
                <span>Gợi ý tìm kiếm</span>
                <span className="search-suggest__count">
                  {suggestions.length} kết quả
                </span>
              </div>

              <ul className="search-suggest__list">
                {suggestions.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <li
                      key={item.key}
                      id={`${listboxId}-opt-${idx}`}
                      ref={(el) => {
                        itemRefs.current[idx] = el;
                      }}
                      role="option"
                      aria-selected={isActive}
                      className={
                        isActive
                          ? "search-suggest__item search-suggest__item--active"
                          : "search-suggest__item"
                      }
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseDown={(event) => {
                        // Tránh mất focus input trước khi click hoàn tất
                        event.preventDefault();
                      }}
                      onClick={() => selectSuggestion(item.href)}
                      data-cursor="link"
                    >
                      <span className="search-suggest__thumb">
                        {item.thumb ? (
                          <img src={item.thumb} alt="" loading="lazy" />
                        ) : (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
                            <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
                          </svg>
                        )}
                      </span>

                      <span className="search-suggest__info">
                        <span className="search-suggest__title">
                          <HighlightedText text={item.title} query={query} />
                        </span>
                        <span className="search-suggest__subtitle">
                          {item.subtitle}
                        </span>
                      </span>

                      <span
                        className={`search-suggest__badge search-suggest__badge--${item.type}`}
                      >
                        {CATEGORY_LABELS[item.type]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="search-suggest__empty">
              <p className="search-suggest__empty-title">
                Không tìm thấy kết quả cho <strong>“{query.trim()}”</strong>
              </p>
              <p className="search-suggest__empty-hint">
                Khám phá nhanh các làng nghề tiêu biểu:
              </p>
              <div className="search-suggest__chips">
                {quickVillageChips.map((chip) => (
                  <button
                    key={chip.id}
                    type="button"
                    className="search-suggest__chip"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => selectSuggestion(chip.href)}
                    data-cursor="link"
                  >
                    {chip.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
