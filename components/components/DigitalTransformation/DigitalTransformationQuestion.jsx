import React from "react";
import styles from "./DigitalTransformationQuestion.module.css";

export const DigitalTransformationQuestion = () => {
  return (
    <div className={styles.digitaltransformationgotaquestionbanner}>
      <div className={styles.digitaltransformationleftboxgotaquestiontype}>
        <h1>Got Questions ?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          orci sed justo volutpat interdum sit amet in metus. Nam at
        </p>
      </div>
      <div className={styles.digitaltransformationrightboxgotaquestiontype}>
        <button className={styles.digitaltransformationquestionbannerbutton}>
          Contact us
        </button>
      </div>
    </div>
  );
};
