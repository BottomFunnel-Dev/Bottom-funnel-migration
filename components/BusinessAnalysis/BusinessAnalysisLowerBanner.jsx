import React from "react";
import styles from "./BusinessAnalysisLowerBanner.module.css";

export const BusinessAnalysisLowerBanner = () => {
  return (
    <div className={styles.businessanalysismainboxes}>
      <div className={styles.businessanalysistextboxesforlowerbanner}>
        <h2>Kickstart your Dream Project With Us</h2>
        <h4>
          we have worked with some of the best innovative ideas and brands in
          the world across industries
        </h4>
        <button className={styles.businessanalysislowerbannerbutton}>
          Invite a Partnership
        </button>
      </div>
    </div>
  );
};
