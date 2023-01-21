import React from "react";
import styles from "./BackgroundHeading.module.css";

export const BackgroundHeading = ({ text }) => {
  return (
    <div className={styles.backgroundHeadingEngageContainer}>
      <span></span>
      <h1>{text}</h1>
    </div>
  );
};
