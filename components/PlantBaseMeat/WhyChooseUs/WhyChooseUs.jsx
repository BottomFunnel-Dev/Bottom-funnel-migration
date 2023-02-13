import React from 'react'
import styles from './WhyChooseUs.module.css';

export const WhyChooseUs = () => {
    return (
        <>
            <div className={styles.whyChooseUsPlantMeatExpertiseMainDiv}>
                <div className={styles.whyChooseUsPlantMeatExpertiseIconContainer}>
                    <div className={styles.whyChooseUsPlantMeatExpertiseIconOuterBox}>
                        <div className={styles.whyChooseUsPlantMeatExpertiseContainerDiv}>
                            <div className={styles.whyChooseUsPlantMeatExpertiseIcon}>
                                <img src='/Images/PlantBasedMeat/icons/customize.png' alt='image' />
                            </div>

                            <div className={styles.whyChooseUsPlantMeatExpertiseIconHeading}>
                                <h4> 100% Customization </h4>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, officiis perferendis aperiam voluptas. </p>
                            </div>
                        </div>

                       
                    </div>

                </div>

                
            </div>
        </>
    );
};
