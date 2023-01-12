import React from "react";
import styles from "./CarServiceBanner.module.CSS";

export const CarServiceBanner = () => {
  return (
    <div className={styles.carservicebannermainboxes}>
      <div className={styles.carservicebannertxtbox}>
        <h1>Car Service App Development Services</h1>
        <p>
          Design Sprint facilitates quick ideation,Prototyping and validation of
          a product idea. Find solutions for business problems through an
          integrated design thinking approach. Ideation and prototyping are key
          to the success of any new venture, and with Design Sprint you can get
          your business up and running quickly by integrating these aspects into
          a single process.
        </p>
        <button className={styles.digitalmarketingbannerbutton}>Get Started</button>
      </div>
    </div>
  );
};
