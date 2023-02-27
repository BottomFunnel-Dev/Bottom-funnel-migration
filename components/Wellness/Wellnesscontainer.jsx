import React from 'react';
import styles from "./Wellnesscontainer.module.css";
import Image from 'next/image';

export default function Wellnesscontainer() {
  return (
    <div className={styles.szwellnesscontainer}>
      <div className={styles.szwellnesssub}>
        <div className={styles.szwellnessleft}>
          <div>
            <h1>Wellness App Solutions</h1>
            <p>You're new to the field or looking for ways to expand your horizons, we have the skills and expertise you need to create a truly exceptional app. From our deep understanding of the healthcare industry, to our in-house talent pool, we have everything it takes to bring your vision alive.</p>
            <button className={styles.szwellnessbtn}
            
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            
            >Get Started</button>
          </div>
        </div>
        <div className={styles.szwellnessright}>
            <Image
              src={"/Images/WellnessDevApp/Banners/banner1.webp"}
              alt={"/image"}
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
