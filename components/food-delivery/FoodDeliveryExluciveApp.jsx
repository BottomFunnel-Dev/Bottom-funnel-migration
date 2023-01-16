import React from "react";
import styles from "./FoodDeliveryExluciveApp.module.css";

export const FoodDeliveryExluciveApp = () => {
  let foodExcluciveAppData = [
    {
      img: {
        src: "/Images/foodDeliveryphotos/exlucive-app-image-1.png",
        alt: "Food Delivery Startup image",
      },
      title: "Food Delivery Startup",
      description:
        "With food delivery startup app development, you can start your journey to becoming a successful food delivery startup. By developing an app that is user-friendly and easy to use, you can attract customers from all over the city. Food delivery startup app development offers a range of cost-effective options that will help you reach your profitability goals.",
    },
    {
      img: {
        src: "/Images/foodDeliveryphotos/exlucive-app-image-2.png",
        alt: "Chain Restaurants Management image",
      },
      title: "Chain Restaurants Management",
      description:
        "App development for chain restaurant provides enhanced customer service, efficient food delivery and cost-effective menu planning. The app allows managerment to track inventory and sales, as well as manager large amounts of customers. By developing a robust and edge cutting app for your chain restaurant, you can increase profits and stay ahead of the competition",
    },
    {
      img: {
        src: "/Images/foodDeliveryphotos/exlucive-app-image-3.png",
        alt: "Custom Franchise App image",
      },
      title: "Custom Franchise App",
      description:
        "Get a customized application development and design service that is tailored specifically for your business which features easy-to-use templates and customizable app designs which will help you reduce operating costs and improve communication with your customers. Increase the reach and visibilty of your franchise with our on-demand app solutions",
    },
  ];

  return (
    <div className={styles.foodDeliveryExluciveAppMain}>
      <h1>
        <span>APP SUGGESTIONS</span> FOR DIFFERENT FOOD DEVLIERY BUSINESS:
      </h1>

      <p>
        Get exclusive and robusts apps for your food delivery business with a
        taste of latest technology and creative designs.
      </p>

      <div className={styles.foodDeliveryExluciveAppContent}>
        {foodExcluciveAppData.map(({ title, description, img }) => {
          return (
            <div key={title}>
              <div className={styles.foodDeliveryExlcusiveAppImageDiv}>
                <img src={img.src} alt={img.alt} />
              </div>
              <div className={styles.foodText} >
                <h4>{title}</h4>
                <p>{description}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
