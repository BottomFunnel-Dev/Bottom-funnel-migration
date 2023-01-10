import React from "react";
import styles from "./foodDeliveryAdvanceTech.module.css";

export const FoodDeliveryAdvanceTech = () => {
  let customerAppData = [
    {
      title: "Can be easily accessed through both android/iOS",
      description:
        "It is a cross platform application which gives ease to customer of accessing it through both android and iOS",
    },
    {
      title: "User-friendly interface",
      description:
        "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
    },
    {
      title: "Order food and ltrack their service",
      description:
        "Customers can easily order their favourite food and track when the food will get prepared and delivered.",
    },
    {
      title: "Smart search and add-to-your-favorites list",
      description:
        "The app will give suggestionsbased on what customers search. The customers can also add their favourite dishes in a list to avoid repetitive searches",
    },
  ];

  return (
    <div className={styles.foodDeliveryAdvanceTechMain}>
      <h1>
        SOLUTIONS FOR YOUR <span> FOOD DELIVERY APP </span>
      </h1>
      <div className={styles.foodDeliveryCustomerAppMain}>
        <div className={styles.foodDeliveryCustomerAppImages}>
          <div>
            <img
              src="/Images/foodDeliveryphotos/Rectangle_4242-1.png"
              alt="triangle background image"
            />
          </div>
          <div>
            <img
              src="/Images/foodDeliveryphotos/mobile-screen-1.png"
              alt="customer app iphone image"
            />
          </div>
        </div>
        <div className={styles.foodDeliveryCustomerAppContent}>
          <h2>Customer app</h2>
          <div>
            {customerAppData.map(({ title, description }) => {
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
