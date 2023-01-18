import React from "react";
import styles from "./ToolDeliveryBanner.module.css";

const TooDeliveryBanner = () => {
  return (
    <div
      className={styles.tdtooldeliverycontainer}
    >
      <div className={styles.txtooldeliverysubcontainer}>
        <div className={styles.tdtooldeliveryleft}>
          <div className={styles.tdtooldeliverysometxtbox}>
            <h1>On-Demand</h1>
            <h2>Tool Delivery Solution</h2>
            <p>
              Tool delivery app is a smart solution which makes your life as an
              entrepreneur much easier. It helps you deliver tools faster than
              ever before without any hassles or complications of any sort.
            </p>
            <button className={styles.tdtooldeliverybtn}>Get Started</button>
          </div>
        </div>

        <div className={styles.tdtooldeliveryright}></div>
      </div>
    </div>
  );
};

export default TooDeliveryBanner;
