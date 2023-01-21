import React from "react";
import styles from "./CollaborationBanner.module.css";

export const CollaborationBanner = () => {
  return (
    <div className={styles.CollaborationBannerContainer}>
      <div className={styles.CollaborationBannerImage}>
        <img src="/Images/collaborationPhotos/banner.gif" alt="banner.webp" />
      </div>
      <div className={styles.CollaborationBannerContent}>
        <h1>
          It takes a team to deliver great <span>Customer Support</span>
        </h1>
        <hr />
        <p>
          We help you work together with team members from across the company to
          provide quick and consistent answers to your customers.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
