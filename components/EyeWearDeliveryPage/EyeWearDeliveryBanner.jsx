import React from 'react';
import styles from "./EyeWearDeliveryBanner.module.css";

export const EyeWearDeliveryBanner = () => {
  return (
    <div className={styles.eyeweardeliverybannermainboxes}>
      <div className={styles.eyewearbannersometextboxes}>
        <h1>
          <a className={styles.colored}>Eyewear</a>
          Delivery App
        </h1>

        <p>
          Design Sprint facility quick ideation, prototyping and validation of a product idea.Find Solutions for business problems
          through an integrated design thinking approch.
        </p>
        <button className={styles.Eyeweardeliverybannerbutton}>Get Started</button>
      </div>
    </div>
  );
};

