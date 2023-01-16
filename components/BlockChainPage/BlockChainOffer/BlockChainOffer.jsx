import React from "react";
import styles from "./BlockChainOffer.module.css";

export const BlockChainOffer = () => {
  const cardsData = [
    {
      title: "Blockchain networks",
      body: "Bottom Funnel is a scalable permission-based or permissionless decentralized ecosystem with minimized downtime, which secures data and applications to be available at all times. You can use it for both personal and professional purposes, as the platform is easy to use and understand. Furthermore, they offer a wide range of features such as monitoring, analytics, backup services and more that help you keep an eye on your data.",
      image: "Images/BlockChainPhotos/networks.png",
    },
    {
      title: "Blockchain-based market platforms",
      body: "Bottom Funnel is a peer to peer platform where you can get loans and other services at an affordable rate irrespective of your credit history. Peer-to-peer platforms (e.g., Defi lending platforms, blockchain-based marketplaces, etc.) for transparent, fraud-free transactions between the parties. Peer-to-peer platforms (e.g., Defi lending platforms, blockchain-based marketplaces, etc.) for transparent, fraud-free transactions between the parties.",
      image: "Images/BlockChainPhotos/stock-market.png",
    },
    {
      title: "Decentralized autonomous organizations (DAOs)",
      body: "BottomFunnel was founded by an experienced team with deep understanding of technical aspects and business principles. We have worked on projects related to blockchain technology ranging from tokenization to smart contracts development. Our vision is clear: we want to create platforms that empower all stakeholders in a community and drive productivity and trust across them!",
      image: "Images/BlockChainPhotos/dao.png",
    },
    {
      title: "Crypto wallets & crypto assets",
      body: "There is a growing craze for cryptocurrencies these days and with new entrants entering the arena every day, it's becoming increasingly difficult to choose your favorite coin. The ultimate solution to this problem has been found by Bottom Funnel! They provide custom cryptocurrencies, cryto tockers utility, governance, reward and NFT. Digital wallets for storing and transacting various types of cryto assets.",
      image: "Images/BlockChainPhotos/crypto.png",
    },
  ];

  return (
    <div className={styles.BlockChainOfferMain}>
      <h1>Popular Big Data Services</h1>
      <div className={styles.BlockChainOfferHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Maintaining a high level of user engagement keeps your business
        relevant. Our technology and design thinking advancements help make this
        happen.
      </p>
      <div className={styles.BlockChainOfferContent}>
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className={styles.BlockChainOfferCardsContent}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className={styles.BlockChainOfferCardsImages}>
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.BlockChainOfferButton}>
        <h3>Talk with our experts in Big Data to get started</h3>
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
