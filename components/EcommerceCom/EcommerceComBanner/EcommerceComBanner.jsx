import React from "react";
import styles from "./EcommerceComBanner.module.css";

export const EcommerceComBanner = () => {
  return (
    <div className={styles.eCommerceBannerMain}>
      <div className={styles.eCommerceBannerContent}>
        <h1>E-commerce App Development Company</h1>
        <p>
          Hey, you! Do you want to build a website for your eCommerce business
          but are not sure where to start? Well, we understand that it can be
          overwhelming at first. That's why we offer web development services
          for brands that want to create an online presence and grow their
          business.
        </p>
        <button>GET STARTED</button>
      </div>
      <div className={styles.eCommerceBannerImage}>
        <img
          src="https://bottom-funnel-images.sfo3.digitaloceanspaces.com/Images/EcommercePhotos/banner.png"
          alt="e-commerce banner image"
        />
      </div>
    </div>
  );
};
