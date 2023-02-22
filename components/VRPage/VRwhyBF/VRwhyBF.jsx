import React from "react";
import styles from "./VRwhyBF.module.css";
import Image from "next/image";

export default function VRwhyBF() {
  const cardsData = [
    {
      title: "Healthcare",
      body: [
        "Surgery simulations.",
        "Psychological therapy.",
        "Gamified rehabilitation",
      ],
      image: "/Images/VRPhotos/doctor.webp",
    },
    {
      title: "Education",
      body: ["Immersive training.", "Immersive research."],
      image: "/Images/VRPhotos/vr-gaming.webp",
    },
    {
      title: "Manufacturing",
      body: [
        "Virtual design and engineering.",
        "Training.",
        "Maintenance guidance.",
      ],
      image: "/Images/VRPhotos/metaverse.webp",
    },
    {
      title: "Retail",
      body: ["VR showrooms.", "Training.", "Gamified rehabilitation"],
      image: "/Images/VRPhotos/clothing.webp",
    },
    {
      title: "Real estate",
      body: [
        "Virtual design and engineering.",
        "Training.",
        "Maintenance guidance.",
      ],
      image: "/Images/VRPhotos/building.webp",
    },
    {
      title: "Advertising",
      body: [
        "Gamified ads.",
        "Virtual events.",
        "Virtual design and engineering.",
      ],
      image: "/Images/VRPhotos/video-player.webp",
    },
  ];

  return (
    <div className={styles.VRwhyBFContainer}>
      <div className={styles.VRwhyBFBackgroundRectangle}>
        <div className={styles.VRwhyBFImage1}>
          <Image
            src={"/Images/VRPhotos/rectangle-top.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.VRwhyBFImage2}>
          <Image
            src={"/Images/VRPhotos/rectangle-bottom.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className={styles.VRwhyBFMain}>
        <h1>IOT solutions Bottom funnel Builds</h1>
        <div className={styles.VRServicesHrLLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.VRwhyBFCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.VRwhyBFCardsMain}>
                <div>
                  <Image
                    src={image}
                    alt={title}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h3>{title}</h3>
                <ul>
                  {body.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
