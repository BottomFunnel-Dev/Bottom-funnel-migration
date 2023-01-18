import React from "react";
import styles from "./XamarinAppDevelopmentBanner.module.css";

export const XamarinAppDevelopmentBanner = () => {
  return (
    <>
      <div className={styles.XamarinAppDevbannermainbox}>
        <div className={styles.XamarinAppDevbannermainboxinnertextdiv}>
          <h1>Xamarin App Development</h1>
          <p>We're passionate about our work, and our xamarin app development services reflect that</p>

          <button className={styles.XamarinAppDevbannerbutton}>Get Started</button>
        </div>
      </div>
    </>
  );
};
