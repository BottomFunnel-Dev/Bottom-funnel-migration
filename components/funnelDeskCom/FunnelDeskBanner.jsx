import React from "react";
import styles from "./funnelDeskBanner.module.css";
export const FunnelDeskBanner = () => {
  return (
    <div className={styles.funnelSupport}>
      <div className={styles.bannerBackImgLeft}>
        <img src="Images/BottomFunnelDeskPhotos/wires.png" alt="" />
      </div>
      <div className={styles.bannerBackImgRight}>
        <img src="Images/BottomFunnelDeskPhotos/wires.png" alt="" />
      </div>

      <div className={styles.mainContentBanner}>
        <div className={styles.imagePart}>
          <img src="Images/BottomFunnelDeskPhotos/human.png" alt="human" />
        </div>
        <div className={styles.contentPart}>
          <h1>Delight Your Customer with Effortless Customer Service</h1>
          <p>
            Engage in more meaningful conversations every day, across every
            channel with every customer
          </p>
          <button className={styles.freetrial}>Start Free Trial</button>
          <button className={styles.demostart}>Request Demo</button>
        </div>
      </div>
    </div>
  );
};
