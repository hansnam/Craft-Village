import React, { useState, useRef, useEffect } from "react";

/**
 * Mục 5.5: Hiệu ứng "Bàn xoay gốm" & Ánh sáng men bóng
 * (360° Interactive Artisan Turntable & Glaze Sheen Reflection)
 * Cho phép kéo chuột trái/phải để xoay góc nhìn sản phẩm như bàn xoay gốm thủ công
 * và lướt ánh sáng bóng men (specular glaze sheen) khi di chuyển con trỏ.
 */
export default function ArtisanTurntableShowcase({
  images = [],
  activeIndex = 0,
  onIndexChange,
  productName = "Sản phẩm thủ công",
  facilityName = "",
  onOpenLightbox,
  placeholder,
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const startXRef = useRef(0);
  const hasMovedRef = useRef(false);

  const currentImage = images[activeIndex] || null;
  const hasMultipleImages = images.length > 1;

  // Xử lý hiệu ứng ánh sáng bóng men (Glaze Sheen) theo tọa độ chuột
  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    const yPct = Math.min(Math.max((y / rect.height) * 100, 0), 100);

    // Tính độ nghiêng 3D nhẹ (perspective tilt)
    const tiltY = ((xPct - 50) / 50) * 6; // max 6 deg
    const tiltX = -((yPct - 50) / 50) * 6; // max 6 deg

    setTilt({ x: tiltX, y: tiltY });

    containerRef.current.style.setProperty("--sheen-x", `${xPct.toFixed(1)}%`);
    containerRef.current.style.setProperty("--sheen-y", `${yPct.toFixed(1)}%`);
    containerRef.current.style.setProperty("--sheen-opacity", "1");

    // Xử lý kéo xoay bàn xoay gốm khi đang ấn giữ chuột
    if (isDragging) {
      const deltaX = e.clientX - startXRef.current;
      if (Math.abs(deltaX) > 5) {
        hasMovedRef.current = true;
      }
      setDragOffset(deltaX);

      // Ngưỡng bước xoay ảnh (kéo 48px sẽ chuyển sang góc chụp tiếp theo)
      const threshold = 48;
      if (Math.abs(deltaX) >= threshold && hasMultipleImages && onIndexChange) {
        if (deltaX < 0) {
          // Kéo sang trái -> Xoay sang góc kế tiếp
          onIndexChange((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        } else {
          // Kéo sang phải -> Xoay về góc trước
          onIndexChange((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        }
        startXRef.current = e.clientX;
        setDragOffset(0);
      }
    }
  };

  const handlePointerDown = (e) => {
    if (e.button !== 0) return; // Chỉ nhận click chuột trái
    setIsDragging(true);
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    setDragOffset(0);
    if (containerRef.current) {
      containerRef.current.setPointerCapture?.(e.pointerId);
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset(0);

    // Nếu người dùng chỉ click nhanh mà không kéo -> Mở Lightbox xem ảnh to
    if (!hasMovedRef.current && currentImage && onOpenLightbox) {
      onOpenLightbox(currentImage.url, currentImage.alt || productName);
    }
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
    if (containerRef.current) {
      containerRef.current.style.setProperty("--sheen-opacity", "1");
    }
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    setDragOffset(0);
    setTilt({ x: 0, y: 0 });
    if (containerRef.current) {
      containerRef.current.style.setProperty("--sheen-opacity", "0");
    }
  };

  return (
    <div
      ref={containerRef}
      className={`artisan-turntable ${isDragging ? "is-dragging" : ""} ${
        isHovered ? "is-hovered" : ""
      }`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      data-cursor="artisan"
      title={
        hasMultipleImages
          ? "Kéo chuột trái-phải để xoay 360° hoặc nhấp để phóng to"
          : "Nhấp để phóng to ảnh"
      }
    >
      {/* 3D Tilt Wrapper */}
      <div
        className="artisan-turntable__stage"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${
            tilt.y + dragOffset * 0.12
          }deg)`,
          transition: isDragging
            ? "transform 50ms linear"
            : "transform 260ms cubic-bezier(0.2, 0.8, 0.4, 1)",
        }}
      >
        {currentImage ? (
          <>
            <img
              src={currentImage.url}
              alt={currentImage.alt || productName}
              className="artisan-turntable__img"
              draggable={false}
            />

            {/* Lớp phủ phản chiếu ánh sáng men bóng (Glaze Sheen Reflection) */}
            <div
              className="artisan-turntable__sheen-reflection"
              aria-hidden="true"
            />
            {/* Vệt sáng lướt men gốm kim cương (Glaze Highlight Streak) */}
            <div
              className="artisan-turntable__glaze-streak"
              aria-hidden="true"
            />
          </>
        ) : (
          placeholder || (
            <div className="artisan-turntable__placeholder">
              <span>{productName}</span>
            </div>
          )
        )}
      </div>

      {/* Huy hiệu Bàn xoay gốm 360° & Ánh men */}
      <div className="artisan-turntable__badge" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          className="artisan-turntable__badge-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          <path d="M21 3v6h-6" />
        </svg>
        <span>
          {hasMultipleImages
            ? "Bàn xoay 360° · Kéo để xoay"
            : "Men bóng thủ công · Di chuột cảm nhận"}
        </span>
      </div>

      {/* Nút phóng to Lightbox ở góc */}
      <div className="artisan-turntable__zoom-btn" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>
    </div>
  );
}

