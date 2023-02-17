import Image from "next/image";
import React, { useState } from "react";
import styles from "./ToolDeliveryCustomer.module.css";

function ToolDeliveryCustomer() {
  let ToolDeliveryCustomerData = [
    {
      img: {
        src: "/Images/tooldeliveryapp/Easy app boarding.webp",
        alt: "control business admin pannel",
      },

      icon: {
        src: "/Images/tooldeliveryapp/pie-chart.webp",
        alt: "Marketlogo",
      },

      title: "Easy App On-boarding",
      para: "The tool delivery app is a dynamic platform that allows users to manage,organize and track their tool inventory With the help of this app. They can also share their inventory with other users.",
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
      title: "Easy Checkout",
      para: " Nowadays, users prefer apps or online business models instead of calling or live to order. Online flower delivery app is the best way to get ahead of the competition and stay relevant in today’s market.",
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
      title: "Multiple Payment Option",
      para: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience fit with our powerful online app builder fit with our app.",
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
      title: "Track Your Order",
      para: "It’s easier to track orders when all of them are in one place. With everything on one dashboard, you’ll never have any mixups again.The bigger the user base, the bigger the arena of customers.",
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
