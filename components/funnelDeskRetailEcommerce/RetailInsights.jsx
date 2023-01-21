import React from "react";
import styles from "./RetailInsights.module.css";

export const RetailInsights = () => {
  return (
    <div className={styles.retailinsightsmainbox}>
      <div className={styles.retailinsightsupperboximageandtextflexbox}>
        <div className={styles.retailinsightsupperboxtextleft}>
          <div className={styles.retailinsightsupperboxtextleftouterbox}>
            <div className={styles.retailinsightsupperboxtextsvgallfilethere}>
              <h1>Level up with data & insights</h1>
              <p>
                Surprise and delight your shoppers with excellent
                service.Monitor customer feedback,stay on team performance and
                identify bottlenecks with granular and insights.
              </p>
              <ul>
                <li>
                  Forecast volumes and spot trends to improve customer service
                </li>
                <li>
                  Use real-time team dashboards to stay on top of your daily
                  operations.
                </li>
                <li>
                  Gather customer feedback to improve the buying experience
                </li>
              </ul>
              <h6 className={styles.colored}>
                <span>Explore contextual collaboration</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.retailshopupperboximageright}>
          <img
            src="/Images/Retail&ecommerce/Animations/animation5.gif"
            alt="Retail&ecommerce/Animations/animation5.gif"
          />
        </div>
      </div>
    </div>
  );
};
