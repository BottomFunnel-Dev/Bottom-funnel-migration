import React from 'react';
import styles from "./EscooterAdmin.module.css";
import Image from 'next/image';

export const EscooterAdmin = () => {
  return (
    <div className={styles.szescooteradmin}>
      <div className={styles.szescooteradminsub}>
        <div className={styles.szescooteradminleft}>
          <div>
            <h2>Drive App</h2>
            <ul>
              <li>lorem Ipsum is simply dummy text of</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
              <li>lorem Ipsum is simply</li>
            </ul>
          </div>
        </div>

        <div className={styles.szescooteradminright}>
          <div className={styles.szscootertab}>
                <Image
                  src={"/Images/Escooter/tab.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
          </div>
          <div className={styles.blackbluescooter}>
               <Image
                  src={"/Images/Escooter/blackbluescooter.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
          </div>
        </div>
      </div>
    </div>
  );
};
