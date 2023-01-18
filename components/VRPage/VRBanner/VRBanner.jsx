import React from "react";
import styles from "./VRBanner.module.css";

export const VRBanner = () => {
  return (
    <div className={styles.VRBannerMain}>
      <h1>
        Change your virtual game with our best in class virtual reality services
      </h1>
      <div className={styles.VRBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam
        facere recusandae ratione excepturi, sunt iusto provident explicabo quos
        cum temporibus beatae quasi ipsum quisquam accusantium sint officia
        consectetur quia!
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
