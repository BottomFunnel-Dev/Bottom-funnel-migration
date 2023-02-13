import React from "react";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.applybanner}>
      <div className={styles.bannerContent}>
        <div>
          <h2>Opening Global Doors for</h2>
          <h1>INDIA'S TOP TALENT</h1>
          <p>
            Join the community of India's best talents and work remotely for
            global brandsat a global pay scale!
          </p>
          <div className={styles.search}>
            <input type="text" placeholder="Search for Role" />
          </div>
        </div>
      </div>
      <div className={styles.bannerImage}>
        <img src="/Images/applyastalent/banner/banner.png" alt="" />
      </div>
    </div>
  );
}
