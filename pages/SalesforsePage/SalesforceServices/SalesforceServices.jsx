import React from "react";
import styles from "./SalesforceServices.module.css";
import { SalesforceServicesborder } from "./SalesforceServicesborder/SalesforceServicesborder";
import { SalesforceServicesPoints } from "./SalesforceServicesPoints/SalesforceServicesPoints";

export const SalesforceServices = () => {
  return (
    <div className={styles.SalesforceServicesContainer}>
      <h1>What is Salesforce Services</h1>
      <div className={styles.SalesforceServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Salesforce is the world's leading CRM (customer relationship management)
        platform. Help your marketing, sales, commercial, service, and IT teams
        work together from anywhere. This keeps your customers happy wherever
        they are. Watch demo.
      </p>
      <div className={styles.SalesforceServicesMain}>
        <div className={styles.SalesforceServicesVector}>
          <img
            src="Images/salesforcePhotos/services.png"
            alt="SalesforceServices vector"
          />
        </div>
        <div className={styles.SalesforceServicesContent}>
          <SalesforceServicesborder />
          <SalesforceServicesPoints />
        </div>
      </div>
    </div>
  );
};
