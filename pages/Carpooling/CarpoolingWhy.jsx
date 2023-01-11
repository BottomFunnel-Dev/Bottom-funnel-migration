import React from "react";
import styles from "./carpoolingwhy.module.css";
export const CarpoolingWhy = () => {
  const carpoolwhydata = [
    {
      cardtitle: "100% Customzation",
      cardIcon: "/Images/carpoolingpage/icons/Component 6.png",
    },
    {
      cardtitle: "Highly Scalable",
      cardIcon: "/Images/carpoolingpage/icons/Component 7.png",
    },
    {
      cardtitle: "Dedicated Support",
      cardIcon: "/Images/carpoolingpage/icons/Component 8.png",
    },
    {
      cardtitle: "Global Solution",
      cardIcon: "/Images/carpoolingpage/icons/Component 9.png",
    },
  ];

  return (
    <div className={styles.carpoolingwhy}>
      <div className={styles.carpoolWhy}>
        <h1>Rideshare & Carpoooling App Development Solutions We Provide</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi quod
          reiciendis totam minima pariatur. Maxime saepe officiis optio laborum
          quod quibusdam, qui libero, eaque assumenda, voluptatem eveniet a
          fuga?
        </p>
      </div>

      <div className={styles.solutionsFeatures}>
        {carpoolwhydata.map((item, index) => (
          <div key={index} className={styles.whyCards}>
            <div className={styles.whycardIcon}>
              {" "}
              <img src={item.cardIcon} alt="image" />
            </div>

            <div className={styles.solutionContent}>
              <h5>{item.cardtitle}</h5>
              <p>{item.CardDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
