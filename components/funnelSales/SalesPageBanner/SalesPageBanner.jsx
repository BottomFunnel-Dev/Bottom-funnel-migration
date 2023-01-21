import React from "react";
import styles from "./SalesPageBanner.module.css";

export const SalesPageBanner = () => {
  return (
    <div>
      <div className={styles.SalesPageBannermainbox}>
        <div className={styles.SalesPageBannermainboxImage}>
          <img src="/Images/SalesPagePhotos/salesbnaer.png"></img>
        </div>
        <div className={styles.SalesPageBannermainboxinnertextdiv}>
          <h1>Accelerate your revenue </h1>
          <h1>with context-driven sales </h1>
          <p>
            Personalize engagement, shorten your sales cycle, and grow your
            business with Bottom Funnel sales.
          </p>
          <div className={styles.SalesPageBannerbuttonbox}>
            <button className={styles.SalesPageBannerbutton}>SIGN UP </button>
            <button className={styles.SalesPageBannerbutton1}>
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
