import React from 'react';
import styles from "./Wellnessconnect.module.css";
export default function Wellnessconnect() {
  return (
    <div className={styles.szwellnessconnect}>
      <div className={styles.szwellnessconnectsub}>
        <div className={styles.szwellnessconnectcenter}>
          <div className={styles.szwellnessconnectimage}>
            <img src="/Images/Wellness/heart.png" alt='image' />
          </div>

          <h4>Connect with us for a seamless product</h4>
          <button className={styles.szwellnessconnectbtn}> Get Started</button>
        </div>
      </div>
    </div>
  );
};
