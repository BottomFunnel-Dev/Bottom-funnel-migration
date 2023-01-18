import React from "react";
import styles from "./EnterpriseWebBanner.module.css";

export const EnterpriseWebBanner = () => {
  return (
    <div className={styles.EnterpriseWebBannerMain}>
      <h1>Enterprise Web Solutions</h1>
      <div className={styles.EnterpriseWebBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Enterprise Web Services (EWS) is a system of reference that enables
        enterprises to scale their applications, access commonly shared source
        data in real-time and highly available architecture. The goal of EWS is
        to enable enterprises to access commonly required source data and make
        them more productive with it.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
