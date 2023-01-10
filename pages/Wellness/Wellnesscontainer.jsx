import React from 'react';
import styles from "./Wellnesscontainer.module.css";

export default function Wellnesscontainer() {
  return (
    <div className={styles.szwellnesscontainer}>
      <div className={styles.szwellnesssub}>
        <div className={styles.szwellnessleft}>
          <div>
            <h1>Wellness App Solutions</h1>
            <p>You're new to the field or looking for ways to expand your horizons, we have the skills and expertise you need to create a truly exceptional app. From our deep understanding of the healthcare industry, to our in-house talent pool, we have everything it takes to bring your vision alive.</p>
            <button className={styles.szwellnessbtn}>Get Started</button>
          </div>
        </div>
        <div className={styles.szwellnessright}>
          <img src="/Images/WellnessDevApp/Banners/banner1.png" alt='image' />
        </div>
      </div>
    </div>
  )
}
