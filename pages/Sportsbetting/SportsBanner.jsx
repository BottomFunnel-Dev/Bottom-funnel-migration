import React from "react";
import styles from "./sportsBanner.module.css";
export const SportsBanner = () => {
  return (
    <div className={styles.sportsbanner}>
      <div className={styles.bettingSectionleft}>
        <div className={styles.bettingContent}>
          <h2>Top Notch</h2>
          <h1>Sports Betting App Developemnt Company</h1>
          <p>
            We are the top notch customer service for mobile apps. Our extensive
            experience has helped us create the best sports betting app that you
            will ever get! This is because we have a team of developers who try
            to be in touch with all the latest trends and technologies of their
            days.
          </p>
          <button className={styles.bottomButton}>Get Started</button>
        </div>
      </div>
      <div className={styles.bettingSectionright}>
        <div className={styles.bettingImage}>
          <img src="Images/sportsbettingpage/banners/bannerimg.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
