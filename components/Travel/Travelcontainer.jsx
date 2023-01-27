import React from "react";
import styles from "./Travelcontainer.module.css";

export default function Travelcontainer() {
  return (
    <div className={styles.szTravelcontainer}>
      <div className={styles.sztravelsub}>
        <div className={styles.sztravelleft}>
          <div className={styles.sztravelpara}>
            <h1>Travel App Development Company</h1>
            <p>
              Whether you're looking for a new way to pay for gas or finding the
              fastest route home, Bottom Funnel has you covered. We've created
              an easy-to-use mobile app that works with all major car rental
              agencies so you can access all the features of your rental from
              anywhere.
            </p>
            <button className={styles.travelgetbtn}>Get Started</button>
          </div>
        </div>
        <div className={styles.sztravelright}>
          <div className={styles.travelgirl}>
            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Travel/travelgirl.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
