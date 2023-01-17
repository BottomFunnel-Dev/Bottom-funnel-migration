import React from 'react';
import styles from './tradingInvestingHeader.module.css';

export const TradingInvestingHeader = () => {
  return (
    <div className={styles.RGtradingInvestingMainContainer}>
      <div className={styles.RGtradingInvestingLeftContainer}>
        <h1>Trading & Investing App</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sed aperiam repellendus ullam quisquam facilis.
          Non eveniet, dicta at recusandae itaque voluptatem inventore veritatis quae, voluptatum minima, similique aliquid beatae?
        </p>
        <button className={styles.RGTIbtn}>Get started</button>
      </div>

      <div className={styles.RGtradingInvestingRightContainer}>
        <img width="80%" src="Images/Trading-investing-App/banners-backgrounds/Group-340155.png" alt="images" />
      </div>

    </div>
  );
};
