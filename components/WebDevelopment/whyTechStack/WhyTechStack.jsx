import React from "react";
import styles from "./whytechstack.module.css";
export const WhyTechStack = ({ techData }) => {
  return (
    <div className={styles.whytechData}>
      <div className={styles.techHeader}>
        <h1>
          Why <span>{techData.heading}</span> for Web Development{" "}
        </h1>
        <p>{techData.desc}</p>
      </div>

      <div className={styles.whyTechFeaturesCard}>
        {techData.cardData.map((item, index) => (
          <div
            className={styles.whyTechFeaturesCardBox}
            key={index}
            style={index % 2 === 1 ? { background: "#e9deca" } : {}}
          >
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
