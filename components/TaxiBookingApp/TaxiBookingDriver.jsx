import Image from "next/image";
import React, { useState } from "react";
import styles from "./TaxiBookingDriver.module.css";

export default function TaxiBookingDriver() {
  const [imageChange, setImageChange] = useState(
    "/Images/Taxibooking/driverscreen/My Wallet.webp",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
    // console.log(imagepath)
  };

  const taxibookingcustomerdata = [
    {
      images: "/Images/Taxibooking/driverscreen/Settings.webp",
      icon: "/Images/Taxibooking/icons/Component 135.webp",
      htxt: "Driver's Profile",
      stxt: "Our professionals clarify requirements, prepare the estimations and conquer every required formality. Customers can easily go through the profile of the driver and check ratings, experience, cost, and many other things before booking a taxi.",
    },

    {
      images: "/Images/Taxibooking/driverscreen/Frame 2453.webp",
      icon: "/Images/Taxibooking/icons/Component 136.webp",
      htxt: "Daily Earning Reports",
      stxt: "We get those professionals involved in your projects who have the precise skills to meet your project requirements.you can generate revenue for your taxi business through the application in a effective manner.",
    },

    {
      images: "/Images/Taxibooking/driverscreen/My Wallet.webp",
      icon: "/Images/Taxibooking/icons/Component 138.webp",
      htxt: "Wallet Management",
      stxt: "With our holistic and optimistic approach we go for improving processes so that your development is consistent with no bugs.The users of the taxi booking application will get multiple payment options. Users can use any mode of payment at their convenience.",
    },

    {
      images: "/Images/Taxibooking/driverscreen/Pickup location.webp",
      icon: "/Images/Taxibooking/icons/Component 137.webp",
      htxt: "Pickup Details",
      stxt: "Once the needed requirements are fulfilled we get going with your product development and shape the scope of your project.eal-time location tracking is a feature that you would love to see in your taxi booking application. ",
    },
  ];

  return (
    <div className={styles.driverapptaxibookingboxfortxt}>
      <h1>
        <span className={styles.specialcolor}> Driver Application </span>
      </h1>

      <div className={styles.taxibookingdriverappmainboxes}>
        <div className={styles.taxibookingappdriverappleftbox}>
          {taxibookingcustomerdata.map((e) => {
            return (
              <div
                className={styles.taxibookingdriverflexingboxesindi}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.images);
                }}
              >
                <div
                  className={styles.taxibookingflexingboxesdriverindiforlogo}
                >
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

        <div className={styles.taxibookingappdriverapprightbox}>
          <div className={styles.taxibookingappdriverrightboxinnermobile}>
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
