import React from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

export default function VillageHeroBanner({ village }) {
  const headerImageUrl = resolveMockAsset(village?.headerImage);

  return (
    <section
      className="village-hero"
      aria-labelledby="village-hero-heading"
    >
      <h1 id="village-hero-heading" className="visually-hidden">
        Làng nghề {village?.name || ""}
      </h1>

      {headerImageUrl ? (
        <img
          className="village-hero__img"
          src={headerImageUrl}
          alt={`Banner làng nghề ${village?.name || ""}`}
        />
      ) : (
        <div className="village-hero__fallback">
          <span className="village-hero__fallback-kicker">LÀNG NGHỀ</span>
          <span className="village-hero__fallback-title">
            {village?.name || "Làng nghề truyền thống"}
          </span>
        </div>
      )}
    </section>
  );
}
