import React from "react";
import styles from "./FlowerDelevrybanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Flower delivery.json";
import { Player } from "@lottiefiles/react-lottie-player";

const FlowerDeliveryBanner = () => {
  return (
    <div className={styles.flowerdeliverybannermaindiv}>
      <div className={styles.flowerdeliverybannerleftbox}>
        <h1>
          <span> On-Demand </span> Flower Delivery App
        </h1>
        
        <p>
          Get your florist delivery business online with a flower delivery app
          development solution to provide superior service experience to
          customers
        </p>

        <button className={styles.flowerdeliverybannerbutton}>
          Get Started
        </button>
      </div>

      <div className={styles.flowerdeliverybannerrightbox}>
        <Player className={styles.flowerDeliveryBannerAnimation}
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

export default FlowerDeliveryBanner;
