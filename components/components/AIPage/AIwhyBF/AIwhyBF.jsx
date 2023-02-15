import React from "react";
import styles from "./AIwhyBF.module.css";

export const AIwhyBF = () => {
  const cardsData = [
    {
      title: "Demand forecasting and inventory",
      body: [
        "Calculating the risks of out-of-stock and overstock.",
        "Sales and demand forecasting.",
      ],
      image: "Images/AIPhotos/inventory.png",
    },
    {
      title: "Predictive and prescriptive maintenance",
      body: [
        "Flagging anomalous behavior of machinery and equipment.",
        "Predicting failure probability over time/in a certain number of steps",
      ],
      image: "Images/AIPhotos/setting.png",
    },
    {
      title: "Personalization engines",
      body: [
        "Customer segmentation.",
        "Cross-selling and upselling recommendations.",
        "Automated generation of individualized content-product recommendations, special offers and pricing, etc.",
      ],
      image: "Images/AIPhotos/personalization.png",
    },
    {
      title: "Customer service",
      body: [
        "Customer segmentation.",
        "Cross-selling and upselling recommendations.",
        "Automated generation of individualized content-product recommendations, special offers and pricing, etc.",
      ],
      image: "Images/AIPhotos/customer-service.png",
    },
    {
      title: "Iot Applications",
      body: [
        "Internet of medical things.",
        "Industrial robot simulation software.",
        "Connected consumer products.",
        "Smart cities, etc.",
      ],
      image: "Images/AIPhotos/iot.png",
    },
    {
      title: "Speech recognition",
      body: [
        "Voice-controlled navigation and search systems in vehicles.",
        "Virtual assistants.",
        "Voice search.",
        "Voice-based authentication in security systems.",
      ],
      image: "Images/AIPhotos/voice.png",
    },
  ];

  return (
    <div className={styles.AIwhyBFContainer}>
      <div className={styles.AIwhyBFBackgroundRectangle}>
        <img
          src="Images/AIPhotos/rectangle-top.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/AIPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.AIwhyBFMain}>
        <h1 className={styles.AIMainHeading}>AI solutions Bottom funnel Builds</h1>
        <div className={styles.AIServicesHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.AIwhyBFCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.AIwhyBFCardsMain}>
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
