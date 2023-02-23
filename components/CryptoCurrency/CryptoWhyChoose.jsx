import React from "react";
import styles from "./CryptoWhyChoose.module.css";
import Image from "next/image";

export default function CryptoWhyChoose() {
  return (
    <div className={styles.cryptowhychooseusmainboxes}>
      <div className={styles.scryptowhychooseustextboxes}>
        <h2>Why Choose Bottom Funnel</h2>
        <p>
          You need to consider that your cryptocurrency website has a niche, but
          also you need to make it appealing at the industry level.
          Cryptocurrency is the new future of financial transitions,
        </p>
      </div>
      <div className={styles.cryptowhychooseusimageboxes}>
        <Image
          src={"/Images/Cryptocurrencypage/bannerbackground/Component 51.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.cryptocurrencysatisfactionbox}>
        <h4>Customer Satisfaction</h4>
      </div>

      <div className={styles.cryptocurrencydedicatedbox}>
        <h4>Dedicated Teams</h4>
      </div>

      <div className={styles.cryptocurrencyintegritybox}>
        <h4>Integrity & Transparency</h4>
      </div>

      <div className={styles.cryptocurrencyagilebox}>
        <h4>Agile Procedure</h4>
      </div>

      <div className={styles.cryptocurrencymodelsbox}>
        <h4>Flexible Engagement Models</h4>
      </div>

      <div className={styles.cryptowhychooseusloweimagefooter}>
        <Image
          src={
            "/Images/Cryptocurrencypage/bannerbackground/Rectangle 4417.webp"
          }
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
