import React from "react";
import styles from "./AnalysisWhyBF.module.css";
import Image from "next/image";

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
      image: "/Images/AnalysisSoftwarePhotos/process.webp",
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
      image: "/Images/AnalysisSoftwarePhotos/router.webp",
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
              <Image
                  src={"/Images/AnalysisSoftwarePhotos/big-left-image.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
        </div>
        <div className={styles.AnalysisWhyBFCards}>
          {cardsData.map(({ title, points, body, image }) => (
            <div key={title}>
              <div>
                <Image
                    src={image}
                    alt={title}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
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
