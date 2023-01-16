import React from "react";
import styles from "./IonicProject.module.css";

export const IonicProject = () => {

  return (
    <>
      <div className={styles.ionicProjectmainbox}>
        <div className={styles.ionicProjectmainboxinnertextdiv}>
          <h1> Kick Start Your Dream Project With Us </h1>
          <p>
            We have great insights and expert teams who possess remarkable prowess on the Ionic framework. We lend our best teams to help you develop your Ionic based Mobile application using our Ionic App Development Services.
          </p>

          <button className={styles.ionicProjectbutton}>Get Started</button>
        </div>
      </div>
    </>
  );
};
