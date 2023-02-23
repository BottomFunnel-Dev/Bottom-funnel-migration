import React from "react";
import styles from "./internetofthingsCapacities.module.css";
import IotCapacityCards from "./iotCapacityCards";

export default function InternetofthingsCapacities() {
  const cardsData = [
    {
      title: "Live Remote Monitoring & Troubleshooting",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets",
      style: {
        borderRight: "2px solid #ef4c23",
        borderBottom: "2px solid #ef4c23",
      },
      spanColor: "fb5607",
    },
    {
      title: "decision support & data analytics",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets",
      style: {
        borderLeft: "2px solid #ef4c23",
        borderBottom: "2px solid #ef4c23",
        borderRight: "2px solid #ef4c23",
      },
      spanColor: "ffbe0b",
    },
    {
      title: "edge computing",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets",
      style: {
        borderLeft: "2px solid #ef4c23",
        borderBottom: "2px solid #ef4c23",
      },
      spanColor: "3a86ff",
    },
    {
      title: "digital twin",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets",
      style: {
        borderRight: "2px solid #ef4c23",
        borderTop: "2px solid #ef4c23",
      },
      spanColor: "76c893",
    },
    {
      title: "pluggable cloud services",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets",
      style: {
        borderRight: "2px solid #ef4c23",
        borderLeft: "2px solid #ef4c23",
        borderTop: "2px solid #ef4c23",
      },
      spanColor: "c9184a",
    },
    {
      title: "third-party integration",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets",
      style: {
        borderLeft: "2px solid #ef4c23",
        borderTop: "2px solid #ef4c23",
      },
      spanColor: "5a189a",
    },
  ];
  return (
    <div className={styles.internetofthingsCapacitiesContainer}>
      <h1>Our IOT Capabilities</h1>
      <div>
        {cardsData.map((elem, idx) => (
          <IotCapacityCards data={elem} num={idx + 1} />
        ))}
      </div>
    </div>
  );
}
