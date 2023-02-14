import React from 'react';
import styles from "./Wellnessconnect.module.css";
import Image from 'next/image';

export default function Wellnessconnect() {
  return (
    <div className={styles.szwellnessconnect}>
      <div className={styles.szwellnessconnectsub}>
        <div className={styles.szwellnessconnectcenter}>
          <div className={styles.szwellnessconnectimage}>
             <Image
                src={"/Images/Wellness/heart.webp"}
                alt={"/image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>

          <h4>Connect with us for a seamless product</h4>
          <button className={styles.szwellnessconnectbtn}> Get Started</button>
        </div>
      </div>
    </div>
  );
};
