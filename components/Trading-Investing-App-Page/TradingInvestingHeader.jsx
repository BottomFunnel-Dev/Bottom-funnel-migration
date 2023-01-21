import React from 'react';
import styles from './tradingInvestingHeader.module.css';

export const TradingInvestingHeader = () => {
  return (
    <div className={styles.RGtradingInvestingMainContainer}>
      <div className={styles.RGtradingInvestingLeftContainer}>
        <h1>Trading & Investing App</h1>
        <p>
        Get a solution to build your own app from 
        scratch using trading and investing as the
         main feature. We offer both the Android and 
         iOS versions of our software, so you can deploy 
         it across all your devices. With our easy-to-use 
         interface, you'll be up and running in no time!
        </p>
        <button className={styles.RGTIbtn}>Get started</button>
      </div>

      <div className={styles.RGtradingInvestingRightContainer}>
        <img width="80%" src="Images/Trading-investing-App/banners-backgrounds/Group-340155.png" alt="images" />
      </div>

    </div>
  );
};
