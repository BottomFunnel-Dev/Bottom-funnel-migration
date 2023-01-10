import React from "react";
import styles from "./digitalmarketing.module.css";
export const DigitalMarketing = () => {
  return (
    <div className={styles.digitalBanner}>
      <div className={styles.fbIcon}>
        {" "}
        <img src="Images/banner/digital/Facebook.png" alt="" />
      </div>
      <div className={styles.whatsappIcon}>
        {" "}
        <img src="Images/banner/digital/Whatsapp.png" alt="" />
      </div>
      <div className={styles.pinterestIcon}>
        {" "}
        <img src="Images/banner/digital/Pinterest.png" alt="" />
      </div>
      <div className={styles.linkedinIcon}>
        {" "}
        <img src="Images/banner/digital/Linkedin.png" alt="" />
      </div>
      <div className={styles.youtubeIcon}>
        {" "}
        <img src="Images/banner/digital/youtube.png" alt="" />
      </div>
    </div>
  );
};
