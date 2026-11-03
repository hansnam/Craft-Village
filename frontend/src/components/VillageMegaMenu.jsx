import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { craftVillages } from "../data/homeData.js";
import { facilities, villages } from "../data/mockData.js";
import { resolveMockAsset } from "../utils/resolveMockAsset.js";

const UPPERCASE_TOKENS = new Set(["HTX", "CS", "CLB", "TNHH"]);

function formatFacilityName(rawName) {
  if (!rawName) return "";
  return String(rawName)
    .trim()
    .split(/\s+/)
    .map((word) => {
      const upper = word.toUpperCase();
      if (UPPERCASE_TOKENS.has(upper)) return upper;
      const lower = word.toLocaleLowerCase("vi-VN");
      return lower.charAt(0).toLocaleUpperCase("vi-VN") + lower.slice(1);
    })
    .join(" ");
}

export function useVillageDirectory() {
  return useMemo(() => {
    const homeCardById = new Map(
      (craftVillages || []).map((item) => [item.id, item])
    );

    if (!Array.isArray(villages)) return [];

    return villages.map((village) => {
      const homeCard = homeCardById.get(village.id);
      const villageFacilities = Array.isArray(facilities)
        ? facilities
          .filter((f) => f?.langNgheId === village.id)
          .map((f) => ({
            id: f.id,
            displayName: formatFacilityName(f.name),
            rawName: f.name,
            href: `/co-so/${f.id}`,
          }))
        : [];

      const rawDisplayName = village.name || homeCard?.shortName || village.id;
      const displayName =
        rawDisplayName.charAt(0).toLocaleUpperCase("vi-VN") +
        rawDisplayName.slice(1);

      return {
        id: village.id,
        name: displayName,
        location: homeCard?.location || "Làng nghề truyền thống",
        thumb: homeCard?.image || resolveMockAsset(village.headerImage),
        href: `/lang-nghe/${village.id}`,
        facilities: villageFacilities,
      };
    });
  }, []);
}

export function DesktopVillageMegaMenu({
  isOpen,
  onClose,
  onJumpToHomeSection,
}) {
  const location = useLocation();
  const directory = useVillageDirectory();

  if (!isOpen) return null;

  return (
    <div
      className="village-mega-menu"
      role="region"
      aria-label="Danh mục Làng nghề và Cơ sở sản xuất"
    >
      <div className="village-mega-menu__header">
        <div className="village-mega-menu__intro">
          <span className="village-mega-menu__kicker">
            Danh mục làng nghề truyền thống
          </span>
        </div>

        <a
          href="/#villages"
          className="village-mega-menu__overview-link"
          data-cursor="link"
          onClick={(event) => {
            onJumpToHomeSection(event);
            onClose();
          }}
        >
          <span>Xem tất cả trên Trang chủ</span>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10" />
            <path d="m9 4 4 4-4 4" />
          </svg>
        </a>
      </div>

      <div className="village-mega-menu__grid">
        {directory.map((village) => {
          const isVillageActive =
            location.pathname.toLowerCase() === village.href.toLowerCase();

          return (
            <div className="village-mega-menu__col" key={village.id}>
              <Link
                to={village.href}
                className={`village-mega-menu__village-link ${isVillageActive
                    ? "village-mega-menu__village-link--active"
                    : ""
                  }`}
                data-cursor="link"
                onClick={onClose}
              >
                {village.thumb && (
                  <span className="village-mega-menu__thumb">
                    <img src={village.thumb} alt="" loading="lazy" />
                  </span>
                )}
                <span className="village-mega-menu__village-meta">
                  <span className="village-mega-menu__village-name">
                    {village.name}
                    <svg
                      className="village-mega-menu__village-arrow"
                      viewBox="0 0 14 14"
                      aria-hidden="true"
                    >
                      <path d="M3.8 10.2 10.2 3.8" />
                      <path d="M5.2 3.8h5v5" />
                    </svg>
                  </span>
                  <span className="village-mega-menu__village-count">
                    {village.facilities.length} cơ sở sản xuất
                  </span>
                </span>
              </Link>

              <ul className="village-mega-menu__facility-list">
                {village.facilities.map((facility) => {
                  const isFacilityActive =
                    location.pathname.toLowerCase() ===
                    facility.href.toLowerCase();

                  return (
                    <li key={facility.id}>
                      <Link
                        to={facility.href}
                        className={`village-mega-menu__facility-link ${isFacilityActive
                            ? "village-mega-menu__facility-link--active"
                            : ""
                          }`}
                        title={facility.rawName}
                        data-cursor="link"
                        onClick={onClose}
                      >
                        <span
                          className="village-mega-menu__bullet"
                          aria-hidden="true"
                        />
                        <span>{facility.displayName}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MobileVillageAccordion({ onNavigate }) {
  const location = useLocation();
  const directory = useVillageDirectory();
  const [expandedVillageId, setExpandedVillageId] = useState(
    directory[0]?.id || null
  );

  return (
    <div className="mobile-village-menu">
      {directory.map((village) => {
        const isExpanded = expandedVillageId === village.id;
        const isVillageActive =
          location.pathname.toLowerCase() === village.href.toLowerCase();

        return (
          <div className="mobile-village-menu__group" key={village.id}>
            <div className="mobile-village-menu__row">
              <Link
                to={village.href}
                className={`mobile-village-menu__village-link ${isVillageActive
                    ? "mobile-village-menu__village-link--active"
                    : ""
                  }`}
                onClick={onNavigate}
              >
                {village.thumb && (
                  <span className="mobile-village-menu__thumb">
                    <img src={village.thumb} alt="" loading="lazy" />
                  </span>
                )}
                <span className="mobile-village-menu__village-text">
                  <span className="mobile-village-menu__village-name">
                    {village.name}
                  </span>
                  <span className="mobile-village-menu__village-sub">
                    {village.facilities.length} cơ sở sản xuất
                  </span>
                </span>
              </Link>

              <button
                type="button"
                className={`mobile-village-menu__expand-btn ${isExpanded ? "is-expanded" : ""
                  }`}
                aria-expanded={isExpanded}
                aria-label={
                  isExpanded
                    ? `Thu gọn cơ sở của ${village.name}`
                    : `Xem cơ sở của ${village.name}`
                }
                onClick={() =>
                  setExpandedVillageId((prev) =>
                    prev === village.id ? null : village.id
                  )
                }
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="m4 6 4 4 4-4" />
                </svg>
              </button>
            </div>

            {isExpanded && village.facilities.length > 0 && (
              <ul className="mobile-village-menu__facilities">
                {village.facilities.map((facility) => {
                  const isFacilityActive =
                    location.pathname.toLowerCase() ===
                    facility.href.toLowerCase();

                  return (
                    <li key={facility.id}>
                      <Link
                        to={facility.href}
                        className={`mobile-village-menu__facility-link ${isFacilityActive
                            ? "mobile-village-menu__facility-link--active"
                            : ""
                          }`}
                        onClick={onNavigate}
                      >
                        <span
                          className="mobile-village-menu__dot"
                          aria-hidden="true"
                        />
                        <span>{facility.displayName}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

