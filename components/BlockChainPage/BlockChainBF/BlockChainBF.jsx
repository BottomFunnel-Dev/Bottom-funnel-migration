import React from "react";
import styles from "./BlockChainBF.module.css";

export const BlockChainBF = () => {
  return (
    <div className={styles.BlockChainBFContainer}>
      <div className={styles.BlockChainBFBackgroundRectangle}>
        <img
          src="Images/BlockChainPhotos/rectangle-right.png"
          alt="Background image rectangle right top"
        />
        <img
          src="Images/BlockChainPhotos/rectangle-left.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.BlockChainBFMain}>
        <h1>Bottom Funnel Blockchain Services</h1>
        <div className={styles.BlockChainOfferHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.BlockChainBFCardsContainer}>
          <div className={styles.BlockChainBFCardsSummary}>
            <h1>
              Summary<span>.</span>
            </h1>
            <p>
              Bottom Funnel is a renowned blockchain development company that
              specialises in solving the actual challenges encountered by big
              enterprises and startups globally. From integrating applications
              to deploying the product over a cloud environment, our team of
              senior developers is well capable of handling it from scratch to
              the finished product. We understand the importance of blockchain
              in today's world and how its technology can disrupt an industry or
              business model.
            </p>
          </div>
          <div className={styles.BlockChainBFCardsHrLine}>
            <span></span>
            <div></div>
            <span></span>
          </div>
          <div className={styles.BlockChainBFCardsWhy}>
            <h1>Why us for your blockchain application development:</h1>
            <ul>
              <li>30+ blockchain application delivered</li>
              <li>50+ man-years of collective blockchain experience</li>
              <li>Experts in making changes on a protocol level</li>
              <li>End-to-end blockchain development</li>
              <li>
                High-profile POC (Proof-of-Concept) and pilot program analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
