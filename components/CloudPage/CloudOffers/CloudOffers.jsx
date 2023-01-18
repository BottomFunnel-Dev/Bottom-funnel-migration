import React from "react";
import styles from "./CloudOffers.module.css";

export const CloudOffers = () => {
  return (
    <div className={styles.CloudOffersContainer}>
      <div className={styles.CloudOffersCards}>
        <div className={styles.CloudOffersTopLeftDiv}>
          <h2>Public Consulting services</h2>
          <p>
            Enjoy ease of use and maintenance, flexible pricing, and
            near-limitless scalability.
          </p>
        </div>
        <div className={styles.CloudOffersTopRightDiv}>
          <h2>Private cloud consulting services</h2>
          <p>
            Enjoy superior security, privacy and zero latency for local apps.
          </p>
        </div>
      </div>

      <div className={styles.CloudOffersHeading}>
        <h2>Various Cloud</h2>
        <div>
          <img src="Images/cloudPhotos/cloud.png" alt="Cloud icon" />
        </div>
        <h2>Services We Offer</h2>
      </div>

      <div className={styles.CloudOffersCards}>
        <div className={styles.CloudOffersBottomLeftDiv}>
          <h2>Hybrid cloud consulting services</h2>
          <p>
            Combine the best of two worlds: the public cloud and the private
            cloud.
          </p>
        </div>
        <div className={styles.CloudOffersBottomRightDiv}>
          <h2>Multi-cloud consulting services</h2>
          <p>Take advantage of unique offers from various cloud providers.</p>
        </div>
      </div>
    </div>
  );
};
