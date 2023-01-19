import React from "react";
import styles from "./CollaborationMidBanner.module.css";

export const CollaborationMidBanner = () => {
  return (
    <div className={styles.CollaborationMidBannerContainer}>
      <h1>Start today, and enjoy our free trial</h1>
      <p>
        Start your 21-day free trial. No credit card required. No strings
        attached
      </p>
      <div>
        <button>Start Free Trial</button>
        <button>Request Demo</button>
      </div>
    </div>
  );
};
