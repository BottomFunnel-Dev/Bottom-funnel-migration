import React from "react";
import styles from "./SelfServiceBanner.module.css";

export const SelfServiceBanner = () => {
  return (
    <div className={styles.selfServicesBannerParentDiv}>
      <div className={styles.selfServicesBannerContentDiv}>
        <h1>
          <span> Help your customers </span>
          help themselves
        </h1>
        <p>
          Leverage advsanced bots, a knowledge base with integrated forums, and
          a web widget to help your customers find answers faster.
        </p>
        <button> Start Free Trial </button>
      </div>
      <div className={styles.selfServicesBannerImageDiv}>
        <img
          src="/Images/SelfService/SelfServiceBannerAnimation.gif"
          alt="SelfService/SelfServiceBannerAnimation.gif"
        />
      </div>
    </div>
  );
};
