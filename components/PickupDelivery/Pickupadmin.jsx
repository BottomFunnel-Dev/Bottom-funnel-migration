import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./pickupadmin.module.css";

export const Pickupadmin = () => {
  let ToolDeliveryadmindata = [
    {
      img: {
        src: "/Images/pickup/adminpanel/analyticinsights.png",
        alt: "analytics Insights",
      },


      icon: {
        src: "/Images/pickup/icons/Analytics & insights.png",
        alt: "Analytics & Insights",
      },

      title: "Analytics & Insights",
      para: "Pickup and delivery analytics collection to track pickup & delivery performance on your eCommerce site.  ",
    },

    {
      img: {
        src: "/Images/pickup/adminpanel/deliveryagents.png",
        alt: "deliveryagents",
      },
      icon: {
        src: "/Images/pickup/icons/Delivery agents.png",
        alt: "Delivery Agents",
      },
      title: "Delivery Agents",
      para: "We offer trusted, reliable and efficient delivery agents. Our goal is to be on-time and provide quality service at all times. ",
    },
    {
      img: {
        src: "/Images/pickup/adminpanel/managepayment.png",
        alt: "Manage Payments image",
      },
      icon: {
        src: "/Images/pickup/icons/Manage payments.png",
        alt: "Manage Payments",
      },
      title: "Manage Payments",
      para: "Manage payments on your account, schedule pickups and deliveries, and streamline the process behind the scenes. ",

    },
    {
      img: {
        src: "/Images/pickup/adminpanel/managecustomer.png",
        alt: "manage Customer image",
      },
      icon: {
        src: "/Images/pickup/icons/manage customer.png",
        alt: "Customer logo",
      },
      title: "Manage Customer",
      para: "This role works in conjunction with other departments including sales and distribution to build and maintain a customer-centric approach to delivery. ",
    },

  ];


  const [active, setActive] = useState(0);
  return (
    <div className={styles.pickupdeliveryadmin}>

      <h1> Admin panel </h1>
      <div className={styles.pickupdeliveryadminsub}>

        <div className={styles.pickupdeliveryadminright}>

          {ToolDeliveryadmindata.map(({ title, para, icon }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`tools-box-${idx}`}
              >

                <div className="pickup-logo">
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "15%", height: "100%" }}
                  />

                </div>
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.pickupdeliveryadminleft}>
          <div className={styles.pickupdeliveryAdminImage}>
            <Image
              src={ToolDeliveryadmindata[active].img.src}
              alt={ToolDeliveryadmindata[active].img.alt}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}