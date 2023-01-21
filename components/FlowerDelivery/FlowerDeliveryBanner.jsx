import React from 'react';
import styles from "./FlowerDelevrybanner.module.css";

const FlowerDeliveryBanner = () => {
  return (
    <div className={styles.flowerdeliverybannermaindiv}>
      <div className={styles.flowerdeliverybannerleftbox}>
        <h1>
          <span> On-Demand </span>Flower Delivery App 
        </h1>
        <p>
          Get your florist delivery business online with a flower delivery app development solution to provide superior
          service experience to customers
        </p>
        <button className={styles.flowerdeliverybannerbutton}>Get Started</button>
      </div>

      <div className={styles.flowerdeliverybannerrightbox}>
        <div className={styles.flowerdeliverybannerimageone}>
          <img src='/Images/Flowerdeliverypage/Rectangle 1954.png' alt='image' />
        </div>
        <div className={styles.flowerdeliverybannerimagetwo}>
          <img src='/Images/Flowerdeliverypage/Bannerpicture.png' alt='image' />
        </div>
      </div>
    </div>
  );
};

export default FlowerDeliveryBanner

