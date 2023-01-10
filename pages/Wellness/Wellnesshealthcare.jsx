import React from "react";
import styles from "./Wellnesshealth.module.css";

export default function Wellnesshealthcare() {
  return (
    <div className={styles.Wellnesshealthcare}>
      <div className={styles.Wellnesshealthcaresub}>
        <div className={styles.Wellnesshealthcareleft}>
          <div className={styles.wellnessimage}>
            <img src="/Images/Wellness/healthphone.png" alt="image" />
          </div>
        </div>
        <div className={styles.Wellnesshealthcareright}>
          <div>
            <h1> Why choose bottom Funnel for medical software development?</h1>
            <p>
              At bottom Funnel, we understand the needs of healthcare
              professionals and have built a stable app that is packed with
              features that make life easier for everyone involved. Why choose
              us over other companies? We are experienced in developing medical
              software, so you will know exactly what you're getting when you
              choose us. Not only do we understand how hospitals work, but we
              also know how doctors' schedules work. That means your software
              will be up-and-running quickly without any bugs or issues.
            </p>
            <button className={styles.WellnesshealthcareButton}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
