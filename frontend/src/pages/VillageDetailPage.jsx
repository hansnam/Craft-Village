import React from "react";
import { useParams } from "react-router-dom";
import { villages } from "../data/mockData.js";
import VillageHeroBanner from "../components/village/VillageHeroBanner.jsx";
import VillageStorySection from "../components/village/VillageStorySection.jsx";
import VillageFacilitiesSection from "../components/village/VillageFacilitiesSection.jsx";
import VillageProcessSection from "../components/village/VillageProcessSection.jsx";
import VillageNotFound from "../components/village/VillageNotFound.jsx";
import { getVillageBackground } from "../assets/pageBackgrounds.js";
import { usePageSeo } from "../utils/seo.js";

export default function VillageDetailPage() {
  const { id } = useParams();
  const normalizedId = (id || "").trim().toUpperCase();

  const village = Array.isArray(villages)
    ? villages.find(
        (item) => (item?.id || "").toUpperCase() === normalizedId
      )
    : null;

  usePageSeo(
    village
      ? {
          title: `Làng nghề ${village.name} | Quy trình & Xưởng sản xuất - Craft Folio`,
          description:
            village.story?.paragraphs?.[0] ||
            village.highlightText ||
            `Khám phá lịch sử, quy trình chế tác và các cơ sở sản xuất tiêu biểu tại làng nghề ${village.name}.`,
          canonicalPath: `/lang-nghe/${village.id}`,
          image: village.headerImage || "",
        }
      : {
          title: "Không tìm thấy làng nghề | Craft Folio",
          description: "Làng nghề bạn đang tìm kiếm không tồn tại trên hệ thống Craft Folio.",
          canonicalPath: normalizedId ? `/lang-nghe/${normalizedId}` : "/",
          noIndex: true,
        }
  );

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

