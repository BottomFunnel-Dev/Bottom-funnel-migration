import Image from "next/image";
import React, { useState } from "react";
import styles from "./renterAppComp.module.css";

export default function RenterAppComp() {
  const [imageChange, setImageChange] = useState(
    "/Images/Car-Rental-Page-Images/Component190.webp",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const RGrenterAppData = [
    {
      icon: "/Images/Car-Rental-Page-Images/icon/icon 1/register & signup.webp",
      img: "/Images/Car-Rental-Page-Images/signup.webp",
      head: "Register and Signup within Application",
      para: "You can easily register and signup within our car rental app. All you have to do is provide the information required by the car rental company, such as your name, contact details.",
    },

    {
      icon: "/Images/Car-Rental-Page-Images/icon/icon 1/Find near by cab.webp",
      img: "/Images/Car-Rental-Page-Images/Component190.webp",
      head: "Find Nearby Available Cars",
      para: "Search for cars by using the filter options to find the perfect vehicle for your trip. Once you've found a car, click to reserve it and pay with our secure payment methods. Don't forget to check out our car rental deals.",
    },

    {
      icon: "/Images/Car-Rental-Page-Images/icon/icon 1/Saerch by filters.webp",
      img: "/Images/Car-Rental-Page-Images/filter.webp",
      head: "Search By Filters",
      para: "You can use filters to narrow down your search by car type, location, and price range. For example, if you're looking for a car with a CD player, you can filter by that specific feature.",
    },

    {
      icon: "/Images/Car-Rental-Page-Images/icon/icon 1/car details.webp",
      img: "/Images/Car-Rental-Page-Images/cardetails.webp",
      head: "Car Details",
      para: "Car details in our car rental app are all about helping you make informed decisions about your car rental. We provide detailed information about each car rental company.",
    },
  ];
  return (
    <div className={styles.RGrenterAppContainer}>
      <div className={styles.RGrenterAppTextDiv}>
        <h1>
          <span className={styles.RGrenterSpan}> Renter </span>App
        </h1>
      </div>

      <div className={styles.RGrenterAppMobileLeftDiv}>
        <div className={styles.RGrenterAppMobileLeftDivFrameForImages}>
          <Image src={imageChange}
            alt={"images"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.RGrenterAppMobileRightDiv}>
        {RGrenterAppData.map((e) => {
          return (
            <div className={styles.RGrenterAppMobileRightDivBoxex}
              key={e.head}
              onMouseEnter={() => {
                handleImageChange(e.img);
              }}
            >
              <div className={styles.RGrenterAppMobileRightDivicon}>
              <Image src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div>
                <h4> {e.head} </h4>
                <p> {e.para} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
