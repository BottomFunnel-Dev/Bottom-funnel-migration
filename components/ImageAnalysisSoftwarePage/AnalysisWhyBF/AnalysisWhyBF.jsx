import React from "react";
import styles from "./AnalysisWhyBF.module.css";

export const AnalysisWhyBF = () => {
  const cardsData = [
    {
      title: "Rule-based approach",
      body: "For a small amount of visual data of low variability",
      points: [
        "Excellent performance within a narrow domain.",
        "Doesn't require big datasets.",
        "Performance can be easily validated.",
        "Explicability (every decision step is clearly seen in the code).",
        "Easy debugging.",
      ],
      image: "Images/AnalysisSoftwarePhotos/process.png",
    },
    {
      title: "Machine learning approach",
      body: "For a large datasets of unstructured data",
      points: [
        "Deals better with complex objects and tasks.",
        "Doesn't require explicit knowledge.",
        "Easier scalability.",
        "Lower operational costs.",
      ],
      image: "Images/AnalysisSoftwarePhotos/router.png",
    },
  ];

  return (
    <div className={styles.AnalysisWhyBFContainer}>
      <h1>Bottom Funnel Approaches to Build Image Analysis Software</h1>
      <div className={styles.AnalysisCoreTaskHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.AnalysisWhyBFMain}>
        <div className={styles.AnalysisWhyBFImage}>
          <img
            src="Images/AnalysisSoftwarePhotos/big-left-image.png"
            alt="big-left-image.png"
          />
        </div>
        <div className={styles.AnalysisWhyBFCards}>
          {cardsData.map(({ title, points, body, image }) => (
            <div key={title}>
              <div>
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{body}</p>
              <ul>
                {points.map((elem) => (
                  <li key={elem}>{elem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
