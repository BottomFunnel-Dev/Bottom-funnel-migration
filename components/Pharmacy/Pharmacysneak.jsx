import React from 'react';
import styles from "./Pharmacysneak.module.css";

export default function Pharmacysneak() {
  return (
    <div className={styles.szpharmacysneak}>
      <div className={styles.szpharmacysneaksub}>
        <button className={styles.szpharmacysneakbttn}>Get Started</button>
        <div className={styles.szpharmacysneakheading}>
          <h5>A SNEAK-PEEK OF OUR</h5>
          <h3>Pharmacy Delivery App Solution</h3>
        </div>
      </div>
    </div>
  )
}
