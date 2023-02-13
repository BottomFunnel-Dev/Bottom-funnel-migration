import React from "react";
import styles from "./AlcoholBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/alchohal delivery.json";
import Lottie from "react-lottie";

export const AlcoholBanner = () => {
  
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.alcoholBannerMain}>
      <div className={styles.alcoholBannerContent}>
        <h1>Alcohol Delivery</h1>
        <p>
          There's no need to run out and purchase alcohol anymore! With alcohol delivery services, you can have all the wine, 
          beer, and liquor your heart desires delivered right to your door.
        </p>
        <button> GET STARTED </button>
      </div>
      <div className={styles.alcoholBannerImage}>
        <Lottie options={lottieDefaultOptions} width={700} height={600} />
      </div>
    </div>
  );
};
