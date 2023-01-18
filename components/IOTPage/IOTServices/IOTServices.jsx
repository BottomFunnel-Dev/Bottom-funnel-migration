import React from "react";
import styles from "./IOTServices.module.css";

export const IOTServices = () => {
  const cardsData = [
    {
      title: "Preventive equipment maintenance",
      body: "Our cloud-based solution automatically collects information about your equipment, programs, and processes to provide you with real-time insight into your business operations. With our powerful analytics capabilities, you can quickly identify issues that could impact your business operation and get the answers you need to make informed decisions.",
      image: "Images/IOTPhotos/equipment.png",
    },
    {
      title: "Remote operations",
      body: "The world is rapidly changing, and automation is one of the most anticipated ways to change it. We are connected now to smart devices that can sense our presence, understand our needs, and act on them intelligently. This new age has brought in a completely new way of life where machines work around us and make things happen as we wish.",
      image: "Images/IOTPhotos/remote.png",
    },
    {
      title: "Product quality management",
      body: "The manufacturing process is monitored to ensure product compliance and process adherence. However, it's hard to know exactly what's going on in that industrial yet automated environment. IoT isn't just for big companies anymore - it's for everyone who wants to be more efficient with their time and resources.",
      image: "Images/IOTPhotos/quality.png",
    },
    {
      title: "Hands-off inventory management",
      body: "With IoT development, you can now do so with relative ease. All you need is an internet connection and a few minutes of your time to track down where your asset has gone. Not only will this be an efficient use of your precious time and resources, but it will also help save you from investing in replacement parts or finding their location again.",
      image: "Images/IOTPhotos/inventory.png",
    },
  ];

  return (
    <div className={styles.IOTServicesMain}>
      <h1>Popular internet of things (IOT) Services</h1>
      <div className={styles.IOTServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>

      <p>
        IoT is becoming more and more popular. Where your house automation
        systems are making your life easier, businesses are adopting smart
        technologies that make their operations more efficient. And, where
        people are increasingly turning to online platforms to buy goods and
        services.
      </p>

      <div className={styles.IOTServicesContent}>
        {cardsData.map(({ title, body, image }) => {
          return (
            <div className={styles.IOTServicesCotentOuterDiv} key={title}>
              <div className={styles.IOTServicesCardsContent}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className={styles.IOTServicesCardsImages}>
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.IOTServicesButton}>
        <h3>Talk with our experts in IoT to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
