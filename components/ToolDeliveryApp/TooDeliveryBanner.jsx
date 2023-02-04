import React from "react";
import styles from "./ToolDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/tool deliver.json";
import Lottie from "react-lottie";

const TooDeliveryBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      className={styles.tdtooldeliverycontainer}
    >
      <div className={styles.txtooldeliverysubcontainer}>
        <div className={styles.tdtooldeliveryleft}>
          <div className={styles.tdtooldeliverysometxtbox}>
            <h1> On-Demand </h1>
            <h2> Tool Delivery Solution </h2>
            <p>
              Tool delivery app is a smart solution which makes your life as an
              entrepreneur much easier. It helps you deliver tools faster than
              ever before without any hassles or complications of any sort.
            </p>
            <button className={styles.tdtooldeliverybtn}> Get Started </button>
          </div>
        </div>

        <div className={styles.toolDeliveryAnimationDiv}>
          <Lottie options={lottieDefaultOptions} width={700} height={600} />
        </div>
      </div>
    </div>
  );
};

export default TooDeliveryBanner;
