import React from "react";
import styles from "./UIDesingBanner.module.css";

export const UIDesingBanner = () => {
  return (
    <div className={styles.UIDesingBannercontainer}>
      <div className={styles.UIDesingBannercontent}>
        <h1>User Interface Design</h1>
        <p>
          Bottom funnel knows how important it is to design interfaces that are
          visually-stimulating, so they made sure that every application they
          built offers an experience worth your time.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className={styles.UIDesingBannermain}>
        <img src="Images/UIDesignPhotos/banner.png" alt="Banner mobile image" />
        <img
          src="Images/UIDesignPhotos/background.png"
          alt="Banner background cloud"
        />
      </div>
    </div>
  );
};
