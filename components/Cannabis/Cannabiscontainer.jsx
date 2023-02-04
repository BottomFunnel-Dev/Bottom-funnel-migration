import React from 'react';
import styles from "./Cannabiscontainer.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Cannabis.json";
import Lottie from "react-lottie";

export const Cannabiscontainer = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.cannabuscontainermainboxes}>
      <div className={styles.cannabuscontainerboxforsometext}>
        <h1> Medical Cannabis Delivery App </h1>
        <p>
          Take your dispensary business on-demand with Uber for medical cannabis to ease the ordering process for medical patients
        </p>
        <button className={styles.cannabuscontainerbutton}> Get Started </button>
      </div>

      <div className={styles.CannabisContainerAnimationDiv}>
        <Lottie options={lottieDefaultOptions} width={500} height={500} />
      </div>
    </div>
  )
}
