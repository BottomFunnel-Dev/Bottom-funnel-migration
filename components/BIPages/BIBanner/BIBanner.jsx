import React from "react";
import styles from "./BIBanner.module.css";

export const BIBanner = () => {
  return (
      <div className={styles.BIBannerMain}>
      <h1>
        <span>Business Intelligence</span> Services & Solutions
      </h1>
      <div className={styles.BIBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Business intelligence is something that every company needs nowadays,
        and Bottom Funnel is here to take care of it. With an impressive track
        record of delivering quality services, they know exactly how to extract
        data-driven insights from structured data. This makes them a smart
        choice when it comes to making informed decisions about your company's
        future growth or potential opportunities.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
