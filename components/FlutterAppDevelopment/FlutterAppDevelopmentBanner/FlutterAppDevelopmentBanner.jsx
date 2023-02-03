import React from "react";
import styles from "./FlutterAppDevelopmentBanner.module.css";
import * as reactAnimation from "../../../public/Animation/flutter.json";
import Lottie from "react-lottie";

export const FlutterAppDevelopmentBanner = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <div className={styles.flutterAppDevbannermainbox}>
        <div className={styles.flutterAppDevbannermainboxinnertextdiv}>
          <h1><span>Flutter App</span> Development</h1>
          <p>
            Bottom funnel flutter app development is a complete package which offers you all the services to develop an application from scratch. With our eminent developers and designers, you can be sure that your smart application will be up-to-date with all the changes in technology.
          </p>
          <button className={styles.flutterAppDevbannerbutton}>Get Started</button>
        </div>
        <div className={styles.FlutterIcon}>
        <Lottie options={lottieDefaultOptions} width={800} height={700} />
        </div>
      </div>
    </>
  );
};
