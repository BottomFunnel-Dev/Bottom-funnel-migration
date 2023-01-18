import React from "react";
import styles from "./CloudUnique.module.css";

export const CloudUnique = () => {
  return (
    <div className={styles.CloudUniqueContainer}>
      <div className={styles.CloudUniqueContent}>
        <h1>
          <span>Cloud</span> Services.
        </h1>
        <div className={styles.CloudUniqueHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel's team of seasoned consultants is ready to help you
          navigate the complex world of clouds and understand your unique needs.
          We'll work with you every step of the way to ensure that your cloud
          deployment is error-free and efficient.
          <ul>
            <li>Designing a pragmatic cloud strategy.</li>
            <li>Defining the right cloud services to use.</li>
            <li>Efficient cloud-native development.</li>
            <li>Smooth migration of legacy infrastructures to cloud, and more.</li>
          </ul>
        </p>
      </div>
      <div className={styles.CloudUniqueImage}>
        <img src="Images/CloudPhotos/vector.png" alt="HTML fit vector" />
      </div>
    </div>
  );
};
