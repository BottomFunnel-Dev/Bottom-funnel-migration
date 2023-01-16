import React from "react";
import styles from "./AlcoholBanner.module.css";

export const AlcoholBanner = () => {
  return (
    <div className={styles.alcoholBannerMain}>
      <div className={styles.alcoholBannerContent}>
        <h1>Alcohol Delivery</h1>
        <p>
          There's no need to run out and purchase alcohol anymore! With alcohol delivery services, you can have all the wine, 
          beer, and liquor your heart desires delivered right to your door.
        </p>
        <button>GET STARTED</button>
      </div>
      <div className={styles.alcoholBannerImage}>
        <img
          src="/Images/alcoholPhotos/banner-background.png"
          alt="e-commerce banner image"
        />
        <div className={styles.alcoholBannerBigMobile}>
          <img
            src="/Images/alcoholPhotos/banner-big-mobile.png"
            alt="banner big mobile"
          />
        </div>
        <div className={styles.alcoholBannerSmallMobile}>
          <img
            src="/Images/alcoholPhotos/banner-small-mobile.png"
            alt="banner small mobile"
          />
        </div>
      </div>
    </div>
  );
};
