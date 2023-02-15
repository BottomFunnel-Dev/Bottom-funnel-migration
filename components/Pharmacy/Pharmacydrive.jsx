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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",

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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
          {pharmacydrivedata.map(({ title, icon }, idx) => {
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
