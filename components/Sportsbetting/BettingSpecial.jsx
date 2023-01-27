import React from "react";
import styles from "./bettingSpecial.module.css";
export const BettingSpecial = () => {
  const apps = [
    {
      title: "Singles",
      description:
        "The singles betting application is based on low risk, gain more model. Users can bet with real money or virtual currency.",
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/sportsbettingpage/banners/football.png",
    },
    {
      title: "Head to Head",
      description:
        "In this betting type, a user bet on the outcome of the game allowing them to win if their team will or lose.",
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/sportsbettingpage/banners/kickboxing.png",
    },
    {
      title: "Totals",
      description:
        "Casinos are based on “Totals” betting application type in which a user bet on the outcome of “X” number.",
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/sportsbettingpage/banners/casino.png",
    },
    {
      title: "Multiples",
      description:
        "This type of betting game application works on high risk, high reward models.",
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/sportsbettingpage/banners/cricket.png",
    },
  ];

  return (
    <div className={styles.bettingSpecial}>
      <h1>
        We Specialize in Creating All Types of Betting Applications
      </h1>
      
      <div className={styles.specialApps}>
        {apps.map((item, index) => (
          <div className={styles.specialCard}>
            <div className={styles.specialCardImage}>
              <img src={item.img} alt="image" />
            </div>

            <div className={styles.specialText}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
