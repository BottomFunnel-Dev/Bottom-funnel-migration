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
      img: "/Images/Car-Rental-Page-Images/signup.webp",
      head: "Register and Signup within The Application",
      para: "The customer can sign up for the app to start booking cars.",
    },

    {
      img: "/Images/Car-Rental-Page-Images/Component190.webp",
      head: "Find Nearby Available Cars",
      para: "Customers can easily find out which cars are available for rent in their area by looking online.",
    },

    {
      img: "/Images/Car-Rental-Page-Images/filter.webp",
      head: "Search By Filters",
      para: "Customers can search for cars by different filters, such as fuel type or category.",
    },

    {
      img: "/Images/Car-Rental-Page-Images/cardetails.webp",
      head: "Car Details",
      para: "Customers can inspect the details of the listed car, like the model, year of the car, images of the car, etc., through the app.",
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
