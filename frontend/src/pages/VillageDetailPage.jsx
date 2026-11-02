import React from "react";
import { useParams } from "react-router-dom";
import { villages } from "../data/mockData.js";
import VillageHeroBanner from "../components/village/VillageHeroBanner.jsx";
import VillageStorySection from "../components/village/VillageStorySection.jsx";
import VillageFacilitiesSection from "../components/village/VillageFacilitiesSection.jsx";
import VillageProcessSection from "../components/village/VillageProcessSection.jsx";
import VillageNotFound from "../components/village/VillageNotFound.jsx";

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

  return (
    <div className="village-detail-page">
      <VillageHeroBanner village={village} />
      <VillageStorySection village={village} />
      <VillageFacilitiesSection village={village} />
      <VillageProcessSection village={village} />
    </div>
  );
}

