import React from "react";
import styles from "./BigDataServiceBF.module.css";

export const BigDataServiceBF = () => {
  const cardsData = [
    {
      title: "Advnaceed Analytics & Insights",
      body: "Our team has helped companies across a wide spectrum of industries to understand their data in new ways, helping them to make informed decisions that improve their business processes.",
      image: "Images/BigDataServicePhotos/stairs.png",
    },
    {
      title: "Strategy Consulting",
      body: "Bottom Funnel provides consulting services for Big Data analytics and technology selection. We understand the importance of data and its role in enabling a successful business.",
      image: "Images/BigDataServicePhotos/horse.png",
    },
    {
      title: "Hadoop Services",
      body: "Top-notch development is the key to success in any industry. When it comes down to Hadoop Cluster management, we have the expertise and skills of coders to make your project a complete success.",
      image: "Images/BigDataServicePhotos/elephant.png",
    },
    {
      title: "Development, Support & maintenance",
      body: "Bottom Funnel is the global leader in managing the life cycle of Big Data implementation. We have experts who have created solutions and frameworks that address all the key functional components of Big Data.",
      image: "Images/BigDataServicePhotos/setting.png",
    },
  ];
  return (
    <div className={styles.BigDataServiceBFContainer}>
      <div className={styles.BigDataServiceBFBackgroundRectangle}>
        <img
          src="Images/BigDataServicePhotos/rectangle-right.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/BigDataServicePhotos/rectangle-left.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.BigDataServiceBFMain}>
        <h1>Bottom Funnel Big Data Services</h1>
        <div className={styles.BigDataServicePopularHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel is here to help. We offer big data as a service so that
          you can process, manage and analyze large volumes of data in order to
          generate insights that will help your organization improve business
          operations and gain a competitive advantage.
        </p>
        <div className={styles.BigDataServiceBFCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.BigDataServiceBFCardsMain}>
                <div>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
