import React from "react";
import styles from "./techStackintro.module.css";
export const TechstackDetails = ({ stackDetails }) => {
  return (
    <div className={styles.aspAtackAbout}>
      <div className={styles.techContentDiv}>
        <div className={styles.stackImage}>
          <img src={techContent.aspstack[stack].stackIcon} alt="aspstack.png" />
        </div>

        <div className={styles.stackIntroduction}>
          <p>{techContent.aspstack[stack].description}</p>
        </div>
      </div>
    </div>
  );
};
