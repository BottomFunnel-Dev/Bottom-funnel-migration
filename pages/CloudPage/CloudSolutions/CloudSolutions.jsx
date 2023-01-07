import React from "react";
import styles from "./CloudSolutions.module.css";

export const CloudSolutions = () => {
  const cardsData = [
    {
      title: "Cloud adoption strategy",
      body: "Plan, prioritize, and schedule IT infrastructure migrations, cloud-native app development, and cloud data warehouses.",
      image: "Images/cloudPhotos/chatting-face.png",
    },
    {
      title: "Feasibility assissment",
      body: "Cloud initiatives that bring TCO and ROI estimates to the cloud.",
      image: "Images/cloudPhotos/equality.png",
    },
    {
      title: "Consulitations for the C-suite",
      body: "Understand the benefits and challenges of cloud migration or cloud native development and define the skills and training required for project success.",
      image: "Images/cloudPhotos/quotes.png",
    },
    {
      title: "Design and development of cloud apps",
      body: "Design of IT infrastructure and CI/CD pipelines.",
      image: "Images/cloudPhotos/flowchart.png",
    },
    {
      title: "Legacy infrastructure migration",
      body: "Quality is important to us. Every website we develop goes through a rigorous error correction process.",
      image: "Images/cloudPhotos/knowledge.png",
    },
    {
      title: "Knowledge transfer",
      body: "Rehosting, replatforming, refactoring.",
      image: "Images/cloudPhotos/transfer.png",
    },
  ];

  return (
    <div className={styles.CloudSolutionsContainer}>
      <div className={styles.CloudSolutionsBackgroundRectangle}>
        <img
          src="Images/MLPhotos/rectangle-top.png"
          alt="Background image rectangle top"
        />
        <img
          src="Images/MLPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.CloudSolutionsMain}>
        <h1>
          What You Get from <span>Cloud Computing</span> Consulting
        </h1>
        <div className={styles.CloudSolutionsHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.CloudSolutionsCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.CloudSolutionsCardsMain}>
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
