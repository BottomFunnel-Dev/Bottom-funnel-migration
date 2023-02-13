import React from "react";
import styles from "./EyeWearDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/eye wear.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const EyeWearDeliveryBanner = () => {
  return (
    <div className={styles.eyeweardeliverybannermainboxes}>
      <div className={styles.eyewearbannersometextboxes}>
        <h1>
          <a className={styles.colored}>Eyewear</a>
          Delivery App
        </h1>

        <p>
          Design Sprint facility quick ideation, prototyping and validation of a
          product idea.Find Solutions for business problems through an
          integrated design thinking approch.
        </p>
        <button className={styles.Eyeweardeliverybannerbutton}>
          Get Started
        </button>
      </div>

      <div className={styles.eyeWearDeliveryBannerAnimationDiv}>
        <Player
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
