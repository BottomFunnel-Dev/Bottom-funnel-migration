import React from 'react';
import styles from "./ProductsNewPageBanner.module.css";
import { IconContext } from "react-icons/lib";
import { BsPlayCircle } from "react-icons/bs";

export const ProductsNewPageBanner = () => {
  return (
    <div className={styles.productsBannerBannerParentDiv}>
      <div className={styles.productsBannerMeatBannerContentDiv}>

        <div className={styles.productPageBannerContent}>
          <h1>
            Build Your Brands presence With{" "}
            <span className={styles.productPageAnimatedTitle}>BOTTOM FUNNEL</span>
          </h1>
          <hr />
          <p>
            Welcome to Bottom Funnel, the world's leading app development company
            for fintech and startup companies. We pride ourselves on delivering
            unparalleled value to our partners, through our experience and
            expertise in the field.
          </p>
        </div>

        <div className={styles.productsBannerButtonsDiv}>
          <button className={styles.productsBannerTrialsButton}> Free Trials </button>
          <button className={styles.productsBannerWatchVideoButton}> Watch Now <BsPlayCircle style={{fontSize:"20px"}}/> </button>
        </div>
      </div>
      
      <div className={styles.productsBannerBannerImageDiv}>
        <IconContext.Provider value={{ className: styles.productBannerPlayIcon }}>
          <BsPlayCircle />
        </IconContext.Provider>
        <img src='/Images/ProductsPage/ProductBannerimage.png' alt='image' />
      </div>

    </div>
  );
};
