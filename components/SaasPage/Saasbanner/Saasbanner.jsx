import React from "react";
import { BannerContent } from "./BannerContent/BannerContent";
import styles from "./Saasbanner.module.css";

export const Saasbanner = () => {
  return (
    <>
      <div className={styles.saasBannerMain}>
        <div className={styles.saasBannerImage}>
          <img
            width="100%"
            src="Images/saasPhotos/banner.png"
            alt="Saas Banner image"
          />
        </div>
      </div>
      <BannerContent />
    </>
  );
};
