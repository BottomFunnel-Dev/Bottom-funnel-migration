import React from "react";
import styles from "./CustomWebSolutions.module.css";
import Image from "next/image";

export const CustomWebSolutions = () => {
  const cardsData = [
    {
      title: "Cloud-based Dev",
      body: "Accelerate your development process by maximizing your use of cloud services.",
      image: "/Images/customWebPhotos/cloud-computing.webp",
    },
    {
      title: "Full-cycle Development",
      body: "It includes project planning, requirements analysis, system design, implementation, testing and deployment.",
      image: "/Images/customWebPhotos/app-development.webp",
    },
    {
      title: "Consolidation & Integration",
      body: "We combine potential tools, innovative technology and quality design.",
      image: "/Images/customWebPhotos/integration.webp",
    },
    {
      title: "Agile & Adaptive",
      body: "We are one of the leading web development agencies and have a proven track record with agile models.",
      image: "/Images/customWebPhotos/agile.webp",
    },
    {
      title: "Maintenance & Support",
      body: "After your site is up and running, we are here when you need us.",
      image: "/Images/customWebPhotos/maintenance.webp",
    },
    {
      title: "Quality Assurance",
      body: "Quality is of the utmost importance to us. Every website we develop goes through a rigorous error correction process.",
      image: "/Images/customWebPhotos/badge.webp",
    },
  ];
  return (
    <div className={styles.CustomWebSolutionsContainer}>
      <div className={styles.CustomWebSolutionsBackgroundRectangle}>
              <Image
                  src={"/Images/MLPhotos/rectangle-top.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              <Image
                  src={"/Images/MLPhotos/rectangle-bottom.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
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
};
