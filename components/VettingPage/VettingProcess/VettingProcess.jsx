import React from "react";
import styles from "./VettingProcess.module.css";

export const VettingProcess = () => {
  return (
    <div className={styles.vettingProcessContainer}>
      <div>
        <h1>
          Our <span>Vetting</span> Process
        </h1>
        <h2>
          Over 5000 talents apply every month, but only 4% make it to the
          network.
        </h2>
        <p>
          Surveys show that more and more companies are turning to brand-new
          vetting methods in order to make a hiring decision. But you know what
          they say? A thorough background check is the best way to find out
          everything you need to know about your new employee before you hire
          them.
        </p>
        <div>
          <img
            src="/Images/VettingPhotos/flowchart.png"
            alt="vetting flow chart"
          />
        </div>
      </div>
    </div>
  );
};
