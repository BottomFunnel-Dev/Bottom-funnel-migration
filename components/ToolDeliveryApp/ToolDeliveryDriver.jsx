import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./ToolDeliveryDriver.module.css";

const ToolDeliveryDriver = () => {

  let TooDeliverydrivedata = [
    {
      img: {
        src: "/Images/tooldeliveryapp/DriverProfile.webp",
        alt: "image",
      },
      icon: {
        src: "/Images/tooldeliveryapp/user-profile.webp",
        alt: " registerlogo",
      },
      title: "Manage Profile",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Reports.webp ",
        alt: "notification",
      },
      icon: {
        src: "/Images/tooldeliveryapp/analytics.webp",
        alt: "notification logo",
      },
      title: "Reports",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Order details.webp",
        alt: "order",
      },
      icon: {
        src: "/Images/tooldeliveryapp/checkout.webp",
        alt: "order",
      },
      title: "Get order Details",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",

    },
    {
      img: {
        src: "/Images/tooldeliveryapp/Pickup location.webp",
        alt: " Navigationimage",
      },
      icon: {
        src: "/Images/tooldeliveryapp/navigation track location.webp",
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
        <h1> Drive app </h1>

        <div className={styles.tooldeliverydrivesub}>

          <div className={styles.tooldeliverydriveleft}>
            <div className={styles.tooldeliveryDriveImage}>
              <Image
                src={TooDeliverydrivedata[active].img.src}
                alt={TooDeliverydrivedata[active].img.alt}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
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
                    <Image src={icon.src}
                      alt={icon.alt}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "12%", height: "100%" }}
                    />
                  </div>

                  <h3> {title} </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev
                  </p>
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
