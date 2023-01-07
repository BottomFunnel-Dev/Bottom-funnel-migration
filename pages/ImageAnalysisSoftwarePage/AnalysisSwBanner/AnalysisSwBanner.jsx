import React from "react";
import styles from "./AnalysisSwBanner.module.css";

export const AnalysisSwBanner = () => {
  return (
    <div className={styles.AnalysisSwBannerContainer}>
      <h1>Image Analysis Software</h1>
      <div className={styles.AnalysisSwBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Image analysis (IA) is the identification of attributes within an image
        via digital image processing techniques to make the IA process more
        accurate and cost-effective.
      </p>
      <button>Get Started</button>
    </div>
  );
};
