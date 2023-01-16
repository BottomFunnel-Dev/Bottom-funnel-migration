import React from "react";
import styles from "./CryptoDevBenefit.module.css";

export const CryptoDevBenefit = () => {
  const cardsData = [
    {
      title: "Reduced Transaction Charges",
      image: "Images/CryptoDevPhotos/transaction.png",
      body: "By offering low or no transaction fees when using cryptocurrencies, Bottom Funnel has simplified the process of trading and investing in crypto as a whole.",
    },
    {
      title: "Swift Transactions",
      image: "Images/CryptoDevPhotos/invest.png",
      body: "With Bottom Funnel, you can now create endless transactions on instant through your crypto wallet - everywhere and always.",
    },
    {
      title: "Advanced Security",
      image: "Images/CryptoDevPhotos/cryptographic.png",
      body: "Bottom Funnel's goal is to provide cryptocurrency solutions for all, with zero fraud involved.",
    },
    {
      title: "Decentralization",
      image: "Images/CryptoDevPhotos/decentralized.png",
      body: "Bottom Funnel is a new way to invest in crypto: with tokenized assets, you can be confident that your investment is protected by blockchain technology.",
    },
  ];

  return (
    <div className={styles.CryptoDevBenefitContainer}>
      <h1>Business Benefits of Cryptocurrency Development Services</h1>
      <div className={styles.CryptoDevBenefitHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.CryptoDevBenefitMain}>
        {cardsData.map(({ title, image, body }) => (
          <div key={title}>
            <div>
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
