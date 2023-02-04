import React from 'react';
import styles from "./LaundaryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/laundry.json";
import Lottie from "react-lottie";

const LaundryPageBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.laundrypagebannercontainer}>
      <div className={styles.laundryPagebannersubcontainer}>

        <div className={styles.laundrypagebannerleft}>

          <h1> Build an On-Demand App for Your Laundry Business </h1>
          <p>
            Being in the best on demand laundry app development Company, we develop complete on-demand app and provides a
            solution. Our Mobile app development team is all determined to make the on-demand app revolution in various industries
            that require instant provisioning of benefits and services. Thus, we had a very welcoming look at the laundry service
            market.
          </p>

          <button className={styles.laundrypagebannerbutton}>Get Started</button>
        </div>

        <div className={styles.laundaryPageBannerAnimationDiv}>
          <Lottie options={lottieDefaultOptions} width={600} height={500} />
        </div>
      </div>
    </div>
  );
};

export default LaundryPageBanner

