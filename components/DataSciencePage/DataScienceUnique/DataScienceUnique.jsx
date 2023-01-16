import React from "react";
import styles from "./DataScienceUnique.module.css";

export const DataScienceUnique = () => {
  return (
    <div className={styles.DataScienceUniqueContainer}>
      <div className={styles.DataScienceUniqueContent}>
        <h1>Data Science Services</h1>
        <div className={styles.DataScienceUniqueHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel is the Data Science Consulting firm that helps companies
          run experiments on their data in search of business insights.
          ScienceSoft renders data science consulting leveraging Machine
          Learning, Artificial Intelligence, and Deep Learning technologies to
          meet our clients' most deliberate analytics needs. Our experts have
          extensive experience in both production and development environments
          and have worked with a wide variety of tools such as Apache Spark, R,
          Python, Julia, etc. Don't waste time trying to find the right partner,
          hire us and be ready to reap the benefits! We will do everything we
          can so you can focus on running your business instead of worrying
          about how your data is being used by other companies. Top-notch data
          scientists are on hand to use the information in your way, so that
          processes can run more smoothly. With this knowledge, you can get
          maximum benefits from your data and make informed decisions for
          future.
        </p>
      </div>
      <div className={styles.DataScienceUniqueImage}>
        <img src="Images/DataSciencePhotos/unique.png" alt="HTML fit vector" />
      </div>
    </div>
  );
};
