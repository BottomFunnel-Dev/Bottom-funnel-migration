import React from "react";
import styles from "./ondemandHero.module.css";

const OndemandHero = () => {
  return (
    <div className={styles.ondemandHero}>
      <div className={styles.textcontainer}>
        <div>
          <h1>Home Services App Solutions</h1>
          <p>
            Provide services to your customers at the comfort of their home with
            an app! Boost efficiency and drive more business with our
            industry-leading on demand home services app development services.
          </p>
          <button>Get Started </button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src="Images/ondemandHome/OnDemandServicesBNewBanner.png" alt="images" />
      </div>
    </div>
  );
};

export default OndemandHero;
