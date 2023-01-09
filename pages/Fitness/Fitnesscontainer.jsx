import React from "react";
import styles from "./fitnesscontainer.module.css";

export const Fitnesscontainer = () => {
  return (
    <div className={styles.fitnesscontainer}>
      <div className={styles.fitnesssub}>
        <div className={styles.fitnessleft}>
          <h1>Make Your own Health and Fitness App</h1>
          <p>
            Our fitness apps are the perfect companion for everyone who wants to
            be more active and healthy. Whether you want to lose weight or just
            want a healthier lifestyle.
          </p>
          <button className={styles.fitnesgetbtn}>Get Started</button>
        </div>

        <div className={styles.fitnessright}>
          <div className={styles.fitnessimage}>
            <img src="Images/fitness/yoga1.png" alt="image"/>
          </div>
        </div>
      </div>
    </div>
  );
};
