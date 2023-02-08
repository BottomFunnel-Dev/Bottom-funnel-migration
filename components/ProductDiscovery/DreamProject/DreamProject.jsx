import React from "react";
import styles from "./DreamProject.module.css";

export const DreamProject = () => {
  return (
    <div className={styles.DreamProjectmaindiv}>
      <div className={styles.DreamProjectcontain}>
        <h1>Kickstart Your Dream Project With Us </h1>
        <p>
          We have worked with some of the best innovation ideas and brands in
          the world across industries.
        </p>
      </div>
      <button className={styles.DreamProjectbutton}>
        Initiate a Partnership
      </button>
    </div>
  );
};
