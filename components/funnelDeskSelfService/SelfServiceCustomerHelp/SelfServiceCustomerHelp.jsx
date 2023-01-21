import React from "react";
import styles from "./SelfServiceCustomerHelp.module.css";

export const SelfServiceCustomerHelp = () => {
  return (
    <div className={styles.selfServicesCustomerHelpParentDiv}>
      <div className={styles.selfServicesCustomerHelpInnerDiv}>
        <div className={styles.selfServicesCustomerHelpContentDiv}>
          <h1>Let customers help each other</h1>
          <p>
            Leverage past discussions to help new customers find answers on any
            topic, without any intervention from your support system.
          </p>
        </div>
        <div className={styles.selfServicesCustomerHelpImageDiv}>
          <img src="/Images/SelfService/TwoThreeHead.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
