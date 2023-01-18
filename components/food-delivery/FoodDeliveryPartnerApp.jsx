import React from "react";
import styles from "./FoodDeliveryPartnerApp.module.css";

export const FoodDeliveryPartnerApp = () => {
  let adminpanelData = [
    {
      title: "Manage Offers & Discounts",
      description:
        "Partners can give secial offers and discounts to increase their customer base and earn their loyalty.",
    },
    {
      title: "Menu category and Order Managerment",
      description:
        "The partners can manage their menu items and orders to increase customer traffic and efficiency.",
    },
    {
      title: "Chat Support",
      description:
        "This feature enables the partners to personally chat with their customers as well as the admin and resolve their queries.",
    },
    {
      title: "Custom Alerts",
      description:
        "The partner will get a notification for every new activity related to them on the app which will make them stay updated.",
    },
  ];

  return (
    <div className={styles.foodDeliveryAdvanceTechPartnerAppMain}>
      <div className={styles.foodDeliveryPartnerAppMain}>
        <div className={styles.foodDeliveryPartnerAppImages}>
          <div>
            <img
              src="/Images/foodDeliveryphotos/partner-bkgd-rectangle.png"
              alt="triangle background image"
            />
          </div>
          <div>
            <img
              src="/Images/foodDeliveryphotos/mobile-screen-2.png"
              alt="customer app iphone image"
            />
          </div>
        </div>
        <div className={styles.foodDeliveryPartnerAppContent}>
          <h2>Partner app</h2>
          <div>
            {adminpanelData.map(({ title, description }) => {
              return (
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
