import Image from "next/image";
import React from "react";
import styles from "./internetofthingsProccess.module.css";

export default function InternetofthingsProccess() {
  const cardsData = [
    {
      title: "Discovery",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets.",
      image: "/Images/internetOfThingsPhotos/icons/safari.webp",
    },
    {
      title: "Design",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets.",
      image: "/Images/internetOfThingsPhotos/icons/creation.webp",
    },
    {
      title: "Digital Twin",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets.",
      image: "/Images/internetOfThingsPhotos/icons/fingerprint.webp",
    },
    {
      title: "Edge Computing",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets.",
      image: "/Images/internetOfThingsPhotos/icons/ai-cloud.webp",
    },
    {
      title: "Pluggable Cloud Services",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets.",
      image: "/Images/internetOfThingsPhotos/icons/tech.webp",
    },
    {
      title: "Third-Party Integration",
      description:
        "Gain additional information to solve problems efficiently by accessing live data of business operations and assets.",
      image: "/Images/internetOfThingsPhotos/icons/architecture.webp",
    },
  ];

  return (
    <div className={styles.internetofthingsProccessContainer}>
      <h1>Our Development Process</h1>
      <div>
        {cardsData.map(({ title, description, image }) => (
          <div className={styles.internetofthingsProccessCards}>
            <span>
              <Image
                src={image}
                alt={image}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
