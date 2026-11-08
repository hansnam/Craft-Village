import React from "react";

/**
 * Mục 5.1: Hiệu ứng "Bề mặt gốm mộc" (Tactile Organic Grain Texture)
 * Phủ một lớp CSS Noise SVG siêu nhẹ (opacity: 0.036, pointer-events: none)
 * lên toàn bộ nền giấy kem mang cảm giác giấy dó cổ và chất đất mộc Bát Tràng.
 */
export default function TactileOrganicGrain() {
  return (
    <div
      className="tactile-grain-overlay"
      aria-hidden="true"
      role="presentation"
    />
  );
}
