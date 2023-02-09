import React from "react";
import styles from "./IOTwhyBF.module.css";
import Image from "next/image";

export const IOTwhyBF = () => {
  const cardsData = [
    {
      title: "Connected products",
      body: [
        "Optimize device functioning and use: check device productivity, add new features and integrate these features into everyday operations.",
        "Create new revenue models: check how connected things are used by customers to offer better cooperation options, for example, user-based pricing.",
      ],
      image: "/Images/IOTPhotos/digital.webp",
    },
    {
      title: "Smart Maintenance",
      body: [
        "Reveal incipient problems and carry out remote repairs to reduce field service costs.",
        "Validate warranty claims and identify warranty agreement violations.",
        "Uncover failure patterns to reduce future product or equipment failures, thus, avoid associated service.",
      ],
      image: "/Images/IOTPhotos/garage.webp",
    },
    {
      title: "Smart cities, smart utilities",
      body: [
        "Improved quality, speed, and interactivity of urban services.",
        "More efficient communication among smart city residents and facilities.",
        "More convenient traffic.",
        "Optimized energy consumption.",
      ],
      image: "/Images/IOTPhotos/smart-city.webp",
    },
    {
      title: "Industrial IoT",
      body: [
        "Optimize equipment utilization and reveal bottlenecks in the manufacturing process.",
        "Avoid downtime by timely detecting potential failures and scheduling predictive maintenance.",
        "Improve production quality",
        "Increase employees' safety",
      ],
      image: "/Images/IOTPhotos/sensor.webp",
    },
    {
      title: "Smart supply chain management",
      body: [
        "Internet of medical things.",
        "Industrial robot simulation software.",
        "Connected consumer products.",
        "Smart cities, etc.",
      ],
      image: "/Images/IOTPhotos/supply-chain.webp",
    },
    {
      title: "Connected health",
      body: [
        "Real-time heart rate, blood pressure and sugar monitoring.",
        "Real-time alerting when potentially dangerous variations from the norms are observed.",
        "Indentifying risks (for example, which patients are at risks of heart attacks) to take timely measures.",
      ],
      image: "/Images/IOTPhotos/artificial-intelligence.webp",
    },
  ];

  return (
    <div className={styles.IOTwhyBFContainer}>
      <div className={styles.IOTwhyBFBackgroundRectangle}>
        <div className={styles.IOTSolutionImage1}>
           <Image
                src={"/Images/IOTPhotos/rectangle-top.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
         </div>
         <div className={styles.IOTSolutionImage2}>
           <Image
                src={"/Images/IOTPhotos/rectangle-bottom.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
         </div>
      </div>

      <div className={styles.IOTwhyBFMain}>
        <h1 className={styles.IOTBFMainHeading}>IOT solutions Bottom funnel Builds</h1>
        <div className={styles.IOTServicesHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>

        <div className={styles.IOTwhyBFCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.IOTwhyBFCardsMain}>
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
};
