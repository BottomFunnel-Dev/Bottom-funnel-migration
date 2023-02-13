import React from 'react';
import styles from "./PlantBasedMeatBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/Plant based meat.json";
import Lottie from "react-lottie";

export const PlantBasedMeatBanner = () => {
    
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    return (
        <div className={styles.plantBasedBannerParentDiv}>
            <div className={styles.plantBasedMeatBannerContentDiv}>
                <h1>
                    <span>Plant Based</span>
                    Meat Delivered App
                </h1>

                <p>
                    Impossible Beef is made from plants for people who love meat. Anything you can make with ground beef,
                    you can make with Impossible Beef Made From Plants-tacos, sliders, lasagna, you name it! It's packed with
                    protein and nutrients, has 0mg cholesterol (13g total fat, 6g saturated fat per serving), and is way
                    better for the planet than beef from cows.
                </p>

                <button> Get Started </button>
            </div>

            <div className={styles.plantBasedBannerImageDiv}>
                <Lottie options={lottieDefaultOptions} width={500} height={600} />
            </div>
        </div>
    );
};
