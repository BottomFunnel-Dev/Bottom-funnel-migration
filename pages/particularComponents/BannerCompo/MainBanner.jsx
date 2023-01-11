import React from "react";
import styles from "./mainBanner.module.css";
export const MainBanner = ({ bannerData }) => {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.mainbannerTextcontainer}>
        <div>
          <h1>{bannerData.title}</h1>
          <p>{bannerData.description}</p>
          <button>Get Started </button>
        </div>
      </div>
      <div className={styles.mainbannerImageContainer}>
        <img src={bannerData.heroImage} alt="images" />
      </div>
    </div>
  );
};
