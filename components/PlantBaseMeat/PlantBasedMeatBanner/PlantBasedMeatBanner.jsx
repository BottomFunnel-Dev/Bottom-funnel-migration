import React from 'react';
import styles from "./PlantBasedMeatBanner.module.css";

export const PlantBasedMeatBanner = () => {
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
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedBannerImage.png' alt='image' />
            </div>
        </div>
    );
};
