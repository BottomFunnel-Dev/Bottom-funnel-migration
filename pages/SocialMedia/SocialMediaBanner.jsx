import React from "react";
import styles from "./SocialMediaBanner.module.css";

export const SocialMediaBanner = () => {
  return (
    <div className={styles.socialmediabannermainbox}>
      <div className={styles.socialmediabannerinnertextboxes}>
        <h1>Build A freelancer Marketplace Like Upwork & Fiverr</h1>
        <p>
          Bottom Funnel saas is the perfect solution for you if you're looking
          to launch your own social networking app. We provide advanced features
          and tech so that you can focus on building a successful business.
        </p>
        <button className={styles.socialmediabannerbutton}>Get Started</button>
      </div>
    </div>
  );
};
