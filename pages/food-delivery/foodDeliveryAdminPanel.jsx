import React from "react";
import styles from "./foodDeliveryAdminPanel.module.css";

export const FoodDeliveryAdminPanel = () => {
  let adminpanelData = [
    {
      title: "Manage everything in one place",
      description:
        "This feature allows admin to manage all their activites through this app only, i.e, from one place or screen",
    },
    {
      title: "Gather information about customer preferences",
      description:
        "The admin will be able to check which products the customers are liking the most and what's generating highest profits.",
    },
    {
      title: "Generate profit reports and draw insights",
      description:
        "this feature will generate profit and sales report so that the admin can draw fruitful insights out or it and work on it.",
    },
    {
      title: "Various CRM features",
      description:
        "These customer relationship management features for admin panel will help the admin in improving relationship with their customers.",
    },
  ];

  return (
    <div className={styles.foodDeliveryAdminPanelMain}>
      <div className={styles.foodDeliveryAdminPanelSivMain}>
        <div className={styles.foodDeliveryAdminPanelDivContent}>
          <h2>Admin Panel</h2>
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
        <div className={styles.foodDeliveryAdminPanelDivImages}>
          <img
            src="/Images/foodDeliveryphotos/admin-panel-image.png"
            alt="triangle background image"
          />
        </div>
      </div>
    </div>
  );
};
