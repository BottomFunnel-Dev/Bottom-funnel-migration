import React from "react";
import styles from "./featuresComp.module.css";

export default function FeaturesComp() {
  return (
    <div className={styles.RGfeaturesCompContainer}>
      <div className={styles.RGfeaturesCompLeft}>
        <h1>
          <span className={styles.RGspanTagCar}>Exclusive</span> Features
        </h1>
      </div>

      <div className={styles.RGhrLine}></div>

      <div className={styles.RGfeaturesCompRight}>
        <p>
          When it comes to car rentals, there are a few things that set us apart
          from other rental services is Our exclusive focus is on giving
          customers the best experience possible. From selecting the right
          vehicle to arranging pick-up and drop-off, we make sure that
          everything goes as smoothly as possible for their customers.
        </p>
      </div>
    </div>
  );
}
