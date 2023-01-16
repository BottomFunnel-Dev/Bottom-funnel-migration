import React from "react";
import styles from "./webDevWhy.module.css";
export const WebDevWhy = ({ whyDevContent }) => {
  return (
    <div className={styles.webDevWhy}>
      <div className={styles.devWhyText}>
        <h1>
          Why Consider <span className={styles.spanText}>Bottom Funnel</span> For Web
          Development
        </h1>
        <p>{whyDevContent.intro}</p>
      </div>

      <div className={styles.whyDevreasons}>
        {whyDevContent.feature.map((item, index) => (
          <div key={index} className={styles.whyfeatureCard}>
            <div className={styles.whyfeatureImage}>
              <img src={item.icon} alt="" />
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
