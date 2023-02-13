import React from "react";
import styles from "./IcecreamBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Icecream.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const IcecreamBanner = () => {
  return (
    <div className={styles.icecreambannermainboxes}>
      <div className={styles.icreambannersometextbox}>
        <h1> Launch an On-Demand </h1>
        <h2>
          <span className={styles.specialcolor}> Ice-cream </span> Delivery App
        </h2>
        <p>
          Looking to build an online presence for your ice cream delivery
          service? Create and customize your very own branded app in seconds
          with Jotform’s ready-made Ice Cream Delivery App. You can include an
          online menu with photos and descriptions, create a catering form, link
          to your social media accounts, and list your contact information.
          Share your app by sending email invitations, generating a unique QR
          code, or by seamlessly embedding it in your website.
        </p>
        <button className={styles.icecreambannerbutton}>Get Started</button>
      </div>

      <div className={styles.iceCreamBannerAnimationDiv}>
        <Player className={styles.iceCreamBannerMainAnimation}
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
