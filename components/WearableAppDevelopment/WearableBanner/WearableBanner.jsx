import React from 'react';
import styles from './WearableBanner.module.css';

export const WearableBanner = () => {
  return (
    <div>
      <div className={styles.wearablebannermainbox}>
        <div className={styles.wearablebannermainboxinnertextdiv}>
          <h1>Wearable App Development </h1>
          <p>
            The use of wearable technology for both individuals and businesses are growing at a rapid rate. Whether it is for tracking steps walked or sending real-time work push notifications, wearable tech of both Android wearable development and iOS wearable development domain is being used by companies and individuals from all walks of life.
          </p>

          <button className={styles.wearablebannerbutton}>Get Started</button>
        </div>

        <div className={styles.wearablebannermainboxImage}>
          <img src='/Images/wearable/Component120.png' alt="image"/>
        </div>
      </div>
    </div>
  )
}
