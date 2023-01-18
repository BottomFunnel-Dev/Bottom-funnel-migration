import React from "react";
import styles from "./NFTOffersData.module.css";

export const NFTOffersData = ({ current }) => {
  const cardData = {
    marketplace: {
      title: "NFT Marketplace Development",
      body: "Bottom Funnel is a blockchain-based NFT marketplace development company that offers the seamless experience of NFT trading. By using Ethereum's ERC-1155 and ERC-721 standards, our non-fungible token marketplace development services offer the seamless experience of NFT trading. Bottom Funnel understands your needs and wants when it comes to creating a blockchain-based NFT platform. We understand that you want as many features as possible without disrupting the user experience.",
      image: "Images/NFTDevPhotos/NFTVector/marketplace.png",
    },
    polygram: {
      title: "NFT Exchange Platform Development",
      body: "Trading NFTs has never been this easy! With the help of the Bottom Funnel exchange platform, you can exchange NFT tokens with ease. Plus, the third-party incorporation of the marketplace makes the number of tokens available for trading even greater. Bottom Funnel is a brand new exchange platform that makes trading NFT tokens easy and convenient. Through the third-party incorporation of the marketplace, you can now trade more tokens than ever before. Working in tandem with our brand new platform, Topfunnel.com, you'll find it easier than ever to buy and sell NFTs online.",
      image: "Images/NFTDevPhotos/NFTVector/exchange.png",
    },
    tech: {
      title: "NFT Development Platform",
      body: "With NFT development platform, you can convert physical world collectibles into digital assets. Whether you want to develop non-exchangeable tokens based on ERC-721 protocol or ERC-1155 semi-fungible tokens, Bottom Funnel is the answer to all your business requirements. Ever wanted to create collectibles that are more than just a piece of art? Or maybe, you want to use blockchain as a means of crossing-over industries and manufacturing collectibles with the same symbiotic nature.",
      image: "Images/NFTDevPhotos/NFTVector/tech.png",
    },
    digital: {
      title: "NFT Lending Platform Development",
      body: "Bottom Funnel is a service that helps you leverage your NFT as collateral to secure loans. The brand offers military-grade security features to protect against cyberattacks, so you can rest assured that your assets are safe. When it comes to securing a loan, you want nothing but the best. And that's why we offer Bottom Funnel - our military-grade security features ensure your NFT is safe and protected from cyber attacks. We also have a 24/7 live chat support team for any queries you might have.",
      image: "Images/NFTDevPhotos/NFTVector/digital.png",
    },
    wallet: {
      title: "NFT Wallet Development",
      body: "Storing various tokens on a single wallet app sounds like a dream come true for anyone who is passionate about the NFT ecosystem. However, it can be difficult to choose the best fintech solution out there in terms of features, security and other factors. Storing various tokens on a single wallet app sounds like a dream come true for anyone who is passionate about the NFT ecosystem. However, it can be difficult to choose the best fintech solution out there in terms of features, security and other factors.",
      image: "Images/NFTDevPhotos/NFTVector/wallet.png",
    },
    cloths: {
      title: "NFT Fashion Development",
      body: "While the fashion industry is notorious for its creativity, it also has a knack for strict regulations. NFT is one way that brands are able to verify the ownership of accessories like jewelry and shoes in order to reduce fraud and deception to a minimum. The fashion industry is famous for its creative ways, but it is also notorious for following strict regulations. Bottom Funnel is one way that brands can verify the ownership of jewelry and shoes to reduce fraud and deception to a minimum.",
      image: "Images/NFTDevPhotos/NFTVector/fashion.png",
    },
  };

  return (
    <div className={styles.NFTOffersDataContainer}>
      <div>
        <h1>{cardData[current].title}</h1>
        <p>{cardData[current].body}</p>
        <button>Hire NFT Developer</button>
      </div>
      <img
        src={cardData[current].image}
        alt={`${cardData[current].title} vector`}
      />
    </div>
  );
};
