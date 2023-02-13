import React from "react";
import styles from "./ToolDeliveryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/tool deliver.json";
import { Player } from "@lottiefiles/react-lottie-player";

const TooDeliveryBanner = () => {
  return (
    <div className={styles.tdtooldeliverycontainer}>
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
          <Player className={styles.toolDeliveryMainAnimation}
            src={reactAnimation}
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
          ></Player>
        </div>
      </div>
    </div>
  );
};

export default TooDeliveryBanner;
