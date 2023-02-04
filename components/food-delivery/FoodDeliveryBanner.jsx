import React from "react";
import styles from "./FoodDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/FoodDelivery.json";
import Lottie from "react-lottie";

export const FoodDeliveryBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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
        {/* <img height="100%"
          src="Images/foodDeliveryphotos/FoodDeliveryNewBanner.png"
          alt="Food Delivery Banner image"
        /> */}
        <Lottie options={lottieDefaultOptions} width={700} height={600} />
      </div>
    </div>
  );
};
