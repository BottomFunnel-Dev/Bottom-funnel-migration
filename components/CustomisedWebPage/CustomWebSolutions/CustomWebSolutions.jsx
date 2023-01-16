import React from "react";
import styles from "./CustomWebSolutions.module.css";

export const CustomWebSolutions = () => {
  const cardsData = [
    {
      title: "Cloud-based Dev",
      body: "Accelerate your development process by maximizing your use of cloud services.",
      image: "Images/customWebPhotos/cloud-computing.png",
    },
    {
      title: "Full-cycle Development",
      body: "It includes project planning, requirements analysis, system design, implementation, testing and deployment.",
      image: "Images/customWebPhotos/app-development.png",
    },
    {
      title: "Consolidation & Integration",
      body: "We combine potential tools, innovative technology and quality design.",
      image: "Images/customWebPhotos/integration.png",
    },
    {
      title: "Agile & Adaptive",
      body: "We are one of the leading web development agencies and have a proven track record with agile models.",
      image: "Images/customWebPhotos/agile.png",
    },
    {
      title: "Maintenance & Support",
      body: "After your site is up and running, we are here when you need us.",
      image: "Images/customWebPhotos/maintenance.png",
    },
    {
      title: "Quality Assurance",
      body: "Quality is of the utmost importance to us. Every website we develop goes through a rigorous error correction process.",
      image: "Images/customWebPhotos/badge.png",
    },
  ];
  return (
    <div className={styles.CustomWebSolutionsContainer}>
      <div className={styles.CustomWebSolutionsBackgroundRectangle}>
        <img
          src="Images/MLPhotos/rectangle-top.png"
          alt="Background image rectangle top"
        />
        <img
          src="Images/MLPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.CustomWebSolutionsMain}>
        <h1>
          Bottom Funnel Customised <span>Web</span> Solutions
        </h1>
        <div className={styles.CustomWebSolutionsHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.CustomWebSolutionsCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.CustomWebSolutionsCardsMain}>
                <div>
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
