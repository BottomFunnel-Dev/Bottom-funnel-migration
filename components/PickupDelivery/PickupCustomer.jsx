import Image from "next/image";
import React, { useState } from "react";
import styles from "./pickupcustomer.module.css";
export const PickupCustomer = () => {

  const [imageChange, setImageChange] = useState("/Images/pickup/switchscreens/Easy app boarding.webp")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const pickupcustomer = [
    {
      image: "/Images/pickup/switchscreens/Easy app boarding.webp",
      pickupicon: "/Images/pickup/icons/customisedapp.png",
      title: "Easy App Onboarding",
      description: "Bottom Funnel is a powerful tool that allows you to identify the strengths and weaknesses of your app.",
    },

    {
      image: "/Images/pickup/switchscreens/Order service.webp",
      pickupicon: "/Images/pickup/icons/customersupport.png",
      title: "Order Services",
      description: "It's as easy as ordering from your favorite restaurant or asking a friend to pick up some groceries on the way home.",
    },

    {
      image: "/Images/pickup/switchscreens/Track order.webp",
      pickupicon: "/Images/pickup/icons/pickupdelivery.png",
      title: "Track Order",
      description: "With Delivery, you can have your orders delivered right to your doorstep by a fleet of autonomous cars or scooters.",
    },
    
    {
      image: "/Images/pickup/switchscreens/in app navigation.webp",
      pickupicon: "/Images/pickup/icons/trackingapp.png",
      title: "In-app Navigation",
      description: "Using In-app navigation, they can find the shortest possible route and reach the customers to hand over the package.",
    },

    {
      image: "/Images/pickup/switchscreens/Offer & discount.webp",
      pickupicon: "/Images/pickup/icons/analysisdashboard.png",
      title: "Offers and Discounts",
      description: "Most companies offer a limited number of options for scheduling pickup and delivery services. Branding yourself as one of the best.",
    },
  ];

  return (
    <div className={styles.pickupcustomer}>
      <div className={styles.pickupcustomerSols}>
        <div className={styles.pickupcustomerright}>
          <h1> Customer App </h1>

          <div className={styles.pickupcustomerText}>
            {pickupcustomer.map((item, index) => (
              <div key={index} className={styles.pickupcustomercard}
                onMouseEnter={() => {
                  handleImageChange(item.image)
                }}
              >
                <div className={styles.pickupcustomerIcon}>
                  <Image src={item.pickupicon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "90%", height: "90%" }}
                  />
                </div>

                <h6> {item.title} </h6>
                <p> {item.description} </p>
              </div>
            ))}

            <div className={styles.dummy}></div>
          </div>
        </div>

        <div className={styles.pickupcustomerImage}>
          <div className={styles.variableImg}>
            <Image src={imageChange}
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
};
