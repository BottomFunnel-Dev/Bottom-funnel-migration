import Image from "next/image";
import React, { useState } from "react";
import styles from "./pickupdriveapp.module.css";

export const Pickupdriveapp = () => {
  let pickupdrive = [
    {
      img: {
        src: "/Images/pickup/switchscreens/Easy app boarding.webp",
        alt: "Register image",
      },

      icon: {
        src: "/Images/pickup/icons/manageprofile.png",
        alt: " Register logo",
      },

      title: "Manage Profile",
      para: "you can save your deliveries to the calendar and create custom shipment details which are easily accessible. ",
    },

    {
      img: {
        src: "/Images/pickup/switchscreens/Reminder & Alerts.webp",
        alt: "Schedule",
      },

      icon: {
        src: "/Images/pickup/icons/reminderalerts.png",
        alt: "Schedule logo",
      },

      title: "Reminders & Alerts",
      para: "Stay in the know about everything delivery-related with the free Reminders & Alerts feature.Receive a push notification when your package is delivered. ",
    },

    {
      img: {
        src: "/Images/pickup/switchscreens/Delivery details.webp",
        alt: "Delivery Details",
      },

      icon: {
        src: "/Images/pickup/icons/deliverydetails.png",
        alt: "Multiple Payment Option logo",
      },

      title: "Delivery Details",
      para: "Orders are delivered Monday through Friday. You will get a message when your order is ready to be picked up and delivered. For more customized options",
    },

    {
      img: {
        src: "/Images/pickup/switchscreens/in app navigation.webp",
        alt: "in app navigation",
      },

      icon: {
        src: "/Images/pickup/icons/inappnavigation.png",
        alt: "Track Order logo",
      },

      title: "In-App Navigation",
      para: "The in-app navigation allows you to take your Pickup & Delivery experience beyond the app. Get detailed instructions on how to log in and order, schedule a pickup or get support.",
    },
  ];

  const [drive, setdrive] = useState(0);
  return (
    <div className={styles.pickupdrive}>
      <h1 className={styles.colored}> Drive app </h1>
      <div className={styles.pickupdrivesub}>
        <div className={styles.pickupdriveleft}>
          <div className={styles.pickupDriveImage}>
            <Image
              src={pickupdrive[drive].img.src}
              alt={pickupdrive[drive].img.alt}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.pickupdriveright}>
          {pickupdrive.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setdrive(idx)}
                className={`pickup-box-${idx}`}
              >
                <div className={styles.pickupLogo}>
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "13%", height: "100%" }}
                  />
                </div>

                <h3> {title} </h3>
                <p> {para} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
