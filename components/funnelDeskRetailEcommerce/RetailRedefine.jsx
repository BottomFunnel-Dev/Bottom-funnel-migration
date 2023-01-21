import React from "react";
import styles from "./RetailRedefine.module.css";

export const RetailRedefine = () => {
  return (
    <div className={styles.retailredefinemainboxes}>
      <div className={styles.retailredefineleftboxfortext}>
        <h1>Redefine personal shopping</h1>
        <p>
          Customers if industries like Retail/e-commerce come to support when
          something goes wrong.Making them answer repetitive question when they
          call will anger them further.Equip your agents with customer context
          and order history to deliver personalized customer service at scale.
        </p>
        <ul>
          <li>
            Use context and purchase history to have relevant personal
            conversations.
          </li>
          <li>
            Use customer data to prioritize queues and have contextual
            conversations.
          </li>
          <li> Resolve Issues faster with the right information on hand</li>
          <li>
            Integrate with your e-commerce systems like shopify and Magento
          </li>
        </ul>
      </div>
      <div className={styles.retailredefinemainboxesrightboxforimage}>
        <div className={styles.retailredefinedboxrightforimageonly}>
          <img
            src="/Images/Retail&ecommerce/Animations/Animation 2.gif"
            alt="Retail&ecommerce/Animations/Animation 2.gif"
          />
        </div>
      </div>
    </div>
  );
};
