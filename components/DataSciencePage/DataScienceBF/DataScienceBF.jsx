import React from "react";
import styles from "./DataScienceBF.module.css";

export const DataScienceBF = () => {
  const cardsData = [
    {
      title: "Operational Intelligence",
      body: "Optimize process performance by detecting deviations and undesirable patterns, performing root cause analysis, and predicting and predicting performance.",
      image: "Images/DataSciencePhotos/icons/automatic.png",
    },
    {
      title: "Supply Chain management",
      body: "Optimize supply chain management with reliable demand forecasting, inventory optimization recommendations, and supplier and risk assessments.",
      image: "Images/DataSciencePhotos/icons/supply-chain.png",
    },
    {
      title: "Product quality",
      body: "Proactively identify production process deviations and disruptions that affect product quality.",
      image: "Images/DataSciencePhotos/icons/premium.png",
    },
    {
      title: "Predictive maintenance",
      body: "Machine monitoring, identification and reporting of patterns leading to pre-failure and failure conditions.",
      image: "Images/DataSciencePhotos/icons/maintenance.png",
    },
    {
      title: "Image analysis",
      body: "Minimize human error with automated visual inspection, face or emotion recognition, grading and counting.",
      image: "Images/DataSciencePhotos/icons/analysis.png",
    },
    {
      title: "Customer churn",
      body: "Make predictions based on customer behavior and identify potential churners.",
      image: "Images/DataSciencePhotos/icons/review.png",
    },
  ];

  return (
    <div className={styles.DataScienceBFContainer}>
      <div className={styles.DataScienceBFBackgroundRectangle}>
        <img
          src="Images/DataSciencePhotos/triangle-top.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/DataSciencePhotos/triangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.DataScienceBFMain}>
        <h1>
          <span>Data</span> Science Solutions
        </h1>
        <div className={styles.DataScienceUniqueHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.DataScienceBFCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.DataScienceBannerHrLine}>
                <div>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
