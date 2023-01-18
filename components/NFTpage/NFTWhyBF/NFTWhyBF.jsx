import React from "react";
import styles from "./NFTWhyBF.module.css";

export const NFTWhyBF = () => {
  return (
    <div className={styles.NFTWhyBFContainer}>
      <div className={styles.NFTWhyBFHeading}>
        <h1>Why Bottom Funnel for NFT development services</h1>
        <div className={styles.NFTAboutItHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel is known for their strategic advice, NFT-based
          development services to help grow your business. We know how important
          it is to have a sound understanding of the market you are targeting.
          We develop NFT platforms that fit your target audiences' needs, and we
          do so with accuracy and precision. Not only will our services help you
          establish a foothold in the market, but they will also help you
          understand what it takes to be successful in that niche. With Bottom
          Funnel by your side, you can be sure that you're getting the most out
          of your investment in NFT marketing!
        </p>
      </div>
      <div className={styles.NFTWhyBFMain}>
        <div className={styles.NFTWhyBFMainImage}>
          <img
            src="Images/NFTDevPhotos/whyBF.png"
            alt="WHy Bottom Funnel for NFT development services"
          />
        </div>
        <div className={styles.NFTWhyBFBackgroundTriangleMain}>
          <img
            src="Images/NFTDevPhotos/triangle-top.png"
            alt="Background top triangle"
          />
          <img
            src="Images/NFTDevPhotos/triangle-bottom.png"
            alt="Background bottom triangle"
          />
        </div>
      </div>
    </div>
  );
};
