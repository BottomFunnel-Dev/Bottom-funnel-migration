import React from "react";
import styles from "./Awards.module.css";

const Awards = () => {
  return (
    <div className={styles.awardSection}>
      <div>
        <h2>The One Stop Shop For All Your Needs</h2>
        <p>
          Let's put an end to your bottom of the funnel issues. From design to
          development, Bottom Funnel's hand is always there to help you craft a
          successful campaign.
        </p>
        <h4>AWARDS AND ACCOLADES</h4>
        <div id={styles.awards}>
          <div>
            <img src="Images/appfutura.png" alt="" />
          </div>
          <div>
            <img src="Images/clutch.png" alt="" />
          </div>
          <div>
            <img src="Images/goodfirms.png" alt="" />
          </div>
          <div>
            <img src="Images/itfirms.png" alt="" />
          </div>
          <div>
            <img src="Images/topdev.png" alt="" />
          </div>
          <div>
            <img src="Images/upwork.png" alt="" />
          </div>
          <div>
            <img src="Images/topSoftware.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
