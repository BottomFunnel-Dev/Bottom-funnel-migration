import React from "react";
import styles from "./IOTwhyBF.module.css";

export const IOTwhyBF = () => {
  const cardsData = [
    {
      title: "Connected products",
      body: [
        "Optimize device functioning and use: check device productivity, add new features and integrate these features into everyday operations.",
        "Create new revenue models: check how connected things are used by customers to offer better cooperation options, for example, user-based pricing.",
      ],
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/digital.png",
    },
    {
      title: "Smart Maintenance",
      body: [
        "Reveal incipient problems and carry out remote repairs to reduce field service costs.",
        "Validate warranty claims and identify warranty agreement violations.",
        "Uncover failure patterns to reduce future product or equipment failures, thus, avoid associated service.",
      ],
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/garage.png",
    },
    {
      title: "Smart cities, smart utilities",
      body: [
        "Improved quality, speed, and interactivity of urban services.",
        "More efficient communication among smart city residents and facilities.",
        "More convenient traffic.",
        "Optimized energy consumption.",
      ],
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/smart-city.png",
    },
    {
      title: "Industrial IoT",
      body: [
        "Optimize equipment utilization and reveal bottlenecks in the manufacturing process.",
        "Avoid downtime by timely detecting potential failures and scheduling predictive maintenance.",
        "Improve production quality",
        "Increase employees' safety",
      ],
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/sensor.png",
    },
    {
      title: "Smart supply chain management",
      body: [
        "Internet of medical things.",
        "Industrial robot simulation software.",
        "Connected consumer products.",
        "Smart cities, etc.",
      ],
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/supply-chain.png",
    },
    {
      title: "Connected health",
      body: [
        "Real-time heart rate, blood pressure and sugar monitoring.",
        "Real-time alerting when potentially dangerous variations from the norms are observed.",
        "Indentifying risks (for example, which patients are at risks of heart attacks) to take timely measures.",
      ],
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/artificial-intelligence.png",
    },
  ];

  return (
    <div className={styles.IOTwhyBFContainer}>
      <div className={styles.IOTwhyBFBackgroundRectangle}>
        <img
          src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/rectangle-top.png"
          alt="Background image rectangle right top"
        />
        <img
          src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/IOTPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
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
                  <img src={image} alt={title} />
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
