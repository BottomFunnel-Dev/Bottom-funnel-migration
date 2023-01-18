import React from 'react';
import styles from "./FinTechSolutionBanner.module.css";

export const FinTechSolutionBanner = () => {
  return (
    <div className={styles.fintechsolutionbannermainbox}>
      <div className={styles.fintechsolutionbannertextboxes}>
        <h1>Fintech App Solution</h1>
        <p>
          The screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease
          using the screeno app.
        </p>

        <button className={styles.fintechsolutionbannerbutton}>Get Started</button>
      </div>
    </div>
  );
};
