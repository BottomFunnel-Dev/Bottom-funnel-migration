import React, { useState } from "react";
import { NFTOffersIcons } from "./NFTIcons/NFTIcons";
import { NFTOffersData } from "./NFTOffersData/NFTOffersData";

import styles from "./NFTOffers.module.css";

export const NFTOffers = () => {
  const [current, setCurrent] = useState("marketplace");

  const handleChange = (key) => {
    setCurrent(() => key);
  };

  const cardsData = ["marketplace", ""];
  return (
    <div className={styles.NFTOffersContainer}>
      <div className={styles.NFTOffersHeading}>
        <h1>
          <span>End-To-End</span> NFT Development Services We Offers
        </h1>
        <div className={styles.NFTAboutItHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel is a helpful resource that can help companies accelerate
          their business processes and increase transparency while also
          providing security, speed, and scalability. Almost every industry can
          benefit from the potential of NFT - including real estate, fashion,
          finance & banking, healthcare, entertainment, and more. We have worked
          closely with some of the most forward-thinking organizations in these
          industries to create custom-made NFT solutions that will have a
          lasting impact on your company's success.
        </p>
      </div>
      <div className={styles.NFTOffersMain}>
        <NFTOffersIcons current={current} changeCurrent={handleChange} />
        <NFTOffersData current={current} />
      </div>
    </div>
  );
};
