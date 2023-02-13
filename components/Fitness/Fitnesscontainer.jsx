import Image from "next/image";
import React from "react";
import styles from "./fitnesscontainer.module.css";

export const Fitnesscontainer = () => {
  return (
    <div className={styles.fitnesscontainer}>
      <div className={styles.fitnesssub}>
        <div className={styles.fitnessleft}>
          <h1>Make Your own Health and Fitness App</h1>
          <p>
            Our fitness apps are the perfect companion for everyone who wants to
            be more active and healthy. Whether you want to lose weight or just
            want a healthier lifestyle.
          </p>
          <button className={styles.fitnesgetbtn}>Get Started</button>
        </div>

        <div className={styles.fitnessright}>
          <div className={styles.fitnessimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/fitness/yoga1.webp"
              alt="fitness/yoga1.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
