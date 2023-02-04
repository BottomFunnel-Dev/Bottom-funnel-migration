import React from 'react'
import styles from "./MeatDeliveryBanner.module.css"
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Meat delivery.json";
import Lottie from "react-lottie";

export const MeatDeliveryBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.meatdeliverybannermainboxes}>
      <div className={styles.meatdeliverybannerfortextboxes}>
        <h1> Meat Delivery Application Solutions </h1>
        <p> Spice up the competition in the industry with your own Meat Delivery App! </p>

        <button className={styles.meatdeliverybanner}> Get Started </button>
      </div>

      <div className={styles.meatDeliveryBannerAnimationDiv}>
        <Lottie options={lottieDefaultOptions} width={700} height={700} />
      </div>
    </div>
  )
}

