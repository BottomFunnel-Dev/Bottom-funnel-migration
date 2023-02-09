import React from 'react';
import styles from "./EscooterAdmin.module.css";

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
            <img src='Images/Escooter/tab.png' alt='image' />
          </div>
          <div className={styles.blackbluescooter}>
            <img src="Images/Escooter/blackbluescooter.png" alt='images' />
          </div>
        </div>
      </div>
    </div>
  );
};
