import React from "react";
import styles from "./whyBottom.module.css";

export const WhyBottom = ({ whyContent }) => {
  return (
    <div className={styles.whybottom}>
      <h1>Why Consider Bottom Funnel For Mern</h1>
      <div className={styles.backelement}>
        <img src="Images/mern/circle.png" alt="images" />
      </div>
      <div className={styles.backelementbottom}>
        <img src="Images/mern/circle.png" alt="images" />
      </div>

      <div className={styles.whyreasons}>
        {whyContent.feature.map((item, index) => (
          <div key={index} className={styles.whyfeatureCard}>
            <div className={styles.whyfeatureImage}>
              <img src={item.icon} alt="images" />
            </div>
            <div className={styles.whyfeatureContent}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
