import Image from "next/image";
import React, { useState } from "react";
import styles from "./customerAppComp.module.css";

export default function CustomerAppComp() {
  const [imageChange, setImageChange] = useState(
    "/Images/Car-Rental-Page-Images/Component188.webp",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const RGcustomerAppData = [
    {
      img: "/Images/Car-Rental-Page-Images/dashboard.webp",
      htxt: "Dashboard",
      stxt: "Here customer can manage your account, view your rental history, and pay your bill. The dashboard is designed to make it easy for you to manage all of your rental needs. Just select one of the options below to learn more about it.",
      icon: "/Images/Car-Rental-Page-Images/icon/icon 3/dashboard.webp"
    },
    {
      img: "/Images/Car-Rental-Page-Images/reporting.webp",
      htxt: "Reporting",
      stxt: "Reporting for customer in our car rental app is a breeze. Simply enter your desired pick-up and drop-off locations, desired date and time, and a list of cars and we'll provide you with all the options. From there, it's up to you to make the decision on which one fits your needs best.",
      icon: "/Images/Car-Rental-Page-Images/icon/icon 3/reporting.webp"
    },
    {
      img: "/Images/Car-Rental-Page-Images/cardetails.webp",
      htxt: "Car Management",
      stxt: "Car management is a crucial component of any car rental app. It helps customers plan ahead, track their trips, and make informed decisions about their travels. Customers can view detailed information about the car they are renting, such as its age, model, and mileage.",
      icon: "/Images/Car-Rental-Page-Images/icon/icon 3/management.webp"
    },
    {
      img: "/Images/Car-Rental-Page-Images/payment.webp",
      htxt: "Payment",
      stxt: "In addition to the traditional methods of paying for your rental, our app also offers a variety of mobile payment options. These include Android Pay and Apple Pay, which allow you to pay with your phone without having to carry cash or a credit card.",
      icon: "/Images/Car-Rental-Page-Images/icon/icon 3/payment.webp"
    },
  ];

  return (
    <div className={styles.RGCustomerAppContainer}>
      <div className={styles.RGCustomerAppTextDiv}>
        <h1>
          <span className={styles.RGCustomerSpan}>Customer </span> App
        </h1>
      </div>

      <div className={styles.RGCustomerAppMobileLeftDiv}>
        <div className={styles.RGCustomerAppMobileLeftDivFrameForImages}>
          <Image src={imageChange}
            alt={"images"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.RGCustomerAppMobileRightDiv}>
        {RGcustomerAppData.map((e) => {
          return (
            <div
              className={styles.RGCustomerAppMobileRightDivBoxex}
              key={e.htxt}
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
                <h4> {e.htxt} </h4>
                <p> {e.stxt} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
