import React from "react";
import styles from "./KotlinBanner.module.css";

export const KotlinBanner = () => {

  return (
    <>
      <div className={styles.kotlinbannermainbox}>
        <div className={styles.kotlinbannermainboxinnertextdiv}>
          <h1 className={styles.kotlinChange}>Kotlin</h1>
          <h1> App Development Services</h1>
          <p>We have been providing the best kotlin app development services to our clients since long. We are experts in this domain and we can make any kind of app with a single click. Our team consists of highly proficient professionals who have years of experience in developing apps. They know their stuff and they will make sure that your app is error-free and user-friendly too. Don't waste your time, order our kotlin app development services right away!</p>

          <button className={styles.kotlinbannerbutton}>Get Started</button>
        </div>
      </div>
    </>
  );
};
