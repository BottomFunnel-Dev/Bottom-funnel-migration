import React from "react";
import styles from "./IonicAppBanner.module.css";
import * as reactAnimation from "../../../public/Animation/ionic.json";
import Lottie from "react-lottie";


export const IonicAppBanner = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: false,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <div className={styles.ionicAppBannermainbox}>
        <div className={styles.ionicAppBannermainboximagein}>
          <img src="" alt="" />
        </div>
        <div className={styles.ionicAppBannermainboxinnertextdiv}>
          <h1>Ionic App Development Services</h1>
          <p>
            Our ionic app development services include up-to date integrated seamless apps that are highly functional and combines irresistible features to suit your business.
            We help you build great ionic applications that are not just browser-based. They also penetrate IU WebView for operating systems and web view for Android. Our apps
            make use of low-level browsers using tools such as Cordova or PhoneGap.
          </p>

          <button className={styles.ionicAppBannerbutton}>Get Started</button>
        </div>
        <div className={styles.ionicIcon}>
        <Lottie options={lottieDefaultOptions} width={500} height={700} />
        </div>
      </div>
    </>
  );
};
