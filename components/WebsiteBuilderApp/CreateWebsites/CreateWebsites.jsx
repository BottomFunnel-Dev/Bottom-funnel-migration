import Image from 'next/image';
import React from 'react';
import styles from "./CreateWebsites.module.css";

export const CreateWebsites = () => {
    return (
        <div className={styles.createWebsiteParentDiv}>

            <div className={styles.createWebsiteImageMainDiv}>
                <div className={styles.createWebsiteImageDivBackImage}>
                    <Image src={'/Images/WebsiteBuilderApp/RightSideBackgroundImage.webp'}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "15%" }}
                    />

                    <div className={styles.createWebsiteImageDivTopImage}>
                        <Image src={'/Images/WebsiteBuilderApp/CreateWebsiteFitnessImage.webp'}
                            alt={'image'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "15%" }}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.createWebsiteContentMainDiv}>
                <h1> Create high-converting websites & landing pages </h1>
                <p>
                    Quickly & easily publish your first webpages in a matter of minutes. Start with a conversion-optimized,
                    mobile-responsive tempplate. Then customizeit inside the Drag & Drop Builder, and launch a professional-
                    looking landing page or website that's designed to convert.
                </p>

                <div className={styles.createWebsiteOptionsDiv}>
                    <div className={styles.createWebsiteOptionInnerDiv1}>
                        <button className={styles.createWebsiteFitnessButton}> Fitness </button>
                        <button className={styles.createWebsiteChatAppButton}> Chat app </button>
                    </div>

                    <div className={styles.createWebsiteOptionInnerDiv2}>
                        <button className={styles.createWebsiteFoodAppButton}> Food App </button>
                        <button className={styles.createWebsiteEcommerceButton}> E-commerce  </button>
                        <button className={styles.createWebsiteMoreButton}> And More  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
