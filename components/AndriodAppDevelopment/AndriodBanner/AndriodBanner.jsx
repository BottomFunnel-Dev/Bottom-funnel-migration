import React from "react";
import styles from "./AndriodBanner.module.css";

export const AndriodBanner = () => {

  return (
    <>
      <div className={styles.andriodAppDevbannermainbox}>
        <div className={styles.andriodAppDevbannermainboxinnertextdiv}>
          <h1>Andriod App Development</h1>
          <p>If you're looking for a reliable and affordable android app development service, you've come to the right place. At Bottom funnel, we understand the importance of delivering high-quality apps on time and at a fraction of the cost of other developers. So whether you're looking for a simple Android app or a more complex project, we can help. We take pride in our extensive experience and track record of success, so you can be sure that your project will be handled with care. Contact us today to get started!</p>

          <button className={styles.andriodAppDevbannerbutton}>Get Started</button>
        </div>
      </div>
    </>
  );
};
