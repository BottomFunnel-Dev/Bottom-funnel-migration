import React from "react";
import styles from "./CarrerMidBanner.module.css";

export const CarrerMidBanner = () => {
  return (
    <div className={styles.CarrerMidBannercontainer}>
      <h1>
        Join Our <span>Team</span>
      </h1>
      <p>
      Because it's true: Teamwork has the incredible power to increase productivity, job satisfaction, and even each person's individual performance. 

      To inspire your team to band together and celebrate collaboration, we've gathered some of our favorite quotes on the power of teamwork. Check out the full list of inspirational quotes below,  including some remarks about hard work to keep your collaborative juices flowing.
      </p>
      <button>Apply Now</button>
    </div>
  );
};
