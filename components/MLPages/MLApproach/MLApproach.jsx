import React from "react";
import styles from "./MLApproach.module.css";

export const MLApproach = () => {
  return (
    <div className={styles.MLApproachmain}>
      <h1>Machine Learning Development Approach</h1>
      <div className={styles.MLPopularHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Our programmers and machine learning developers have deep insight into
        advanced projects. Find out how they think and implement their
        solutions.
      </p>
      <div className={styles.MLApproachImage}>
        <img
          src="Images/MLPhotos/approach.png"
          alt="ML Approach main content"
        />
      </div>
    </div>
  );
};
