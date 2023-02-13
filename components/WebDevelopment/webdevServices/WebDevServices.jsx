import React from "react";
import styles from "./webDevServices.module.css";

export default function WebDevServices  ({ webservicesContent }) {
  return (
    <div className={styles.mainboxeswebservices}>
      <div className={styles.webDevServices}>
        <div className={styles.webdevTextServices}>
          <h1>
            {webservicesContent.title}
            <span className={styles.spanText}>Services</span> Provided By Us
          </h1>
          <p>{webservicesContent.description}</p>
        </div>
        <div className={styles.devServicesFlex}>
          {webservicesContent.serviceCard.map((item, index) => (
            <div className={styles.devServiceCard} key={index}>
              <div className={styles.devServiceIcon}>
                <img src={item.icon} alt={item.icon} />
              </div>
              <div className={styles.devServiceText}>
                <h5>{item.serviceTitle}</h5>
                <p>{item.serviceDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
