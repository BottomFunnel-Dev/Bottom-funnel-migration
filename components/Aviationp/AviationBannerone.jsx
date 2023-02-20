import React from "react";
import styles from "./AviationBannerone.module.css";

export default function AviationBannerone() {
  return (
    <div className={styles.AviationBannermain}>
      <div className={styles.aviationbannertext}>
        <h1>Aviation Software <br/>Developement Services</h1>
        <p>
          Let us be your strategic technology partner and help you to solve<br/>
          complex challenges and take your Aviation business to unprecedented
          height.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
