import React from "react";
import styles from "./CloudWorkWithUs.module.css";

export const CloudWorkWithUs = () => {
  return (
    <div className={styles.CloudWorkWithUsContainer}>
      <h1>
        <span>Cloud</span> We Work with
      </h1>
      <div className={styles.CloudWorkWithUsHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is an ideal partner for sorting out these confusions and
        helping you pick the right cloud solution for your organization. We look
        at all major clouds to provide you with a comprehensive understanding
        about their features and capabilities so that you can make an informed
        decision.
      </p>
      <div className={styles.CloudWorkIconsContainer}>
        <div className={styles.CloudWorkIconsMain}>
          <div>
            <img src="Images/cloudPhotos/aws.png" alt="AWS logo" />
          </div>
          <span></span>
          <div>
            <img
              src="Images/cloudPhotos/digital-ocean.png"
              alt="Digital Ocean logo"
            />
          </div>
          <span></span>
          <div>
            <img
              src="Images/cloudPhotos/google-cloud-platform.png"
              alt="Google Cloud logo"
            />
          </div>
          <span></span>
          <div>
            <img
              src="Images/cloudPhotos/microsoft-azure.png"
              alt="Microsoft Azure logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
