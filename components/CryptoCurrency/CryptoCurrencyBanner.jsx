import React from 'react';
import styles from "./CryptoCurrencyBanner.module.css";

export const CryptoCurrencyBanner = () => {
  return (
    <div className={styles.cryptocurrencybannermainbox}>
      <div className={styles.cryptocurrencybannermainboxinnertextdiv}>
        <h1>Cryptocurrency App Development</h1>
        <p>Bottom funnel is the easiest way to get started in the cryptocurrency market. With our user-friendly platform, you can buy and sell cryptocurrencies with just a few clicks. We offer a wide range of coins, including Bitcoin, Ethereum, Litecoin, and more. So whether you're a beginner or a seasoned investor, we have the perfect solution for you.</p>

        <button className={styles.cryptocurrencybannerbutton}>Get Started</button>
      </div>
    </div>
  )
}








