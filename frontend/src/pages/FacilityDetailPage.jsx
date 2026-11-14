import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  facilities,
  villages,
  products,
  capacities,
  projects,
  reviews,
} from "../data/mockData.js";
import VillageNotFound from "../components/village/VillageNotFound.jsx";
import FacilityHero from "../components/facility/FacilityHero.jsx";
import FacilityNav from "../components/facility/FacilityNav.jsx";
import FacilityProducts from "../components/facility/FacilityProducts.jsx";
import FacilityConsultation from "../components/facility/FacilityConsultation.jsx";
import FacilityStory from "../components/facility/FacilityStory.jsx";
import FacilityCapacities from "../components/facility/FacilityCapacities.jsx";
import FacilityProjects from "../components/facility/FacilityProjects.jsx";
import FacilityReviews from "../components/facility/FacilityReviews.jsx";
import FacilityConnectModal from "../components/facility/FacilityConnectModal.jsx";
import ProductDetailModal from "../components/facility/ProductDetailModal.jsx";
import ImageLightboxModal from "../components/facility/ImageLightboxModal.jsx";

export default function FacilityDetailPage() {
  const { facilityId } = useParams();
  const normalizedId = (facilityId || "").trim().toUpperCase();

  // 1. Tìm thông tin cơ sở sản xuất
  const facility = Array.isArray(facilities)
    ? facilities.find(
        (item) => (item?.id || "").toUpperCase() === normalizedId
      )
    : null;

  // Quản lý Modal & Lightbox
  const [activeSection, setActiveSection] = useState("san-pham");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageUrl: "",
    title: "",
  });

  if (!facility) {
    return (
      <VillageNotFound
        title="Không tìm thấy cơ sở sản xuất"
        description="Cơ sở sản xuất bạn đang tìm kiếm không tồn tại hoặc đường dẫn không hợp lệ."
      />
    );
  }

  // Làng nghề cha
  const parentVillage = Array.isArray(villages)
    ? villages.find((v) => v?.id === facility?.langNgheId)
    : null;

  // Lọc dữ liệu liên quan đến cơ sở này
  const facilityProducts = Array.isArray(products)
    ? products.filter((p) => p.coSoSanXuatId === facility.id)
    : [];

  const facilityCapacities = Array.isArray(capacities)
    ? capacities.filter((c) => c.coSoSanXuatId === facility.id)
    : [];

  const facilityProjects = Array.isArray(projects)
    ? projects.filter((p) => p.coSoSanXuatId === facility.id)
    : [];

  const facilityReviews = Array.isArray(reviews)
    ? reviews.filter((r) => r.coSoSanXuatId === facility.id)
    : [];

  const showCapacities =
    facility.id !== "GBT_HAC" && facilityCapacities.length > 0;

  const handleOpenLightbox = (imageUrl, title) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title: title || facility.name,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox({ isOpen: false, imageUrl: "", title: "" });
  };

  return (
    <div className={`workshop-detail-page${facility.id === "MTD_MTDVQ" ? " workshop-detail-page--viet-quang" : ""}`}>
      {/* Breadcrumb điều hướng */}
      <nav className="workshop-breadcrumb" aria-label="Đường dẫn trang">
        <div className="workshop-breadcrumb__container">
          <Link to="/" className="workshop-breadcrumb__link">
            Trang chủ
          </Link>
          <span className="workshop-breadcrumb__sep">/</span>

          {parentVillage ? (
            <>
              <Link
                to={`/lang-nghe/${parentVillage.id}`}
                className="workshop-breadcrumb__link"
              >
                Làng nghề {parentVillage.name}
              </Link>
              <span className="workshop-breadcrumb__sep">/</span>
            </>
          ) : (
            <>
              <span className="workshop-breadcrumb__text">Cơ sở sản xuất</span>
              <span className="workshop-breadcrumb__sep">/</span>
            </>
          )}

          <span className="workshop-breadcrumb__current" aria-current="page">
            {facility.name}
          </span>
        </div>
      </nav>

      {/* 1. Header (Hero) với 5 ô chỉ số số chạy từ 0 đến đích mỗi lần lướt tới */}
      <FacilityHero
        facility={facility}
        onOpenConnect={() => setIsConnectModalOpen(true)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Thanh điều hướng nội dung: Sản phẩm, Câu chuyện, Năng lực, Đánh giá */}
      <FacilityNav
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        hasCapacities={showCapacities}
      />

      {/* 2. Danh sách Sản phẩm */}
      <FacilityProducts
        facility={facility}
        products={facilityProducts}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Tư vấn thiết kế & gửi yêu cầu (ngay bên dưới Sản phẩm) */}
      <FacilityConsultation
        facility={facility}
        onOpenConnect={() => setIsConnectModalOpen(true)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 3. Câu chuyện cơ sở */}
      <FacilityStory
        facility={facility}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 4. Năng lực sản xuất */}
      {showCapacities && (
        <FacilityCapacities
          capacities={facilityCapacities}
          facilityName={facility.name}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* 5. Dự án đã thực hiện (chỉ hiển thị nếu có nội dung) */}
      <FacilityProjects
        projects={facilityProjects}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* 6. Khách hàng đánh giá */}
      <FacilityReviews
        reviews={facilityReviews}
        facilityName={facility.name}
      />

      {/* Modal chi tiết sản phẩm */}
      <ProductDetailModal
        isOpen={Boolean(selectedProduct)}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Modal gửi yêu cầu kết nối */}
      <FacilityConnectModal
        isOpen={isConnectModalOpen}
        facility={facility}
        onClose={() => setIsConnectModalOpen(false)}
      />

      {/* Modal phóng to ảnh Lightbox */}
      <ImageLightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}

