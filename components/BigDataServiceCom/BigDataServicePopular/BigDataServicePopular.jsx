import React from "react";
import styles from "./BigDataServicePopular.module.css";

export const BigDataServicePopular = () => {
  const cardsData = [
    {
      title: "Data Management",
      body: "Bottom funnel is an ultimate partner to handle that data massive. We are experts in creating, managing, and migrating petabyte-scale data lakes and warehouses using the latest advances in technology. Businesses can therefore get optimized storage costs, maintainability, and retrieval. Moreover, our Engineers have hands-on experience in creating large scale distributed systems with efficient storage and retrieval mechanisms.",
      image: "Images/BigDataServicePhotos/data-management.jpg",
    },
    {
      title: "DataOps in Big Data Services",
      body: "Big data is an absolute boon for organizations looking to gain ground on the competition. Data analytics and Big Data has become a critical component in how companies make decisions, providing insights that other can't. But as the popularity of this technology continues to grow, it's essential we bring in automation and agile development methodologies to help us optimize our data lifecycle and break down silos across various units within the company.",
      image: "Images/BigDataServicePhotos/dataOps.jpg",
    },
    {
      title: "BI & Analytics for Robust Analytics Solutions",
      body: "Bottom Funnel's Business Intelligence & Analytics practice is helping stakeholders to derive insights from data. Our Big Data teams help build customized dashboards, set up enterprise search, and engineer real-time visualization of data streams. We leverage popular BI tools and build custom platforms using open source technologies to maximize customization and reduce licensing costs.",
      image: "Images/BigDataServicePhotos/robust.jpg",
    },
    {
      title: "Data Science",
      body: "Bottom Funnel is a top data science firm that has the expertise, skills, and resources to help you get results quickly. We combine cutting-edge analytics with creative design thinking to create intelligent solutions that achieve your goals. So whether you're looking for insights on customer behavior or want to build a predictive model, we have the skill set you need.",
      image: "Images/BigDataServicePhotos/data-science.jpg",
    },
  ];

  return (
    <div className={styles.BigDataServicePopularMain}>
      <h1>Popular Big Data Services</h1>
      <div className={styles.BigDataServicePopularHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Maintaining a high level of user engagement keeps your business
        relevant. Our technology and design thinking advancements help make this
        happen.
      </p>
      <div className={styles.BigDataServicePopularContent}>
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className={styles.BigDataServicePopularCardsContent}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className={styles.BigDataServicePopularCardsImages}>
                <img
                  src={image}
                  alt={title}
                  data-src="https://via.placeholder.com/365x500.png"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.BigDataServicePopularButton}>
        <h3>Talk with our experts in Big Data to get started</h3>
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
