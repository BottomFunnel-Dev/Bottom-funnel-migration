import React from "react";
import styles from "./Logictransport.module.css";
import Image from "next/image";

export default function Logictransport() {
  const cardsData = [
    {
      title: "Shipping Logistics Management Software Development",
      image: "/Images/logistic/icons/truck.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      title: "Fleet Management software Development",
      image: "/Images/logistic/icons/person.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      title: "Telematics Software Development",
      image: "/Images/logistic/icons/coding.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      title: "Asset Tracking Software Development",
      image: "/Images/logistic/icons/browser.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      title: "Transportation Management Software Development",
      image: "/Images/logistic/icons/post.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      title: "Logistics And Freight Management Development",
      image: "/Images/logistic/icons/construction.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
  ];

  return (
    <div className={styles.logisticContainer}>
      <h2>Logistics &Transport Software Devlopment Services We Offer </h2>
      <p>
        We provide website development services that allow you to track
        shipments, manage inventory, book appointments, and more. Our expertise
        also comes in handy when it comes pre-installed on modern vehicles that
        are designed for efficiency and safety during their journey.
      </p>
      <div className={styles.logisticCards}>
        {cardsData.map(({ title, description, image }) => (
          <div className={styles.logisticContent}>
            <div>
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
              <h2>{title}</h2>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
