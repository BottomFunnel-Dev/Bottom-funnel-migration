import Image from "next/image";
import React, { useState } from "react";
import styles from "./RealEstateDriver.module.css";

export default function RealEstateDriver() {
  const [imageChange, setImageChange] = useState(
    "/Images/RealEstate/Driver App/Custom Alerts.webp",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const realstatedriverdata = [
    {
      image: "/Images/RealEstate/Driver App/Custom Alerts.webp",
      htxt: "Custom Alerts",
      icon: "/Images/RealEstate/Icons/ha/manage product categories-1.webp",
      stxt: "The partner will get a notification for every new activity related to them on the app which will male them stay updated.",
    },
    {
      image: "/Images/RealEstate/Driver App/Help Desk.webp",
      htxt: "Help Desk",
      icon: "/Images/RealEstate/Icons/ha/manage product categories-3.webp",
      stxt: "It has easy to understand the place and get their details from tourist guys and our this customization app designs give the customer comfort of use to find their trip destination in budget-friendly packages.",
    },

    {
      image: "/Images/RealEstate/Driver App/Live Chat With Agents.webp",
      htxt: "Live Chat with Agents",
      icon: "/Images/RealEstate/Icons/ha/manage product categories-2.webp",
      stxt: "This feature enables the partners to personally chat with their customers as well as the admin and resolve their queries.",
    },

    {
      image: "/Images/RealEstate/Driver App/Filtering & Sorting.webp",
      htxt: "Filtering & Sorting",
      icon: "/Images/RealEstate/Icons/ha/manage product categories-4.webp",
      stxt: "Sorting and filtering products in Ecommerce can be time-comsuming. That makes it easier than ever to find the right products.",
    },
  ];

  return (
    <div className={styles.realestatedriverboxmain}>
      <div className={styles.realestatedriverleftbox}>
        <div className={styles.realstatedriverappleftboxsometextupper}>
          <h2>Driver Application</h2>
        </div>
        <div className={styles.realestatedrivermappingmainbox}>
          {realstatedriverdata.map((e) => {
            return (
              <div
                className={styles.realstatemapperdriverindivisuallybox}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div className={styles.realestatedrivericon}>
                  <Image
                    src={e.icon}
                    alt={"images"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%", padding: "2px" }}
                  />
                </div>
                <h5>{e.htxt}</h5>
                <p>{e.stxt}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.realestatedriverrightbox}>
        <div className={styles.realestatedriverapprightboxformobile}>
          <img src={imageChange} alt="image" />
        </div>
      </div>
    </div>
  );
}
