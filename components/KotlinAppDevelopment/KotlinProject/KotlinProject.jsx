import React from "react";
import styles from "./KotlinProject.module.css";

export const KotlinProject = () => {

  return (
      <>
        <div className={styles.kotlinProjectmainbox}>
            <div className={styles.kotlinProjectmainboxinnertextdiv}>
                <h1>Kick Start Your Dream Project With Us</h1>
                <p>We understand what it takes to make your project shine from every angle, so let us be your partner in success!</p>
                
                <button className={styles.kotlinProjectbutton}>Get Started</button>
            </div>
        </div>
      </>
  );
};
