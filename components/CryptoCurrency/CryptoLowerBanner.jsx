import React from "react";
import styles from "./CryptoLowerBanner.module.css";

export default function CryptoLowerBanner() {
  return (
    <div className={styles.cryptolowerbannermainbox}>
      <div className={styles.cryptocurrencylowerbannertxtdiv}>
        <h3>Have a Unique & Exceptional Idea For a Cryptocurrency App ?</h3>
        <h2>
          We can Turn Your Vision into an Interactive & fully function app.
        </h2>

        <button className={styles.cryptocurrencylowerbannerbutton}>
          Get Started
        </button>
      </div>
    </div>
  );
}
