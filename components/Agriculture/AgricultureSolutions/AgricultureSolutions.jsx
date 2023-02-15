import Image from "next/image";
import React from "react";
import styles from "./AgricultureSolutions.module.css";

export default function AgricultureSolutions() {
  const agricultureSolutionsCardsData = [
    {
      title: "Agriculture Farm Management Software Solutions",
      body: "Experience Quick Service which completes in just 90 minutes, which will help you save your precious time and efforts of Visiting workshops to get your car serviced.",
      image:
        "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage1.webp",
    },
    {
      title: "Land Management Software Solutions",
      body: "Meter per second recruits best in class German Car Technicians with a minimum of 8+ years of experience and train them. After enabling them with garage Nation's Standards they are assigned for Services/Reapirs.",
      image:
        "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage2.webp",
    },
    {
      title: "Percision Management Software Solutions",
      body: "Meter per second provied 100% Transparent Service which means all parts are opened right in front of you while performing service and no more surprised or extra spares or costs.",
      image:
        "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage3.webp",
    },
    {
      title: "Food Safety & Compliance Software",
      body: "Experience Quick Service which completes in just 90 minutes, which will help you save your precious time and efforts of Visiting workshops to get your car serviced.",
      image:
        "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage4.webp",
    },
    {
      title: "Farm Accounting Software",
      body: "Meter per second recruits best in class German Car Technicians with a minimum of 8+ years of experience and train them. After enabling them with garage Nation's Standards they are assigned for Services/Reapirs.",
      image:
        "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage5.webp",
    },
    {
      title: "Livestock Management Software",
      body: "Meter per second provied 100% Transparent Service which means all parts are opened right in front of you while performing service and no more surprised or extra spares or costs.",
      image:
        "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage6.webp",
    },
  ];

  return (
    <div className={styles.agricultureSolutionsParentDiv}>
      <div className={styles.agricultureSolutionsHeadingDiv}>
        <h1>
          <span> Exclusive </span> Solutions
        </h1>
      </div>

      <div className={styles.agricultureSolutionsMainDataCards}>
        {agricultureSolutionsCardsData.map(({ title, body, image }, idx) => (
          <div key={idx}>
            <div>
              <Image src={image}
                alt={title}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h3> {title} </h3>
            <p> {body} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
