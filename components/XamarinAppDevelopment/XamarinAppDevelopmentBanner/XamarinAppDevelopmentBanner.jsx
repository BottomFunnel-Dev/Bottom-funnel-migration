import React from "react";
import styles from "./XamarinAppDevelopmentBanner.module.css";
import * as reactAnimation from "../../../public/Animation/Xamarin.json";
import Lottie from "react-lottie";


export const XamarinAppDevelopmentBanner = () => {
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
      <div className={styles.XamarinAppDevbannermainbox}>
        <div className={styles.XamarinAppDevbannermainboxinnertextdiv}>
          <h1>Xamarin App Development</h1>
          <p>We're passionate about our work, and our xamarin app development services reflect that</p>

          <button className={styles.XamarinAppDevbannerbutton}>Get Started</button>
        </div>

        <div className={styles.xamrinIcon}>
        <Lottie options={lottieDefaultOptions} width={600} height={700} />
        </div>
      </div>
    </>
  );
};
