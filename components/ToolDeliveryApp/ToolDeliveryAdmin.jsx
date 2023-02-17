import Image from "next/image";
import React, { useState } from "react";
import styles from "./ToolDeliveryAdmin.module.css";

function ToolDeliveryAdmin() {
  let ToolDeliveryadmindata = [
    {
      img: {
        src: "/Images/tooldeliveryapp/Business control.webp",
        alt: "Marketimage",
      },

      icon: {
        src: "/Images/tooldeliveryapp/pie-chart.webp",
        alt: "Buisness Control",
      },

      title: "Buisness Control",
      para: "The business control for tool delivery app is a dynamic platform that allows users to manage, organize, and track their tool inventory.A users can easily manage their tool inventory and schedule deliveries.",
    },

    {
      img: {
        src: "/Images/tooldeliveryapp/Reports & analytics.webp",
        alt: "Report and analytics",
      },
      icon: {
        src: "/Images/tooldeliveryapp/Analytics & insights.webp",
        alt: "Reports Analytics",
      },
      title: "Report Analytics",
      para: "Reports and analytics help the tool delivery app team make informed decisions about their products and services. A key feature of reports and analytics is that they provide detailed insights into the performance of the tool delivery app",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Manage Payment.webp",
        alt: "Manage Payments image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/rupee.webp",
        alt: "Manage Payments",
      },
      title: "Manage Payments",
      para: "In order to manage payments for tool delivery app, you will have to create a payment plan and set up various disbursements. This will allow you to make payments as the tools are being collected and delivered.",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/manage customers.webp",
        alt: "manage Customer image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/manage customer.webp",
        alt: "Customer logo",
      },
      title: "Manage Customer",
      para: "Manage customer in a tool delivery app is all about helping customers to receive the tools they need in a timely manner. This can be done through providing useful information,the location of the nearest store or how to use certain tools.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className={styles.tooldeliveryadmin}>
      <h1> Admin panel </h1>

      <div className={styles.tooldeliveryadminsub}>
        <div className={styles.tooldeliveryadminright}>
          {ToolDeliveryadmindata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`tools-box-${idx}`}
              >
                <div className={styles.toolsLogo}>
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
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.tooldeliveryadminleft}>
          <div className={styles.tooldeliveryAdminImage}>
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
  );
}

export default ToolDeliveryAdmin;
