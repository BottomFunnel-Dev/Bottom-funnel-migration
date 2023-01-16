import React from "react";
import styles from "./NFTDevBanner.module.css";

export const NFTDevBanner = () => {
  return (
    <div className={styles.NFTDevBannerMain}>
      <h1>
        <span>NFT</span> Development Services
      </h1>
      <div className={styles.NFTDevBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel offers a simple way to create and transfer ownership of
        your digital assets with minimal technical expertise required. By
        recording ownership on the blockchain, your NFT can be sold or traded
        securely without fear of fraud or theft. And because Bottom Funnels are
        unique identifiers in their own right, they can be used across multiple
        applications without duplication or confusion.
      </p>
      <button>Request A Quote</button>
    </div>
  );
};
