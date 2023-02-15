import Image from "next/image";
import React from "react";
import styles from "./carpoolingSolutions.module.css";

export default function CarpoolingSolutions() {
  const solutioncard = [
    {
      cardtitle: "Entrepreneurs",
      CardDescription:
        "Entrepreneurs are a special breed of people. They see opportunity where others see only problems. They're willing to take risks where others play it safe. And they have the courage to stand up and be counted when others are content to stay in the background.",
      cardIcon: "/Images/carpoolingpage/icons/Component5.png",
    },

    {
      cardtitle: "Enterprises",
      CardDescription:
        "Enterprises are businesses that are characterized by high levels of risk and uncertainty. They are typically large, complex organizations with a variety of stakeholders. Enterprises are often in industries that are undergoing rapid change, such as technology or finance.",
      cardIcon: "/Images/carpoolingpage/icons/Component4.png",
    },

    {
      cardtitle: "Car/ Taxi Pooling",
      CardDescription:
        "Have you ever been stuck in traffic and wished there was a way to avoid it? Well, there is! Car pooling, also known as ride sharing, is when a group of people travel together in one vehicle. Not only does this reduce the number of cars on the road.",
      cardIcon: "/Images/carpoolingpage/icons/Component3.png",
    },

    {
      cardtitle: "Real-Time Tracking",
      CardDescription:
        "Real-time tracking is an exciting new technology that allows you to track the movements of people or objects in real time. This means that you can see where they are and what they are doing at any given moment.",
      cardIcon: "/Images/carpoolingpage/icons/Component2.png",
    },
  ];

  return (
    <div className={styles.carpoolSolutions}>
      <div className={styles.carpoolSolutionIntro}>
        <h1>
          Rideshare & Carpoooling App Development Solutions We Provide
        </h1>

        <p>
          Looking for a way to reduce your commute costs and help the
          environment? Check out the rideshare and carpooling app development
          solutions we provide! Our team can help you create a custom app that
          makes it easy for people in your area to find each other and share
          rides. Plus, our apps are designed to be user-friendly and efficient,
          so you'll be saving time and money in no time!
        </p>
      </div>

      <div className={styles.solutionsFeatures}>
        {solutioncard.map((item, index) => (
          <div className={styles.solutionCards}>
            <div className={styles.solutioncardIcon}>
              {" "}
              <Image src={item.cardIcon}
                alt={"images"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={styles.solutionContent}>
              <h5> {item.cardtitle} </h5>
              <p> {item.CardDescription} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
