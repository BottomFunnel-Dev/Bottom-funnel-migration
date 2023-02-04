import React from 'react';
import styles from "./EyeWearDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/eye wear.json";
import Lottie from "react-lottie";

export const EyeWearDeliveryBanner = () => {
  
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.eyeweardeliverybannermainboxes}>
      <div className={styles.eyewearbannersometextboxes}>
        <h1>
          <a className={styles.colored}>Eyewear</a>
          Delivery App
        </h1>

        <p>
          Design Sprint facility quick ideation, prototyping and validation of a product idea.Find Solutions for business problems
          through an integrated design thinking approch.
        </p>
        <button className={styles.Eyeweardeliverybannerbutton}>Get Started</button>
      </div>

      <div className={styles.eyeWearDeliveryBannerAnimationDiv}>
        <Lottie options={lottieDefaultOptions} width={700} height={700} />
      </div>
    </div>
  );
};

