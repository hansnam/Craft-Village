import React from "react";
import { useParams } from "react-router-dom";
import { villages } from "../data/mockData.js";
import VillageHeroBanner from "../components/village/VillageHeroBanner.jsx";
import VillageStorySection from "../components/village/VillageStorySection.jsx";
import VillageFacilitiesSection from "../components/village/VillageFacilitiesSection.jsx";
import VillageProcessSection from "../components/village/VillageProcessSection.jsx";
import VillageNotFound from "../components/village/VillageNotFound.jsx";
import { getVillageBackground } from "../assets/pageBackgrounds.js";

export default function VillageDetailPage() {
  const { id } = useParams();
  const normalizedId = (id || "").trim().toUpperCase();

  const village = Array.isArray(villages)
    ? villages.find(
        (item) => (item?.id || "").toUpperCase() === normalizedId
      )
    : null;

  if (!village) {
    return <VillageNotFound />;
  }

  const villageBg = getVillageBackground(village.id);

  return (
    <div className="village-detail-page">
      <div
        className={`craft-page-bg-pattern ${villageBg.className}`}
        style={{ backgroundImage: `url('${villageBg.url}')` }}
        aria-hidden="true"
      />
      <VillageHeroBanner village={village} />
      <VillageStorySection village={village} />
      <VillageFacilitiesSection village={village} />
      <VillageProcessSection village={village} />
    </div>
  );
}

