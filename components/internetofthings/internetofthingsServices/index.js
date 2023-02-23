import Image from "next/image";
import React from "react";
import styles from "./internetofthingsServices.module.css";

export default function InternetofthingsServices() {
  const cardsData = [
    {
      title: "Smart Homes",
      description:
        "Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      image: "/images/internetOfThingsPhotos/icons/home.webp",
    },
    {
      title: "Iot In Healthcare",
      description:
        "Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      image: "/images/internetOfThingsPhotos/icons/heart.webp",
    },
    {
      title: "Iot in Manufacturing",
      description:
        "Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      image: "/images/internetOfThingsPhotos/icons/factory.webp",
    },
    {
      title: "Iot In Retail",
      description:
        "Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      image: "/images/internetOfThingsPhotos/icons/cart.webp",
    },
  ];

  return (
    <div className={styles.internetofthingsServicesContainer}>
      <div>
        <h1>Offering IOT Services</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </p>
        <div>
          {cardsData.map(({ title, description, image }) => (
            <div key={title} className={styles.internetofthingServicesCards}>
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
      <span>
        <Image
          src={"/Images/internetOfThingsPhotos/screens.webp"}
          alt={"internetOfThingsPhotos/screens.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
