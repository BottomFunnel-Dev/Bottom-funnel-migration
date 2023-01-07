import React from "react";
import styles from "./AnalysisOffer.module.css";

export const AnalysisOffer = () => {
  const cardsData = [
    {
      title: "Facial Recognition",
      body: "Identification of a specific person's face to provide exclusive sedrvices, identify suspects and trespassers, etc.",
      image: "Images/AnalysisSoftwarePhotos/facial.png",
    },
    {
      title: "Emotion recognition",
      body: "Assising the level of a customer's satisfaction to solve unique business challenges.",
      image: "Images/AnalysisSoftwarePhotos/emotion.png",
    },
    {
      title: "Grading and sorting",
      body: "Object quality analysis for streamlined classifying and sorting.",
      image: "Images/AnalysisSoftwarePhotos/grading.png",
    },
    {
      title: "Damage assessment",
      body: "Identifying damage issues in complex electronic devices, vehicles, etc.",
      image: "Images/AnalysisSoftwarePhotos/machine.png",
    },
    {
      title: "Organizing visual information",
      body: "Indexing visual databases.",
      image: "Images/AnalysisSoftwarePhotos/database.png",
    },
    {
      title: "3D reconstruction",
      body: "Producing 3D models from 2D data (e.g. medical scans).",
      image: "Images/AnalysisSoftwarePhotos/desktop.png",
    },
    {
      title: "Optical character recognition",
      body: "Reading texts and number sequences (printed and handwritten).",
      image: "Images/AnalysisSoftwarePhotos/scaning.png",
    },
    {
      title: "Event detection",
      body: "Identifying behavior anomalies and alarms in surveillance videos, counting people traversing a passage.",
      image: "Images/AnalysisSoftwarePhotos/alarm.png",
    },
  ];

  return (
    <div className={styles.AnalysisOfferContainer}>
      <h1>
        <span>Image Analysis</span> We Offers
      </h1>
      <div className={styles.AnalysisOfferHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.AnalysisOfferMain}>
        {cardsData.map(({ title, body, image }) => (
          <div key={title}>
            <span>
              <div>
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{body}</p>
            </span>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
