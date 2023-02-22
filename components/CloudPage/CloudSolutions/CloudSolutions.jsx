import React from "react";
import styles from "./CloudSolutions.module.css";
import Image from "next/image";

export default function CloudSolutions() {
  const cardsData = [
    {
      title: "Cloud adoption strategy",
      body: "Plan, prioritize, and schedule IT infrastructure migrations, cloud-native app development, and cloud data warehouses.",
      image: "/Images/cloudPhotos/chatting-face.webp",
    },
    {
      title: "Feasibility assissment",
      body: "Cloud initiatives that bring TCO and ROI estimates to the cloud.",
      image: "/Images/cloudPhotos/equality.webp",
    },
    {
      title: "Consulitations for the C-suite",
      body: "Understand the benefits and challenges of cloud migration or cloud native development and define the skills and training required for project success.",
      image: "/Images/cloudPhotos/quotes.webp",
    },
    {
      title: "Design and development of cloud apps",
      body: "Design of IT infrastructure and CI/CD pipelines.",
      image: "/Images/cloudPhotos/flowchart.webp",
    },
    {
      title: "Legacy infrastructure migration",
      body: "Quality is important to us. Every website we develop goes through a rigorous error correction process.",
      image: "/Images/cloudPhotos/knowledge.webp",
    },
    {
      title: "Knowledge transfer",
      body: "Rehosting, replatforming, refactoring.",
      image: "/Images/cloudPhotos/transfer.webp",
    },
  ];

  return (
    <div className={styles.CloudSolutionsContainer}>
      <div className={styles.CloudSolutionsBackgroundRectangle}>
        <div className={styles.CloudSolutionsImage1}>
          <Image
            src={"/Images/MLPhotos/rectangle-top.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.CloudSolutionsImage2}>
          <Image
            src={"/Images/MLPhotos/rectangle-bottom.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
