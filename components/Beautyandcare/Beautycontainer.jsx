import React from "react";
import styles from "./Beautycontainer.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/beauty and salon.json";
import Lottie from "react-lottie";

export default function Beautycontainer() {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.beautycontainer}>
      <div className={styles.beautyleft}>
        <h1 className={styles.heading}>Beauty And Salon App Development Solutions</h1>
        <p>
          Beautify Your Business with An App! Enhance your salon's customer
          experience with our cutting-edge beauty & salon app development.
        </p>
        <button> Get Started</button>
      </div>

      <div className={styles.mobile}>
        <Lottie options={lottieDefaultOptions} width={700} height={650} />
        {/* <img src="/Images/beautycare/beautymobile.png" alt="image" /> */}
      </div>
    </div>
  );
}
