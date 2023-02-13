import React from "react";
import styles from "./SalesforceOffers.module.css";
import Image from "next/image";

export const SalesforceOffers = () => {
  const cardsData = [
    {
      title: "Service CLoud Implementation",
      body: "When you work with Salesforce, you are working with a leader in cloud computing and business software. Our Service Cloud is the platform that powers our customers' businesses",
      image: "/Images/salesforcePhotos/cloud.webp",
    },
    {
      title: "Marketing CLoud Implementation",
      body: "Marketing is a key part of your company's growth, so you can't afford to overlook it. With Salesforce, you have a complete marketing solution that covers all aspects of your marketing strategy.",
      image: "/Images/salesforcePhotos/social-media.webp",
    },
    {
      title: "Sales CLoud Implementation",
      body: "Salesforce has been ruling the digital marketing world for years. Their cloud-based CRM system helps in keeping track of all your prospects, leads, and contacts by syncing with other tools.",
      image: "/Images/salesforcePhotos/graph.webp",
    },
    {
      title: "Pordot CLoud Implementation",
      body: "Get more out of Salesforce by also getting acquainted with its prebuilt apps for customer relationship management, sales force automation, marketing and customer service.",
      image: "/Images/salesforcePhotos/b-to-b.webp",
    },
    {
      title: "IoT CLoud Implementation",
      body: "It's a system of interconnected devices that are connected to the internet. It also refers to the process by which these devices send and receive data from each other in real time.",
      image: "/Images/salesforcePhotos/shopping.webp",
    },
    {
      title: "CPQ CLoud Implementation",
      body: "Ability to organize data from across the business and its broad set of tools for online collaboration, Salesforce is an invaluable tool for businesses looking to streamline their processes.",
      image: "/Images/salesforcePhotos/setting.webp",
    },
    {
      title: "Lighting Solution Implementation",
      body: "Salesforce is leading the pack with its platform as a service. The Lightning platform is the first PaaS for developers and has proved to be immensely popular among enterprises.",
      image: "/Images/salesforcePhotos/design.webp",
    },
  ];

  return (
    <div className={styles.SalesforceOffersContainer}>
      <h1>Salesforce we offer</h1>
      <div className={styles.SalesforceServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is one such service that helps companies in creating a
        strong digital marketing strategy with SaaS tools like Facebook Ads
        Mastery and Google Analytics proficiency to get their business ahead of
        the competition.
      </p>
      <div className={styles.SalesforceOffersMain}>
        {cardsData.map(({ title, body, image }, idx) => (
          <div key={idx}>
            <div className={styles.SalesforceOffersImage}>
              <Image
                  src={image}
                  alt={title}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
