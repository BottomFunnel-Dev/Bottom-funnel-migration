import React from "react";
import styles from "./DigitalTransformationBanner.module.css";

export const DigitalTransformationBanner = () => {
  return (
    <div className={styles.digitaltransformationbannermainboxes}>
      <div className={styles.digitaltransformationbannerboxinsiderfortext}>
        <h1>Digital Transformation</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          orci sed justo volutpat interdum sit amet in metus. Nam at
          pellentesque ligula. Donec fermentum non erat id vulputate. Nullam
          condimentum tellus aliquet diam fringilla, a convallis ex suscipit.
          Nulla
        </p>
        <button className={styles.digitaltransformationbannerbutton}>
          Get Started
        </button>
      </div>
    </div>
  );
};
