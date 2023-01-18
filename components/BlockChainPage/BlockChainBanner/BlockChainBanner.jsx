import React from "react";
import styles from "./BlockChainBanner.module.css";

export const BlockChainBanner = () => {
  return (
    <div className={styles.BlockChainBannerMain}>
      <h1>
        Transform Your Business with Secure and Safe Transactions With Our Block
        Chain Services
      </h1>
      <div className={styles.BlockChainBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel believes in a decentralized world. They want to change the
        way people perceive blockchain technology and its various applications.
        Rather than just associating it with cryptocurrencies, they want to make
        people realize its actual potential.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
