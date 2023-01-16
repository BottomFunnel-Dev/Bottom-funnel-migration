import React from "react";
import styles from "./MLBanner.module.css";

export const MLBanner = () => {
  return (
    <div className={styles.MLBannerMain}>
      <h1>Machine Learning Development For Human-Like Solutions</h1>
      <div className={styles.MLBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is one such machine learning system that uses artificial
        intelligence to make predictions for the future based on historical
        data. By assessing user preferences and analyzing their online behavior,
        the company builds a model that predicts the next action users are
        likely to take after visiting their website.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
