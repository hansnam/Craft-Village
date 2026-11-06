import React, { useEffect } from "react";

export default function ImageLightboxModal({ isOpen, imageUrl, title, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      className="workshop-lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Phóng to hình ảnh"}
    >
      <div className="workshop-lightbox__backdrop" />

      <button
        type="button"
        className="workshop-lightbox__close"
        onClick={onClose}
        aria-label="Đóng phóng to"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="workshop-lightbox__content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title || "Hình ảnh chi tiết"}
          className="workshop-lightbox__image"
        />
        {title && <p className="workshop-lightbox__caption">{title}</p>}
      </div>
    </div>
  );
}

