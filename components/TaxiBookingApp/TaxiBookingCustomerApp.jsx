import Image from "next/image";
import React, { useState } from "react";
import styles from "./TaxiBookingCustomerApp.module.css";

export default function TaxiBookingCustomerApp() {
  const [imageChange, setImageChange] = useState(
    "/Images/Taxibooking/Customerscreens/Component 117.webp",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
    // console.log(imagepath)
  };

  const taxibookingcustomerdata = [
    {
      images: "/Images/Taxibooking/Customerscreens/Component 117.webp",
      icon: "/Images/Taxibooking/icons/Group 340238.webp",
      htxt: "Easy To Choose Your Ride",
      stxt: "We always strive to deliver futuristic solutions that will help you take your business further from the existing ones business . A users can book a taxi with a single tap and they just have to enter the pickup location and destination. ",
    },

    {
      images: "/Images/Taxibooking/Customerscreens/Component 125.webp",
      icon: "/Images/Taxibooking/icons/Group 340235.webp",
      htxt: "Track Your Driver",
      stxt: "As a taxi app development company, we'll build white label ride sharing app that is user friendly for registration to booking with numerous features that is easy to use. It will give the rider’s data like location, contact information, and many more. ",
    },

    {
      images: "/Images/Taxibooking/Customerscreens/Component 126.webp",
      icon: "/Images/Taxibooking/icons/Group 340236.webp",
      htxt: " Easy Pick Up",
      stxt: "We Will follow the standard procedure to deliver the app on time to enjoy the benefits and meet your business growth goals.Real-time location tracking is a feature that you would love to see in your taxi booking application.",
    },

    {
      images: "/Images/Taxibooking/Customerscreens/Component 127.webp",
      icon: "/Images/Taxibooking/icons/Component 131.webp",
      htxt: "Booking History",
      stxt: "The taxi app development solutions provided are tailored to your specific needs and objectives with rational taxi app development cost.The users can easily enjoy the service of booking a cab through their smartphones without any problem.",
    },
  ];

  return (
    <div className={styles.customerapptaxibookingboxfortxt}>
      <h1>
        <span className={styles.specialcolor}> Customer Application </span>
      </h1>

      <div className={styles.taxibookingcustomerappmainboxes}>
        <div className={styles.taxibookingappcustomerappleftbox}>
          {taxibookingcustomerdata.map((e) => {
            return (
              <div
                className={styles.taxibookingflexingboxesindi}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.images);
                }}
              >
                <div className={styles.taxibookingflexingboxesindiforlogo}>
                  <Image
                    src={e.icon}
                    alt={"images"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                <div className={styles.taxibookingflexingboxesindifortxt}>
                  <h4> {e.htxt} </h4>
                  <p> {e.stxt} </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.taxibookingappcustomerapprightbox}>
          <div className={styles.taxibookingappcustomerrightboxinnermobile}>
            <Image
              src={imageChange}
              alt={"mobile"}
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
