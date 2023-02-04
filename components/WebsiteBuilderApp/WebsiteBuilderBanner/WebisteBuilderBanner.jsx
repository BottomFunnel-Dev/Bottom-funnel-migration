import React from 'react';
import styles from "./WebsiteBuilderBanner.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/Website builder.json";
import Lottie from "react-lottie";

export const WebisteBuilderBanner = () => {
    
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    return (
        <div className={styles.websiteBuilderBannerParentDiv}>
            <div className={styles.websiteBuilderBannerImageDiv}>
                <img src='/Images/WebsiteBuilderApp/BannerBackground.png' alt='image' />
                <div className={styles.websiteBuilderBannerTopComp}>
                    <div className={styles.websiteBuilderBannerContentDiv}>
                        <h1> Create Website without Limits </h1>
                        <p>
                            Discover the platform that gives you the  freedom to create,design,manage and develop your web presence
                            exactly the way you want.
                        </p>

                        <button> Get Started </button>
                    </div>

                    <div className={styles.websiteBuilderBannerTopImageComp}>
                        <Lottie options={lottieDefaultOptions} width={700} height={600} />
                        {/* <img src='/Images/WebsiteBuilderApp/BannerTopImage.png' alt='image' /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};


// color quote #f5f5f5