import React from "react";
import styles from "./RetailsCustomer.module.css";

export const RetailsCustomer = () => {
  return (
    <div className={styles.retailcustomermainboxes}>
      <div className={styles.retailcustomerleftrightboxflextype}>
        <div className={styles.retailcustomerleftboxflextype}>
          <img
            src="/Images/Retail&ecommerce/Animations/animation3.gif"
            alt="Retail&ecommerce/Animations/animation3.gif"
          />
        </div>
        <div className={styles.retailcustomerrightboxflextype}>
          <h1>Scale Your Customer service with AI and bots</h1>
          <p>
            Shopping isn't a 9-5 job.Deliver instant answers round the clock and
            keep your customers happy,even while your team is asleep.
          </p>
          <ul>
            <li>Scale your customer service by automating routine queries</li>
            <li>Provide 24/7 support for instant responses with chatbots.</li>
            <li>Escalate complex queries from bots to live-agents.</li>
            <li>
              Predict purchase intent and convert service request into new
              sales.
            </li>
          </ul>
          <h6 className={styles.colored}>
            Explore freddy, the AI-powerd omnibot
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
  );
};
