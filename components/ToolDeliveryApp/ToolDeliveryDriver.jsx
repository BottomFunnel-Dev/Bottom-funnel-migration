import React, { useState } from 'react';
import styles from "./ToolDeliveryDriver.module.css";

const ToolDeliveryDriver = () => {

  let TooDeliverydrivedata = [
    {
      img: {
        src: "/Images/tooldeliveryapp/DriverProfile.png",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/user-profile.png",
        alt: " registerlogo",
      },
      title: "Manage Profile",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Reports.png ",
        alt: "notification",
      },
      icon: {
        src: "/Images/tooldeliveryapp/analytics.png",
        alt: "notification logo",
      },
      title: "Reports",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Order details.png",
        alt: "order",
      },
      icon: {
        src: "/Images/tooldeliveryapp/checkout.png",
        alt: "order",
      },
      title: "Get order Details",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",

    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Pickup location.png",
        alt: " Navigationimage",
      },
      icon: {
        src: "/Images/tooldeliveryapp/navigation track location.png",
        alt: "Navigationimage",
      },
      title: "Track Pickup Location",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

  ];

  const [active, setActive] = useState(0);

  return (
    <div>
      <div className={styles.tooldrive}>
        <h1>Drive app</h1>

        <div className={styles.tooldeliverydrivesub}>

          <div className={styles.tooldeliverydriveleft}>
            <div className={styles.tooldeliveryDriveImage}>
              <img
                src={TooDeliverydrivedata[active].img.src}
                alt={TooDeliverydrivedata[active].img.alt}
              />
            </div>

          </div>

          <div className={styles.tooldeliverydriveright}>
            {TooDeliverydrivedata.map(({ title, icon }, idx) => {
              return (
                <div
                  key={title}
                  onMouseOver={() => setActive(idx)}
                  className={`tooldelivery-box-${idx}`}
                >

                  <div className={styles.tooldeliveryLogo}>
                    <img src={icon.src} alt={icon.alt} />
                  </div>
                  <h3>{title}</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDeliveryDriver;
