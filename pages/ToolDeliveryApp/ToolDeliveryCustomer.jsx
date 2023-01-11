import React, { useState } from 'react';
import styles from "./ToolDeliveryCustomer.module.css";

const ToolDeliveryCustomer = () => {

  let ToolDeliveryCustomerData = [
    {
      img: {
        src: "/Images/tooldeliveryapp/Easyappboarding.png",
        alt: "control business admin pannel",
      },

      icon: {
        src: "/Images/tooldeliveryapp/pie-chart.png",
        alt: "Marketlogo",
      },

      title: "Business Control",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

    {
      img: {
        src: "/Images/tooldeliveryapp/Buy tools.png",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/Analytics & insights.png",
        alt: "Product logo",
      },
      title: "Reports & Analytics",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Multiple payment option.png",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/rupee.png",
        alt: "Revenuelogo",
      },
      title: "Manage Payments",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",

    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Track Order.png",
        alt: "image",
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
    <div style={{}} className={styles.Tooladmin}>

      <h1>Customer App </h1>
      <div className={styles.tooladminsub}>

        <div className={styles.tooladminright}>

          {ToolDeliveryCustomerData.map(({ title, icon }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`tooladmin-box-${idx}`}
              >
                <div className={styles.tooladminLogo}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
              </div>
            );
          })}
        </div>

        <div className={styles.toolcustomerpannelleft}>

          <div className={styles.toolCustomerImage}>
            <img
              src={ToolDeliveryCustomerData[active].img.src}
              alt={ToolDeliveryCustomerData[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDeliveryCustomer;
