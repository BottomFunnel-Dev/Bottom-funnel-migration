import React from "react";
import styles from "./VettingRoles.module.css";
import Image from "next/image";

export const VettingRoles = () => {
  const cardData = [
    {
      title: "Email Marketers",
      icons: "/Images/VettingPhotos/email.webp",
      body: "Email marketing is a form of marketing that you can use to alert your email list customers about new products, discounts, and other services.",
    },
    {
      title: "Salesforce experts",
      icons: "/Images/VettingPhotos/salesforce.webp",
      body: "With the changing global business landscape, there is a need for professionals who understand the complexities of the business.",
    },
    {
      title: "Mobile App Developer",
      icons: "/Images/VettingPhotos/mobile.webp",
      body: "Bottom Funnel is one such company that caters to the growing need for mobile applications among businesses big and small.",
    },
    {
      title: "Frontend Developer",
      icons: "/Images/VettingPhotos/desktop.webp",
      body: "HTML, CSS, and JavaScript are three major languages that you need to know when it comes to building a website or app.",
    },
    {
      title: " Backend Developer",
      icons: "/Images/VettingPhotos/setting.webp",
      body: "A back-end developer is an expert in developing and maintaining the mechanisms that process data and perform actions on a website.",
    },
    {
      title: "UXUI Developer",
      icons: "/Images/VettingPhotos/pen.webp",
      body: "Bottom Funnel is an interactive web development company that designs and builds user-friendly websites and web applications.",
    },
  ];

  return (
    <div className={styles.vettingRolesMain}>
      <h1>
        <span>Role</span> which have already been vetted through the above
        process
      </h1>
      <div className={styles.vettingRolesContainer}>
        <div className={styles.vettingRolesContent}>
          {cardData.map(({ title, body, icons }, idx) => {
            return (
              <div key={idx}>
                <span>
                  <h4>{title}</h4>
                <div className={styles.vettingRolesCardsIconsImages}>
                <Image
                src={icons}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
                </div>
                </span>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
