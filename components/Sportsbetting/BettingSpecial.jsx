import Image from "next/image";
import React from "react";
import styles from "./bettingSpecial.module.css";

export default function BettingSpecial() {
  const apps = [
    {
      title: "Singles",
      description:
        "The singles betting application is based on low risk, gain more model. Users can bet with real money or virtual currency.",
      img: "/Images/sportsbettingpage/banners/football.webp",
    },
    {
      title: "Head to Head",
      description:
        "In this betting type, a user bet on the outcome of the game allowing them to win if their team will or lose.",
      img: "/Images/sportsbettingpage/banners/kickboxing.webp",
    },
    {
      title: "Totals",
      description:
        "Casinos are based on “Totals” betting application type in which a user bet on the outcome of “X” number.",
      img: "/Images/sportsbettingpage/banners/casino.webp",
    },
    {
      title: "Multiples",
      description:
        "This type of betting game application works on high risk, high reward models.",
      img: "/Images/sportsbettingpage/banners/cricket.webp",
    },
  ];

  return (
    <div className={styles.bettingSpecial}>
      <h1>We Specialize in Creating All Types of Betting Applications</h1>

      <div className={styles.specialApps}>
        {apps.map((item, index) => (
          <div className={styles.specialCard}>
            <div className={styles.specialCardImage}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src={item.img}
                alt="image"
              />
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
}
