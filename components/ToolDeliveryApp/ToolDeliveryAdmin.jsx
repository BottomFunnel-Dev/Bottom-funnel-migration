import Image from "next/image";
import React, { useState } from "react";
import styles from "./ToolDeliveryAdmin.module.css";

function ToolDeliveryAdmin() {
  let ToolDeliveryadmindata = [
    {
      img: {
        src: "/Images/tooldeliveryapp/control business admin panel.png",
        alt: "Marketimage",
      },

      icon: {
        src: "/Images/tooldeliveryapp/pie-chart.png",
        alt: "Buisness Control",
      },

      title: "Buisness Control",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

    {
      img: {
        src: "/Images/tooldeliveryapp/Reports & analytics.png",
        alt: "Report and analytics",
      },
      icon: {
        src: "/Images/tooldeliveryapp/Analytics & insights.png",
        alt: "Reports Analytics",
      },
      title: "Report Analytics",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Manage Payment.png",
        alt: "Manage Payments image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/rupee.png",
        alt: "Manage Payments",
      },
      title: "Manage Payments",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/manage customers.png",
        alt: "manage Customer image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/manage customer.png",
        alt: "Customer logo",
      },
      title: "Manage Customer",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className={styles.tooldeliveryadmin}>
      <h1> Admin panel </h1>

      <div className={styles.tooldeliveryadminsub}>
        <div className={styles.tooldeliveryadminright}>
          {ToolDeliveryadmindata.map(({ title, icon }, idx) => {
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
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                  quis eum ev
                </p>
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
