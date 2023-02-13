import React, { useState } from "react";
import styles from "./customerAppComp.module.css";

export default function CustomerAppComp() {
  const [imageChange, setImageChange] = useState(
    "/Images/Car-Rental-Page-Images/Component188.png",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const RGcustomerAppData = [
    {
      img: "/Images/Car-Rental-Page-Images/dashboard.png",
      htxt: "Dashboard",
      stxt: "The business owner can see all the pertinent information on the dashboard for analyzing bookings and revenue.",
    },
    {
      img: "/Images/Car-Rental-Page-Images/reporting.png",
      htxt: "Reporting",
      stxt: "Owners can check the financial report to see how much money was booked and what the return on investment (ROI) was.",
    },
    {
      img: "/Images/Car-Rental-Page-Images/cardetails.png",
      htxt: "Car Management",
      stxt: "Users have the ability to add, edit or delete car and car details as they see fit..",
    },
    {
      img: "/Images/Car-Rental-Page-Images/payment.png",
      htxt: "Payment",
      stxt: "Customers can make Payment either through the app or by paying at the time of booking.",
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
          <img src={imageChange} alt="images" />
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
