import React from "react";
import styles from "./carpoolingSolutions.module.css";
export const CarpoolingSolutions = () => {
  const solutioncard = [
    {
      cardtitle: "Entrepreneurs",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, ",
      cardIcon: "/Images/carpoolingpage/icons/Component 5.png",
    },
    {
      cardtitle: "Enterprises",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium,",
      cardIcon: "/Images/carpoolingpage/icons/Component 4.png",
    },
    {
      cardtitle: "Car/ Taxi Pooling",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, ",
      cardIcon: "/Images/carpoolingpage/icons/Component 3.png",
    },
    {
      cardtitle: "Real-Time Tracking",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, ",
      cardIcon: "/Images/carpoolingpage/icons/Component 2.png",
    },
  ];

  return (
    <div className={styles.carpoolSolutions}>
      <div className={styles.carpoolSolutionIntro}>
        <h1>Rideshare & Carpoooling App Development Solutions We Provide</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi quod
          reiciendis totam minima pariatur. Maxime saepe officiis optio laborum
          quod quibusdam, qui libero, eaque assumenda, voluptatem eveniet a
          fuga?
        </p>
      </div>

      <div className={styles.solutionsFeatures}>
        {solutioncard.map((item, index) => (
          <div className={styles.solutionCards}>
            <div className={styles.solutioncardIcon}>
              {" "}
              <img src={item.cardIcon} alt="images" />
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
