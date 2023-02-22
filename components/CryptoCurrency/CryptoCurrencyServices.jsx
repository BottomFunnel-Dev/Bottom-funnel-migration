import React from "react";
import styles from "./CryptoCurrencyServices.module.css";

export default function CryptoCurrencyServices() {
  const cryptoservicedata = [
    {
      htxt: "Crypto Coin Development",
      stxt: "This stage of work dealt by our expert coders deployed for building blockchain & cryptocurrencies along with UI & UX designers and QA support.",
    },

    {
      htxt: "Mining Crypto Coins",
      stxt: "And it's time to deploy, don't worry if you still need our support as we've got your back even post development we've got your back even post development..",
    },

    {
      htxt: "Wallet Creation",
      stxt: "We build secure, scalable, user friendly & faster architecture for blochain applications that drives constant ROI blochain applications that drives constant ROI.",
    },

    {
      htxt: "Cryptocoin Mining",
      stxt: "We strongly understand that time is money. Our experts are not just coders but also quick responders and decision makers responders and decision app builder.",
    },

    {
      htxt: "Custom Altcoin Creation",
      stxt: "blockchains on Hyperledger. An open source that is used to take cross-industry blockchain technologies to next level with combined effort at bottom funnel.",
    },

    {
      htxt: "Cryptocurrency Exchange",
      stxt: "Deploy cryptography centric technologies to store immutable data. We also assist you in choosing right process of yours that is apt for this technology.",
    },

    {
      htxt: "Cryptocoin Mining",
      stxt: "In this phase our expert team will come up with concrete project plan for rest of the development activity which includes SRS, at our centres bottom funnel.",
    },

    {
      htxt: "Custom Altcoin Creation",
      stxt: "When any user visits a website for the first time, they have no idea where to look for the desired information. There has to be a homepage from where they must be guided",
    },
  ];

  return (
    <div className={styles.CryptoCurrencyServicesmainboxes}>
      <div className={styles.cryptoservicetxtboxes}>
        <h2>We Provide the Following Services for Cryptocurrency App</h2>
        <p>
          You need to consider that your cryptocurrency website has a niche, but
          also you need to make it appealing at the industry level.
        </p>
      </div>
      <div className={styles.cryptoserviceflexboxes}>
        {cryptoservicedata.map((e) => {
          return (
            <div className={styles.cryptoserviceflexboxmappingind}>
              <h4>{e.htxt}</h4>
              <p>{e.stxt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
