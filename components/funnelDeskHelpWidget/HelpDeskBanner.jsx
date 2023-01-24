import React from "react";
import styles from "./HelpDeskBanner.module.css";

export const HelpDeskBanner = () => {
  return (
    <div className={styles.helpdekbannermainboxes}>
      <div className={styles.helpDeskBannerImage}>
        <img src="/Images/helpdesk/Frame-1.png" alt="helpdesk/Frame-1.png" />
      </div>
      <div className={styles.helpdeskbannersometextbox}>
        <h1>Help customers wherever they are</h1>
        <p>
          Embed answer and show a contact form on your website with the help
          widget
        </p>
        <button className={styles.helpdeskbannerbutton}>Get Started</button>
      </div>
    </div>
  );
};
