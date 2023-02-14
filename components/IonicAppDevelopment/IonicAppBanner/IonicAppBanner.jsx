import React from "react";
import styles from "./IonicAppBanner.module.css";
import * as reactAnimation from "../../../public/Animation/ionic.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const IonicAppBanner = () => {
  return (
    <>
      <div className={styles.ionicAppBannermainbox}>
        <div className={styles.ionicAppBannermainboxinnertextdiv}>
          <h1>Ionic App Development Services</h1>
          <p>
            Our ionic app development services include up-to date integrated
            seamless apps that are highly functional and combines irresistible
            features to suit your business. We help you build great ionic
            applications that are not just browser-based. They also penetrate IU
            WebView for operating systems and web view for Android. Our apps
            make use of low-level browsers using tools such as Cordova or
            PhoneGap.
          </p>

          <button className={styles.ionicAppBannerbutton}>Get Started</button>
        </div>
        <div className={styles.ionicIcon}>
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
    </>
  );
};
