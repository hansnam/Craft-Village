import React from "react";
import { resolveMockAsset } from "../../utils/resolveMockAsset.js";

export default function FacilityProjects({ projects = [], onOpenLightbox }) {
  const validProjects = projects.filter(
    (p) => (p?.name && p.name.trim() !== "") || (p?.image && p.image.trim() !== "")
  );

  if (validProjects.length === 0) {
    return null; // Ẩn sạch sẽ theo yêu cầu 4 nếu chưa có nội dung
  }

  return (
    <section id="du-an" className="workshop-section workshop-projects" aria-labelledby="projects-heading">
      <div className="workshop-section__container">
        <header className="workshop-section__header">
          <h2 id="projects-heading" className="workshop-section__title">
            Dự án đã thực hiện
          </h2>
          <p className="workshop-section__subtitle">
            Những đơn hàng và concept tiêu biểu do xưởng trực tiếp sản xuất, gia công
          </p>
        </header>

        <div className="workshop-projects__grid">
          {validProjects.map((proj, index) => {
            const imageUrl = resolveMockAsset(proj.image);

            return (
              <article key={proj.id || index} className="workshop-project-card">
                <div className="workshop-project-card__media">
                  {imageUrl ? (
                    <div
                      className="workshop-project-card__img-frame"
                      onClick={() => onOpenLightbox && onOpenLightbox(imageUrl, proj.name)}
                    >
                      <img
                        src={imageUrl}
                        alt={proj.name || "Dự án xưởng"}
                        className="workshop-project-card__img"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="workshop-project-card__placeholder">
                      <span>{proj.name}</span>
                    </div>
                  )}
                </div>

                <div className="workshop-project-card__content">
                  <h3 className="workshop-project-card__title">
                    {proj.name}
                  </h3>
                  {proj.description && (
                    <p className="workshop-project-card__desc">
                      {proj.description}
                    </p>
                  )}
                  {proj.createdAt && (
                    <span className="workshop-project-card__date">
                      {proj.createdAt}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

