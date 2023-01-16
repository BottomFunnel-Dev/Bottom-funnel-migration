import React from "react";
import styles from "./DigitalMarketingBanner.module.css";

export const DigitalMarketingBanner = () => {
  return (
    <div className={styles.digitalmarketingbannermainboxes}>
      <div className={styles.digitalmarketingbannerspacefortext1}>
        <h1>Creative Digital Marketing Agency</h1>
        <p>
          Creative Digital Marketing Agency is a leading and reliable digital marketing agency based in India offering outstanding digital solutions to its clients through SEO, SEM, SMM, PPC, Social Marketing, Web Designing and WordPress Development Services.
        </p>

        <button className={styles.digitalmarketingbannerbutton}>Contact us</button>
      </div>
    </div>
  );
};
