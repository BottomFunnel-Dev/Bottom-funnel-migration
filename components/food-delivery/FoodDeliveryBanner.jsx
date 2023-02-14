import React from "react";
import styles from "./FoodDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/FoodDelivery.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const FoodDeliveryBanner = () => {
  return (
    <div className={styles.foodDeliveryBannerMain}>
      <div className={styles.foodDeliveryBannerContent}>
        <div>
          <h1> Food Delivery App Solutions </h1>
          <p>
            Spice up the competition in the industry with your own food delivery
            app!
          </p>
          <button> Get Started </button>
        </div>
      </div>

      <div className={styles.foodDeliveryBannerImage}>
        <Player className={styles.foodDeliveryBannerAnimation}
          src={reactAnimation}
          background="transparent"
          speed="1"
          loop
          controls
          autoplay
        ></Player>
      </div>
    </div>
  );
};
