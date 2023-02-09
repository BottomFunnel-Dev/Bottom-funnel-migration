import React from 'react';
import styles from "./FlowerDelevrybanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Flower delivery.json";
import Lottie from "react-lottie";

const FlowerDeliveryBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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
        <Lottie options={lottieDefaultOptions} width={700} height={600} />

  
      </div>
    </div>
  );
};

export default FlowerDeliveryBanner

