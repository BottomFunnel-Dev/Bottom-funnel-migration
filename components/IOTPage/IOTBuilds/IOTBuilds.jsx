import React from "react";
import styles from "./IOTBuilds.module.css";

export const IOTBuilds = () => {
  return (
    <div className={styles.IOTBuildsContainer}>
      <h1>Build Your Business with our</h1>
      <div className={styles.IOTServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>

      <div className={styles.IOTBuildsMain}>
        <div>
          <h3>IOT Consultancy</h3>
        </div>
        <div>
          <h3>IOT App development</h3>
        </div>
        <div>
          <h3>IOT Wearable</h3>
        </div>
        <div>
          <h3>IOT Maintenance</h3>
        </div>
      </div>
    </div>
  );
};
