import React from 'react';
import styles from "./AgricultureBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/Agriculture.json";
import Lottie from "react-lottie";

const AgricultureBanner = () => {

    const lottieDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: reactAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={styles.agricultureBannerParentDiv}>
            <div className={styles.agricultureMeatBannerContentDiv}>
                <h1>
                    <span> Agriculture </span>
                    App Solution
                </h1>

                <p>
                    Impossible Beef is made from plants for people who love meat. Anything you can make with ground beef,
                    you can make with Impossible Beef Made From Plants-tacos, sliders, lasagna, you name it! It's packed with
                    protein and nutrients, has 0mg cholesterol (13g total fat, 6g saturated fat per serving), and is way
                    better for the planet than beef from cows.
                </p>

                <button> Get Started </button>
            </div>

            <div className={styles.agricultureBannerImageDiv}>
                <Lottie options={lottieDefaultOptions} width={700} height={700} />
                {/* <img src='/Images/Agriculture/AgricultureNewBanner.png' alt='image' /> */}
            </div>

        </div>
    );
};

export default AgricultureBanner;