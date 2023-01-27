import React from "react";
import styles from "./FoodDeliveryBanner.module.css";

export const FoodDeliveryBanner = () => {
  return (
    <div className={styles.foodDeliveryBannerMain}>
      <div className={styles.foodDeliveryBannerContent}>
        <div>
          <h1>Food Delivery App Solutions</h1>
          <p>
            Spice up the competition in the industry with your own food delivery
            app!
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className={styles.foodDeliveryBannerImage}>
        <img
          height="100%"
          src="Images/foodDeliveryphotos/FoodDeliveryNewBanner.png"
          alt="Food Delivery Banner image"
        />
      </div>
    </div>
  );
};
