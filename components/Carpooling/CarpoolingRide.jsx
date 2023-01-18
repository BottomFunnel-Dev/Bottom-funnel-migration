import React from "react";
import styles from "./carpoolingRide.module.css";
// import { BottomButton } from "../particularComponents/Button/BottomButton";

export const CarpoolingRide = () => {
  return (
    <div className={styles.carpoolingRide}>
      <div>
        <h1>
          Accelerate Your Business Growth With Customizable RideSharing &
          Carpooling Solution
        </h1>

        <button className={styles.bottomButton}>Get Started</button>
      </div>
    </div>
  );
};
