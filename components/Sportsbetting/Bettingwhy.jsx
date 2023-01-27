import React from "react";
import styles from "./bettingwhy.module.css";
export const Bettingwhy = () => {
  const bettingwhydata = [
    {
      cardtitle: "100% Customzation",
      cardIcon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/carpoolingpage/icons/Component 6.png",
    },
    {
      cardtitle: "Highly Scalable",
      cardIcon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/carpoolingpage/icons/Component 7.png",
    },
    {
      cardtitle: "Dedicated Support",
      cardIcon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/carpoolingpage/icons/Component 8.png",
    },
    {
      cardtitle: "Global Solution",
      cardIcon: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/carpoolingpage/icons/Component 9.png",
    },
  ];

  return (
    <div className={styles.bettingwhy}>
      <div className={styles.bettingText}>
        <h1>
          Why Choose Bottom Funnel As Your Sports Betting App Development Company?
        </h1>

        <p>
          We know how critical it is for your users to have an enjoyable experience while placing their bets, and we are committed to making
          that happen! Using our extensive expertise in developing mobile apps, we have designed an engaging and intuitive interface that will
          ease the user's transition from desktop to mobile.
        </p>
        
      </div>

      <div className={styles.solutionsFeatures}>
        {bettingwhydata.map((item, index) => (
          <div key={index} className={styles.whyCards}>
            <div className={styles.whycardIcon}>
              {" "}
              <img src={item.cardIcon} alt="images" />
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
