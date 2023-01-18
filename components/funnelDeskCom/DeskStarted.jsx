import React from "react";
import styles from "./deskStarted.module.css";

export const DeskStarted = () => {
  return (
    <div className={styles.deskStarted}>
      <h1>Start today and enjoy our free trial</h1>
      <button className={styles.getStartedbtn}>Start Free Trial</button>
      <button className={styles.demobtn}>Request Demo</button>
    </div>
  );
};
