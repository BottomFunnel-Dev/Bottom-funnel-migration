import React from "react";
import styles from "./ContactUSBanner.module.css";

export const ContactUSBanner = () => {
  return (
    <div className={styles.ContactUSBannermain}>
      <div className={styles.ContactUsBannerimage}>
        <img src="Images/ContactUS/banner.png" alt="Contact us banner" />
      </div>
      <div className={styles.ContactUsBannerContent}>
        <h1>
          Share Your Details, Get In Touch Here at{" "}
          <span className={styles.ContactUsBanneranimatedtitle}>Bottom Funnel</span>
        </h1>
        <div></div>
        <p>
          It's hard to stand out in today's noisy market, but that doesn't mean
          you can't try! With over 95% of messages answered within 1 business
          day, Bottom Funnel is here to help make your project stand out from
          the crowd.
          <br />
          We understand that your time is precious, and we want to make sure you
          get the best possible response.
        </p>
        {/* <button>Get Started</button> */}
      </div>
    </div>
  );
};
