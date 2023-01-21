import React from "react";
import styles from "./TickettingStartTrials.module.css";

export const TickettingStartTrials = () => {
  return (
    <div className={styles.tickettingStartTrialsContainer}>
      <h1>Start today, and enjoy our free trial</h1>
      <p>
        Start your 21-day free trial. No credit card required. No strings
        attached
      </p>
      <div>
        <button>Start Free Trial</button>
        <button>Request Demo</button>
      </div>
    </div>
  );
};
