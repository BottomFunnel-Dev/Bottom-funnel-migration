import React from "react";
import styles from "./StartupSolutionsBanner.module.css";

export const StartupSolutionsBanner = () => {
  return (
    <div className={styles.StartupSolutionsBannerMain}>
      <h1>
        <span>Startup</span> Solutions
      </h1>
      <div className={styles.StartupSolutionsBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is a startup consulting firm that helps new enterprises to
        grow and flourish. We believe in giving back, so we provide our clients
        with access to our vast network of experts who are passionate about
        helping businesses succeed.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
