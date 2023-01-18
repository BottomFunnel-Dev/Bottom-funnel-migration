import React from "react";
import styles from "./SaleforceBanner.module.css";

export const SaleforceBanner = () => {
  return (
    <div className={styles.SaleforceBannerMain}>
      <h1>
        <span>Salesforce</span> Solutions
      </h1>
      <div className={styles.SaleforceBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is here to help you improve your entire company processes
        and find answers to crucial business problems. We will assist you in
        managing your company operations by designing and developing salesforce
        applications that are both extremely functional and beautiful. As a
        salesforce development company, we have experience in delivering
        expertise in everything we do.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
