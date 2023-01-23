import React from 'react';
import styles from "./PlantBasedGetSolution.module.css";

export const PlantBasedGetSolution = () => {
    return (

        <div className={styles.plantBasedGetSolutionParentDiv}>

            <div className={styles.plantBasedGetSolutionBackImageDiv}>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/MobileScreenMidBanner.png' alt='image' />
            </div>

            <div className={styles.plantsBasedGetSolutionMainContentDiv}>
                <div className={styles.plantBasedGetSolutionSubContentDiv}>
                    <h3> 
                        Get a complete Solution with advance & flawless features with our
                        Plant Based Meat Delivery app Development Company
                    </h3>

                    <p>
                        We are excited to listen from you and help you bring your idea to reality with the help of our On
                        Demand Plant based Meat Delivery App Solutions.
                    </p>

                    <button> Get Started </button>
                </div>

                {/* <div className={styles.plantBasedGetSolutionInnerImageDiv}>
                    <img src='/Images/PlantBasedMeat/banners & backgrounds/GetSolutionMobileImage.png' alt='image' />
                </div> */}
            </div>
        </div>
    );
};
