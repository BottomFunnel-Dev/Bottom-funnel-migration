import React from "react";
import styles from "./DataScienceBanner.module.css";

export const DataScienceBanner = () => {
  return (
    <div className={styles.DataScienceBannerMain}>
      <h1>
        <span>Data</span> Science Services
      </h1>
      <div className={styles.DataScienceBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is a company that is dedicated to helping its clients with
        their data problems. It has a team of data scientists who have years of
        experience solving various business difficulties with the help of big
        data.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
