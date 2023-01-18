import React from "react";
import styles from './carRentalHeader.module.css';

export const CarRentalHeader = () => {
  return (

    <div className={styles.RGcarRentalContainer}>
      <div className={styles.RGcarRentalHeaderLeft}>
        <h1> Car Rental App Solution</h1>
        <p>The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno</p>
        <button>Start Free Trail </button>
      </div>

      <div className={styles.RGcarRentalHeaderRight}>
        <img width="100%" src="Images/Car-Rental-Page-Images/Banner1.png" alt="BannerImage" />
      </div>
    </div>
  );
};
