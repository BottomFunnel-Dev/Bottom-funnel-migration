import React from "react";
import styles from "./webDevTechStack.module.css";
export const StackGrid = ({ gridData }) => {
  console.log("in griod Data", gridData);
  return (
    <div className={styles.stackGrid}>
      {gridData.frameworks.map((el, idx) => (
        <div className={styles.stackframeworkCard} key={idx}>
          <div className={styles.stackIcon}>
            <img src={el.stackImage} alt={el.alt} />
          </div>
          <h6>{el.stackName}</h6>
        </div>
      ))}
    </div>
  );
};
