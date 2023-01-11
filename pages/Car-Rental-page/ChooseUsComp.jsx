import React from 'react';
import styles from './chooseUsComp.module.css';

export const ChooseUsComp = () => {
  return (
    <div className={styles.RGchooseUsCompContainer}>
      <div className={styles.RGchooseUsCompLeft}>
        <h1>Why Choose <span className={styles.RGchooseUsCompspanTag}>Us</span> </h1>
      </div>

      <div className={styles.RGchooseUsComphrLine}></div>

      <div className={styles.RGchooseUsCompRight}>
        <p>
          we understand that our customers are selective and want options when it comes to where they vacation.
          That's why we offer a variety of locations worldwide, including select airports and major cities across
          North America and Europe. We also have an extensive selection of vehicles in different sizes and styles to fit
          everyone's needs.
        </p>
      </div>
    </div>
  );
};
