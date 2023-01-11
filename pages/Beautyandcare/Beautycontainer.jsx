import React from "react";
import styles from "./Beautycontainer.module.css";

export default function Beautycontainer() {
  return (
    <div className={styles.beautycontainer}>
      <div className={styles.beautyleft}>
        <h1 className={styles.heading}>Beauty And Salon App Development Solutions</h1>
        <p>
          Beautify Your Business with An App! Enhance your salon's customer
          experience with our cutting-edge beauty & salon app development.
        </p>
        <button> Get Started</button>
      </div>
      <div className={styles.mobile}>
        <img  src="/Images/beautycare/beautymobile.png" alt="image"/>
      </div>
    </div>
  );
}
