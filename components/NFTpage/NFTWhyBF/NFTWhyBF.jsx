import React from "react";
import styles from "./NFTWhyBF.module.css";
import Image from "next/image";

export default function NFTWhyBF() {
  return (
    <div className={styles.NFTWhyBFContainer}>
      <div className={styles.NFTWhyBFHeading}>
        <h1>Why Bottom Funnel for NFT development services</h1>
        <div className={styles.NFTAboutItHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel is known for their strategic advice, NFT-based
          development services to help grow your business. We know how important
          it is to have a sound understanding of the market you are targeting.
          We develop NFT platforms that fit your target audiences' needs, and we
          do so with accuracy and precision. Not only will our services help you
          establish a foothold in the market, but they will also help you
          understand what it takes to be successful in that niche. With Bottom
          Funnel by your side, you can be sure that you're getting the most out
          of your investment in NFT marketing!
        </p>
      </div>
      <div className={styles.NFTWhyBFMain}>
        <div className={styles.NFTWhyBFMainImage}>
          <Image
            src={"/Images/NFTDevPhotos/whyBF.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.NFTWhyBFBackgroundTriangleMain}>
          <div className={styles.NFTwhyBFImage1}>
            <Image
              src={"/Images/NFTDevPhotos/triangle-top.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.NFTwhyBFImage2}>
            <Image
              src={"/Images/NFTDevPhotos/triangle-bottom.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
