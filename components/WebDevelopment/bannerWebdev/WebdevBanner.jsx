import React from "react";
import styles from "./webdevBanner.module.css";
export const WebdevBanner = ({ bannerContent }) => {
  return (
    <div className={styles.webDevBanner}
      style={{
       
        background: `url(${bannerContent.background})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 90%",
      }}
    >
      <div className={styles.webDebText}>
        <h1>
          <span className={styles.orange}>{bannerContent.title.orange}</span> {bannerContent.title.normal}</h1>
        <p>{bannerContent.description}</p>

        <button className={styles.webDevButton}>Request A Quote</button>
      </div>
    </div>
  );
};

