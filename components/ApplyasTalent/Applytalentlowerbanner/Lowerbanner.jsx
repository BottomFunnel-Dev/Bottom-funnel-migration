import React from "react";
import styles from "./Lowerbanner.module.css";

export default function Lowerbanner() {
  return (
    <div className={styles.hiretalentlowerbannermainboxes}>
      <div className={styles.hiretalentlowerbannersometextbox}>
        <h2>Register Your Interest</h2>
        <p>
          Currently,we have openings only for the given position but we are in
          process if adding more skills. If you have a skillset plus experience
          in other field like SEO, Digital Marketing, Designing and wish to join
          Uplers, Let us know. Mention your field of interest and we'll make
          sure you hear back from us once we have openings for the same.
        </p>
        <button className={styles.lowerbannerbutton}>Register</button>
      </div>
    </div>
  );
}
