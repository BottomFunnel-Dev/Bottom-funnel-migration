import React from "react";
import styles from "./AboutusBanner.module.css";

export const AboutusBanner = () => {
  return (
    <div className={styles.aboutusBanner}>
      <div className={styles.aboutusbannerimage}>
        <img src="/Images/aboutusImage/banner.jpg" alt="banner image" />
      </div>

      <div className={styles.aboutusbannercontent}>
        <h1>
          Build Your Brands presence With{" "}
          <span className={styles.aboutusanimatedtitle}> BOTTOM FUNNEL </span>
        </h1>
        <hr />
        <p>
          Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field.
        </p>
        <button> Get Started </button>
      </div>
    </div>
  );
};
