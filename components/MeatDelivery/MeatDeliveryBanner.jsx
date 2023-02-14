import React from "react";
import styles from "./MeatDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Meat delivery.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const MeatDeliveryBanner = () => {
  return (
    <div className={styles.meatdeliverybannermainboxes}>
      <div className={styles.meatdeliverybannerfortextboxes}>
        <h1> Meat Delivery Application Solutions </h1>
        <p>
          {" "}
          Spice up the competition in the industry with your own Meat Delivery
          App!{" "}
        </p>

        <button className={styles.meatdeliverybanner}> Get Started </button>
      </div>

      <div className={styles.meatDeliveryBannerAnimationDiv}>
        <Player
          src={reactAnimation}
          background="transparent"
          speed="1"
          loop
          controls
          autoplay
        >
        </Player>
      </div>
    </div>
  );
};
