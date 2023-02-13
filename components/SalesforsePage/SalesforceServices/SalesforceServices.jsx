import React from "react";
import styles from "./SalesforceServices.module.css";
import { SalesforceServicesborder } from "./SalesforceServicesborder/SalesforceServicesborder";
import { SalesforceServicesPoints } from "./SalesforceServicesPoints/SalesforceServicesPoints";
import Image from "next/image";

export default function SalesforceServices() {
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
          <Image
            src={"/Images/salesforcePhotos/services.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.SalesforceServicesContent}>
          <SalesforceServicesborder />
          <SalesforceServicesPoints />
        </div>
      </div>
    </div>
  );
}
