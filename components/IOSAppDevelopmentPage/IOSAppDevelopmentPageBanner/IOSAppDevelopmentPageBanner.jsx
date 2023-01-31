import React from 'react'
import styles from './IOSAppDevelopmentPageBanner.module.css';
import * as reactAnimation from "../../../public/Animation/ios.json";
import Lottie from "react-lottie";

export const IOSAppDevelopmentPageBanner = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: false,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <div className={styles.IOSAppDevelopmentbannermainbox}>
        <div className={styles.IOSAppDevelopmentbannermainboxinnertextdiv}>
          <h1><span>IOS App</span> Development Services</h1>
          <p>
            We deliver iOS apps keeping in mind both the business side and the end-users. Hire iOS software developers now.
          </p>

          <button className={styles.IOSAppDevelopmentbannerbutton}>Get Started</button>
        </div>
        <div className={styles.IOSandroidIcon}>
        <Lottie options={lottieDefaultOptions} width={500} height={800} />
        </div>
      </div>
    </div>
  )

}
