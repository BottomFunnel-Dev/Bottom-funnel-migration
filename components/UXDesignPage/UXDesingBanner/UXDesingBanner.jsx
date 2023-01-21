import React from "react";
import styles from "./UXDesingBanner.module.css";

export const UXDesingBanner = () => {
  return (
    <div className={styles.UXDesingBannercontainer}>
      <div className={styles.UXDesingBannercontent}>
        <h1>User Experience Design</h1>
        <p>
          Bottom Funnel is a company that embodies innovation and creativity.
          We're driven by a vision to create cutting-edge products and services
          that exceed expectations. With our team of experts, we craft
          brilliance together and deliver experiences that are ever-evolving.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className={styles.UXDesingBannermain}>
        <img src="Images/UXDesignPhotos/banner.png" alt="Banner mobile image" />
        <img src="Images/UXDesignPhotos/design-key.png" alt="design-key.png" />
        <img src="Images/UXDesignPhotos/ps.png" alt="PS.png" />
        <img src="Images/UXDesignPhotos/ux.png" alt="ux.png" />
        <img src="Images/UXDesignPhotos/research.png" alt="research.png" />
      </div>
    </div>
  );
};
