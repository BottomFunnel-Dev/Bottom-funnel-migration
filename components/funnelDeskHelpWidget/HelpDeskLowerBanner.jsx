import React from "react";
import styles from "./HelpDeskLowerBanner.module.css";

export const HelpDeskLowerBanner = () => {
  return (
    <div className={styles.helpdesklowerbannermainbox}>
      <div className={styles.helpdesklowerbannertextbox}>
        <h2>Start today,and enjoy our free trial.</h2>
        <p>
          start your 21-day free trial.No credit card required.No strings
          attached
        </p>
        <div className={styles.helpdesklowerbannersomebutton}>
          <button className={styles.button1helpdest}>Start free trial</button>
          <button className={styles.button1helpdest}>Request demo</button>
        </div>
      </div>
    </div>
  );
};
