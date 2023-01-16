import React from "react";
import styles from "./NFTSolutions.module.css";

export const NFTSolutions = () => {
  const cardsData = [
    {
      title: "Identifiability",
      body: "NFT Developers are gaining popularity day by day because of its unmatched security and reliability. Now, the security-conscious users can get their hands on this unbreakable technology because there is no way to fake or replicate it.",
      image: "Images/NFTDevPhotos/candidate.png",
    },
    {
      title: "No Middleman",
      body: "The world is slowly embracing the use of blockchain technology, and it has a lot of advantages over the traditional one. One such advantage is that it allows us to track and store data in a more secure way.",
      image: "Images/NFTDevPhotos/man.png",
    },
    {
      title: "Secure Trading",
      body: "NFTs are the future of cryptocurrency and blockchain, and they're already being used in ways we never thought possible. Because NFTs are secure, transparent and distributed, you can trade them with anyone without any hassle.",
      image: "Images/NFTDevPhotos/insurance.png",
    },
    {
      title: "Interoperability",
      body: "In the world of cryptocurrency and virtual assets, NFTs are becoming more and more popular by the day. These non-fungible tokens allow you to trade different types of crypto assets on a number of platforms seamlessly.",
      image: "Images/NFTDevPhotos/neural.png",
    },
    {
      title: "Transparency",
      body: "In the world of cryptocurrency and virtual assets, NFTs are becoming more and more popular by the day. These non-fungible tokens allow you to trade different types of crypto assets on a number of platforms seamlessly.",
      image: "Images/NFTDevPhotos/transparency.png",
    },
    {
      title: "Rareness",
      body: "With smart contract governing NFT development solutions, it is possible for developers to control the number of NFTs that can be generated. This ensures scarcity, and makes your tokens more valuable.",
      image: "Images/NFTDevPhotos/shop.png",
    },
  ];

  return (
    <div className={styles.NFTSolutionsContainer}>
      <h1>
        Appealing Benefits of <span>NFT</span> Development Solutions
      </h1>
      <div className={styles.NFTAboutItHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.NFTSoluitonsMain}>
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
