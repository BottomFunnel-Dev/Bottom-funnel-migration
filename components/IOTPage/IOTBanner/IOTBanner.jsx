import React from "react";
import styles from "./IOTBanner.module.css";

export const IOTBanner = () => {
  return (
    <div className={styles.IOTBannerMain}>
      <h1>
        Inernet of Things (IOT) services help elaborate your idea of IoT
        adoption and set up secure technology infrastructure for advanced data
        tasks.
      </h1>
      <div className={styles.IOTBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel IoT development can be a challenging process. However,
        when you partner with Us, it becomes an easy one. We have the expertise
        and experience to help you build successful IoT solutions that will
        change the way your customers do business.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
