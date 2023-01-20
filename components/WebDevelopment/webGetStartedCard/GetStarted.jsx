import React from "react";
import styles from "./getStarted.module.css";

export const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.getText}>
        <p>
          Don't wait any longer! Contact bottom funnel today and let us build
          your next success story!
        </p>
        <button>Let's get Started</button>
      </div>
    </div>
  );
};
