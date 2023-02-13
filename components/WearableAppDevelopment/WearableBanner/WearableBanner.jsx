import React from 'react';
import styles from './WearableBanner.module.css';
import Image from 'next/image';

export const WearableBanner = () => {
  return (
    <div>
      <div className={styles.wearablebannermainbox}>
        <div className={styles.wearablebannermainboxinnertextdiv}>
          <h1><span>Wearable App</span> Development </h1>
          <p>
            The use of wearable technology for both individuals and businesses are growing at a rapid rate. Whether it is for tracking steps walked or sending real-time work push notifications, wearable tech of both Android wearable development and IOS wearable development domain is being used by companies and individuals from all walks of life.
          </p>

          <button className={styles.wearablebannerbutton}>Get Started</button>
        </div>

        <div className={styles.wearablebannermainboxImage}>
                <Image
                    src={'/Images/wearable/Component120.webp'}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
      </div>
    </div>
  )
}
