import React from 'react';
import styles from "./FinTechSolutionBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/fintech.json";
import Lottie from "react-lottie";

export const FinTechSolutionBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.fintechsolutionbannermainbox}>
      <div className={styles.fintechsolutionbannertextboxes}>
        <h1>Fintech App Solution</h1>
        <p>
          The screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease
          using the screeno app.
        </p>

        <button className={styles.fintechsolutionbannerbutton}>Get Started</button>
      </div>

      <div className={styles.fintechSolutionBannerAnimationDiv}>
        <Lottie options={lottieDefaultOptions} width={700} height={600} />
      </div>
    </div>
  );
};
