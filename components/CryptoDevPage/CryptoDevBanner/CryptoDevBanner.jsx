import React from "react";
import styles from "./CryptoDevBanner.module.css";

export const CryptoDevBanner = () => {
  return (
    <div className={styles.CryptoDevBannerMain}>
      <h1>
        <span>Cryptocurrency</span> Development Services
      </h1>
      <div className={styles.CryptoDevBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Still confused about how cryptocurrency works? Join the club. That's why
        Bottom Funnel has decided to clear up all your confusion with their
        easy-to-understand explanations. From mining a coin to using it as
        payment, Bottom Funnel has got you covered. With units of cryptocurrency
        created through a process called mining, this guide will teach you
        everything you need to know about them! Next, we'll look at how users
        can buy and sell currencies in the market.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
