import React from "react";
import styles from "./SalesforceProcess.module.css";
import Image from "next/image";

export const SalesforceProcess = () => {
  return (
    <div className={styles.SalesforceProcessContainer}>
      <h1>Process of Salesforce</h1>
      <div className={styles.SalesforceServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        With Salesforce, no sales process is too big or too small for its
        powerful adoption software. That means that regardless of whether you
        have a few folks who are new to the field or standing on the cusp of
        greatness, your company can benefit from best practices and an organized
        approach to growing sales.
      </p>
      <div className={styles.SalesforceProcessMain}>
        <div className={styles.SalesforceProcessImage}>
              <Image
                  src={"/Images/salesforcePhotos/flowchart.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
        </div>
        <div className={`${styles.SalesforceProcessQualification} ${styles.SalesforceProcessContent}`}>
          <p>
            For a lead to be qualified four factors are further access by the
            sales and marketing team. Through these, they further ensure if the
            lead is a potential customer or not.
          </p>
          <ol>
            <li>Budget</li>
            <li>Authority</li>
            <li>Need</li>
            <li>Timeline</li>
          </ol>
        </div>
        <div className={`${styles.SalesforceProcessLeadLifeCycle} ${styles.SalesforceProcessContent}`}>
          <p>
            The top of the funnel represents the goal of the company for lead
            generation. While the bottom-bost part signifies the number of
            customers that got converted from the list of leads, by the end of
            the sales process.
          </p>
          <ol>
            <li>Awareness</li>
            <li>Interest</li>
            <li>Desire</li>
            <li>Action</li>
          </ol>
        </div>
        <div className={`${styles.SalesforceProcessSalesFunnel} ${styles.SalesforceProcessContent}`} >
          <p>
            In the case of the lead life cycle, whenever a lead makes it through
            the end of the cycle and gets rejected, they are again allowed to
            begin from the starting point of the cycle.
          </p>
          <ol>
            <li>Inquiry</li>
            <li>MQL</li>
            <li>SAL</li>
            <li>SQL</li>
          </ol>
        </div>
        <div className={`${styles.SalesforceProcessLeadStatuses} ${styles.SalesforceProcessContent}`}>
          <p>
            All the main team following up with the lead process, that is,
            marketing, presales, and inbound teams work closely to make sure
            that the lead statuses are properly defined. These lead statuses are
            classified as follows:
          </p>
          <ol>
            <li>Open/New</li>
            <li>Working</li>
            <li>Unqualified</li>
            <li>Conclusion</li>
          </ol>
        </div>
      </div>
      <div className={styles.SalesforceProcessButton}>
        <h3>Talk with our experts in salesforce to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
