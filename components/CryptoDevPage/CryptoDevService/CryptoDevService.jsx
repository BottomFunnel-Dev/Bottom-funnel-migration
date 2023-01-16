import React from "react";
import styles from "./CryptoDevService.module.css";

export const CryptoDevService = () => {
  const cardData = [
    {
      title: "Non-fungible tokens",
      body: "NFTs are poised to go mainstream. With the advent of blockchain technology, the concept of non-fungible tokens is slowly but surely becoming more and more popular.",
    },
    {
      title: "Security Token Offering",
      body: "Digital currencies have grown in popularity over the years. The STO Development team understands this and is here to help you in taking advantage of it.",
    },
    {
      title: "Utility Token Development",
      body: "Bottom Funnel is here to help companies create their own blockchain-based products and services. We provide complete customizable utility token development solutions that can be updated as needed.",
    },
    {
      title: "Stable Coin Development",
      body: "There are a lot of stablecoins out there, but StableCoin is the first and only stablecoin that can be backed by various types of assets.",
    },
    {
      title: "Whitepaper Drafting",
      body: "Our white paper creation services span planning to publication, focusing on layout, graphics, and competent on-brand content to effectively communicate your vision to potential investors.",
    },
    {
      title: "Wallet Development",
      body: "Bottom Funnel is here to make life easier for you by providing one-stop shopping solution for all your crypto requirements.",
    },
  ];

  return (
    <div className={styles.CryptoDevServiceMain}>
      <h1>
        Our Crypto Development <span>Services</span>
      </h1>
      <div className={styles.CryptoDevApproachHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.CryptoDevServiceContainer}>
        <div className={styles.CryptoDevServiceImage}>
          <img
            src="Images/CryptoDevPhotos/cryptoservice.png"
            alt="Vector big size image"
          />
        </div>
        <div className={styles.CryptoDevServiceContent}>
          {cardData.map(({ title, body }, idx) => {
            return (
              <div key={title}>
                <h4>{title}</h4>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
