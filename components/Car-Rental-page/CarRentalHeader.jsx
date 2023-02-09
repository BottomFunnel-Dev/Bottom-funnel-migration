import React from "react";
import styles from "./carRentalHeader.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/car rental.json";
import Lottie from "react-lottie";

export const CarRentalHeader = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.RGcarRentalContainer}>
      <div className={styles.RGcarRentalHeaderLeft}>
        <h1> Car Rental App Solution</h1>
        <p>
          The Screeno ecosystem is designed to help you generate profit. Set up
          complete sales and marketing funnels with ease using the Screeno
        </p>
        <button>Start Free Trail </button>
      </div>

      <div className={styles.RGcarRentalHeaderRight}>
        <Lottie options={lottieDefaultOptions} width={600} height={600} />
        {/* <imgs width="100%" src="Images/Car-Rental-Page-Images/Banner1.png" alt="BannerImage" /> */}
      </div>
    </div>
  );
};
