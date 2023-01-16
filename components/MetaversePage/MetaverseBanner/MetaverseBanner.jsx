import React from "react";
import styles from "./MetaverseBanner.module.css";

export const MetaverseBanner = () => {
  return (
    <div className={styles.MetaverseBannerMain}>
      <h1>
        <span>Metaverse</span> Services
      </h1>
      <div className={styles.EnterpriseSliderHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Welcome to the Metaverse! Where digital experiences are an alternative
        to or a replica of the real world, along with key civilizational aspects
        like social interactions, currency, trade, economy, and property
        ownership-- founded on a bedrock of blockchain technology.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
