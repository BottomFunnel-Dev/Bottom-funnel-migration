import React from "react";
import styles from "./SalesforceServicesPoints.module.css";

export const SalesforceServicesPoints = () => {
  const cardsData = [
    {
      title: "Better Time management",
      body: "Time management is a huge advantage of Salesforce and one of the best ways to help your business grow and thrive.",
    },
    {
      title: "Ultimate Accessbility",
      body: "Salesforce is cloud software, so you can access it anywhere you have internet access.",
    },
    {
      title: "Increased Revenue",
      body: "Running a business in today's world can be expensive without Salesforce. On any given day, your team may generate a large amount of data that needs to be stored.",
    },
    {
      title: "Greater Customer Satisfaction",
      body: "As well as increased revenue, it's safe to assume that your customers will be happier when you work with a company that understands their needs and the state of their relationship.",
    },
  ];
  return (
    <div className={styles.SalesforceServicesPointsContainer}>
      {cardsData.map(({ title, body }, idx) => (
        <div>
          <div className={styles.SalesforceServicesPointsMain}>
            <h3>0{idx + 1}</h3>
            <span></span>
          </div>
          <div className={styles.SalesforceServicesPointsContent}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
