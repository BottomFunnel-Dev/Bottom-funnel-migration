import React from "react";
import styles from "./SalesforceWhyBF.module.css";

export const SalesforceWhyBF = () => {
  const cardData = [
    {
      title: "Lightning Components",
      body: "With our brand new app front-end development, you can quickly build user-friendly apps that are easy to navigate and understand.",
    },
    {
      title: "System Integration Services",
      body: "Bottom Funnel is a full-service Salesforce integration company that develops custom salesforce integrations that connect multiple database and services with Force.com apps in real-time.",
    },
    {
      title: "Development Services",
      body: "Bottom Funnel has harnessed this power and used it to create customized Force.com-based web and mobile applications that help them automate their business processes.",
    },
    {
      title: "App Personalization",
      body: "Our team is experienced and specialized in creating and customizing salesforce apps. We understand how to integrate powerful features and functions that add value to your organization.",
    },
    {
      title: "Managed Services",
      body: "Bottom Funnel is your perfect partner for managing Salesforce, it provides an all solution that enables you to work with the knowledge and expertise of Salesforce administrator.",
    },
    {
      title: "Migration Services",
      body: "Bottom Funnel is the go-to company for enterprises that need help migrating their business solutions and databases to Force.com-based automation solutions.",
    },
  ];
  return (
    <div className={styles.SalesforceWhyBFMain}>
      <h1>Why Bottom Funnel For Salesforce Solutions</h1>
      <div className={styles.SalesforceServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.SalesforceWhyBFContainer}>
        <div className={styles.SalesforceWhyBFImage}>
          <img
            src="Images/salesforcePhotos/vector.png"
            alt="Vector big size image"
          />
        </div>
        <div className={styles.SalesforceWhyBFContent}>
          {cardData.map(({ title, body }, idx) => {
            return (
              <div>
                <h4>{title}</h4>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
