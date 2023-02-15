import React from "react";
import styles from "./AIBanner.module.css";

export const AIBanner = () => {
  return (
    <div className={styles.AIBannerMain}>
      <h1>
        For End-to-End AI solutions try our Artificial Intellegience consultancy
      </h1>
      <div className={styles.AIBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel has harnessed the potential of AI with its powerful
        predictive analytics tools that identify new and emerging trends before
        they take off. And because we know you can't keep your mind off numbers,
        we're offering discounts on selected products every month.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
