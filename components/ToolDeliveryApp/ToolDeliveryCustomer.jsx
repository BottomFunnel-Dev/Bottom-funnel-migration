import Image from "next/image";
import React, { useState } from "react";
import styles from "./ToolDeliveryCustomer.module.css";

function ToolDeliveryCustomer() {
  let ToolDeliveryCustomerData = [
    {
      img: {
        src: "/Images/tooldeliveryapp/Easyappboarding.webp",
        alt: "control business admin pannel",
      },

      icon: {
        src: "/Images/tooldeliveryapp/pie-chart.webp",
        alt: "Marketlogo",
      },

      title: "Business Control",
      para: "Business control, or the ability to control various aspects of a business, is an important aspect of customer app development",
    },

    {
      img: {
        src: "/Images/tooldeliveryapp/Buy tools.webp",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/Analytics & insights.webp",
        alt: "Product logo",
      },
      title: "Reports & Analytics",
      para: "Reports & Analytics are tools that allow you to analyze and visualize data in order to make informed decisions.",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Multiple payment option.webp",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/rupee.webp",
        alt: "Revenuelogo",
      },
      title: "Manage Payments",
      para: "This is an online service that allows you to process credit card, bank transfer, and other forms of payment.",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Track Order.webp",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/manage customer.webp",
        alt: "Customer logo",
      },
      title: "Manage Customer",
      para: "This application allows a user to manage their orders for a specific user.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div style={{}} className={styles.Tooladmin}>
      <h1> Customer App </h1>
      <div className={styles.tooladminsub}>
        <div className={styles.tooladminright}>
          {ToolDeliveryCustomerData.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`tooladmin-box-${idx}`}
              >
                <div className={styles.tooladminLogo}>
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "12%", height: "100%" }}
                  />
                </div>
                <h3> {title} </h3>

                <p>
                  {para}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.toolcustomerpannelleft}>
          <div className={styles.toolCustomerImage}>
            <Image
              src={ToolDeliveryCustomerData[active].img.src}
              alt={ToolDeliveryCustomerData[active].img.alt}
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
}

export default ToolDeliveryCustomer;
