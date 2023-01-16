import React from "react";
import styles from "./CustomisedWebBanner.module.css";

export const CustomisedWebBanner = () => {
  return (
    <div className={styles.CustomisedWebBannerMain}>
      <h1>
        <span>Custom</span> Web Development Services
      </h1>
      <div className={styles.CustomisedWebBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is the best option for organizations that require
        brand-new and creative designs. Our team of experts will help you figure
        out your online presence, from strategy to execution. We'll work with
        you to understand your goals and requirements, and deliver a website
        that's effective, efficient, and designed with you in mind. We're
        committed to providing the best possible experience for our clients, so
        we always aim to exceed expectations.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
