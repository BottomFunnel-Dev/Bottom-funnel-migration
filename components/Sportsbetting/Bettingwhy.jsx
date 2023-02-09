import Image from "next/image";
import React from "react";
import styles from "./bettingwhy.module.css";

export const Bettingwhy = () => {
  const bettingwhydata = [
    {
      cardtitle: "100% Customzation",
      cardIcon: "/Images/sportsbettingpage/icons/Component41.webp",
    },
    {
      cardtitle: "Highly Scalable",
      cardIcon: "/Images/sportsbettingpage/icons/Component42.webp",
    },
    {
      cardtitle: "Dedicated Support",
      cardIcon: "/Images/sportsbettingpage/icons/Component43.webp",
    },
    {
      cardtitle: "Global Solution",
      cardIcon: "/Images/sportsbettingpage/icons/Component44.webp",
    },
  ];

  return (
    <div className={styles.bettingwhy}>
      <div className={styles.bettingText}>
        <h1>
          Why Choose Bottom Funnel As Your Sports Betting App Development
          Company?
        </h1>

        <p>
          We know how critical it is for your users to have an enjoyable
          experience while placing their bets, and we are committed to making
          that happen! Using our extensive expertise in developing mobile apps,
          we have designed an engaging and intuitive interface that will ease
          the user's transition from desktop to mobile.
        </p>
      </div>

      <div className={styles.solutionsFeatures}>
        {bettingwhydata.map((item, index) => (
          <div key={index} className={styles.whyCards}>
            <div className={styles.whycardIcon}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src={item.cardIcon}
                alt="images"
              />
            </div>
            <div className={styles.solutionContent}>
              <h5>{item.cardtitle}</h5>
              <p>{item.CardDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
