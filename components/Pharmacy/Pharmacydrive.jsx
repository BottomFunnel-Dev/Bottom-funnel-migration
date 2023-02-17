import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Pharmacydrive.module.css";

export default function Pharmacydrive() {
  let pharmacydrivedata = [
    {
      img: {
        src: "/Images/pharmacy/Request.png",
        alt: "registerimage",
      },
      icon: {
        src: "/Images/pharmacy/Request accept.png",
        alt: " registerlogo",
      },
      title: "Accept/Reject Request",
      para: "Drivers are responsible for deciding when it's best to accept a ride and when it's best to decline one.",
    },

    {
      img: {
        src: "/Images/pharmacy/Notificationimage.png ",
        alt: "notification",
      },

      icon: {
        src: "/Images/pharmacy/Notification.png",
        alt: "notification logo",
      },
      title: "Notification",
      para: "We want to notify drivers when orders are ready to be picked up or delivered. ",
    },

    {
      img: {
        src: "/Images/pharmacy/Order detail.png",
        alt: "order",
      },

      icon: {
        src: "/Images/pharmacy/Details.png",
        alt: "order",
      },
      title: "Get order Details",
      para: "Drivers can easily get the details of their orders by simply logging in to their account and accessing their order history.",

    },

    {
      img: {
        src: "/Images/pharmacy/Navigationimage.png ",
        alt: " Navigationimage",
      },

      icon: {
        src: "/Images/pharmacy/Navigation.png",
        alt: "Navigationimage",
      },
      title: "Navigation",
      para: "With this feature, you can easily find the products and services you need, no matter where you are.",
    },

  ];

  const [active, setActive] = useState(0);

  return (
    <div className={styles.pharmacydrive}>
      <h1>
        Drive app
      </h1>

      <div className={styles.pharmacydrivesub}>
        <div className={styles.pharmacydriveleft}>

          <div className={styles.pharmacyDriveImage}>
            <Image
              src={pharmacydrivedata[active].img.src}
              alt={pharmacydrivedata[active].img.alt}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.pharmacydriveright}>
          {pharmacydrivedata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`pharmacy-box-${idx}`}
              >

                <div className={styles.pharmacyLogo}>
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "20%", height: "100%" }}
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
      </div>
    </div>
  );
};
