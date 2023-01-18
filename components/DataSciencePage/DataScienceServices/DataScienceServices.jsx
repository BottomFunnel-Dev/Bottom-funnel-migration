import React from "react";
import styles from "./DataScienceServices.module.css";

export const DataScienceServices = () => {
  const cardData = [
    {
      title: "Business Needs Analysis",
      points: [
        "Outlining business objectives to meet with data science.",
        "Defining issues with the existing data science solution (if any)",
      ],
      image: "Images/DataSciencePhotos/point-1.png",
    },
    {
      title: "Data Preparation",
      points: [
        "Determining data source for data science.",
        "Data collection, transformation and cleaning.",
      ],
      image: "Images/DataSciencePhotos/point-2.png",
    },
    {
      title: "Machine Learning (ML) Model",
      points: [
        "Choice of the optimal data science techniques and methods.",
        "Defining the criteria for the future ML model(s) evalutation.",
      ],
      image: "Images/DataSciencePhotos/point-3.png",
    },
    {
      title: "Delivering Data Science Output",
      points: [
        "Determining data source for data science.",
        "Data collection, transformation and cleansing.",
      ],
      image: "Images/DataSciencePhotos/point-4.png",
    },
    {
      title: "User & admin training",
      points: ["Data science support consultations."],
      image: "Images/DataSciencePhotos/point-5.png",
    },
  ];

  return (
    <div className={styles.DataScienceServicesContainer}>
      <div className={styles.DataScienceServicesHeading}>
        <h1>Our Data Science Services</h1>
        <div className={styles.DataScienceUniqueHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
      </div>
      <div className={styles.DataScienceServicesMain}>
        {cardData.map(({ title, points, image }) => (
          <div key={title}>
            <img src={image} alt={title} />
            <ul>
              {points.map((elem) => (
                <li>{elem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
