import React from "react";
import styles from "./eliteServices.module.css";

export const EliteServices = () => {
  return (
    <div className={styles.eliteservice}>
      <h1>Our Elite Services for your Business</h1>
      <p>
        Reimagine more meaningful conversations and turn service agents into
        customer champions Launch customer and employee delight in under 3
        months!
      </p>

      <div className={styles.funnelEliteService}>
        <div className={styles.contentSide}>
          <button>Bottom Funnel Support Desk</button>
          <h2>Customer & Agent Delight Made Easy</h2>
          <p>
            Provide the most intutive support across all channels. Producively
            understand customer needs to serve excellence, the first time
          </p>
          <p>
            Save time and reduce repetitive tasks. Help agents rapidly resolve
            customer inquiries with workforce automation and knowledge from one
            unified platform
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.gifSide}>
          <img src="Images/BottomFunnelDeskPhotos/queries.gif" alt="queries" />
        </div>
      </div>

      <div className={styles.fieldEliteService}>
        <div className={styles.contentSide}>
          <button>Field Service Management</button>
          <h2>Deliver field service that remote agents trust</h2>
          <p>
            Now more than ever, field teams need to serve customers safely and
            effectively while working remotely. offer field service that remote
            agents can trust to easily resolve issues while on the road.
          </p>
          <p>
            Route service teams efficiently based on availability proximity and
            skillset. Offer customers real-time updates via conversational bots
            and simplified appointment scheduling
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.gifSide}>
          <img src="Images/BottomFunnelDeskPhotos/desktop.gif" alt="queries" />
        </div>
      </div>

      <div className={styles.funnelEliteService}>
        <div className={styles.contentSide}>
          <button>Bottom Funnel Contact Centre</button>
          <h2>Answer support calls Effortlessly</h2>
          <p>
            Have more effective phone conversations and connect customers to the
            right expert, from the begining.
          </p>
          <p>
            Prompt agents with a 360-degree customer view and guided resolutions
            to improve call productivity. Take advantage of the powerful routing
            engines that drastically reduce call wait times and achieve smarter
            escalations
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.gifSide}>
          <img src="Images/BottomFunnelDeskPhotos/problems.gif" alt="queries" />
        </div>
      </div>
    </div>
  );
};
