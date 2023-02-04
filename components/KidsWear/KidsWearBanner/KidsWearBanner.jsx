import React from 'react';
import styles from './KidsWearBanner.module.css';
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/baby and kids wear.json";
import Lottie from "react-lottie";

export const KidsWearBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <div className={styles.KidsWearbannermainbox}>
        <div className={styles.KidsWearbannermainboxinnertextdiv}>
          <h1> Baby & Kids Wear App Solution </h1>
          <p>
            Are you looking for a Baby & Kids Wear App Solution? Look no further than Ours ! We offer an exciting and easy-to-use app
            solution that is perfect for any baby or kid's clothing needs. With our app, you can easily find and purchase clothes for
            your little ones with just a few clicks. Plus, our app makes it easy to keep track of your child's clothing size so you
            always know what to buy when they need new clothes.
          </p>

          <button className={styles.KidsWearbannerbutton}>Start Free Trail</button>
        </div>

        <div className={styles.kidsWearBannerAnimationDiv}>
          <Lottie options={lottieDefaultOptions} width={600} height={600} />
        </div>
      </div>
    </div>
  );
};
