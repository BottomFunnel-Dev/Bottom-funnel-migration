import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./FintechCustomerApp.module.css";

export const FintechCustomerApp = () => {
  const [imageChange, setImageChange] = useState("/Images/fintechsolutionpage/Component1877.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const fintechsolutioncustomerappdata = [
    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-1.png",
      htxt: "Profile Management",
      stxt: "It helps users manage their profiles and driving information. It allows users to view and update their personal information, as well as track their driving history.",
    },

    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-8.png",
      htxt: "Earning Analytics",
      stxt: "Earning analytics is a feature in the driver's app that allows you to see how much money you've earned over a certain period of time. This is a great feature for drivers who want to see how their earnings are progressing.",
    },

    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-6.png",
      htxt: "Daily Report's Dashboard",
      stxt: "User want to be able to see their daily reports in one place. The Daily Report's Dashboard for our app gives you all the information you need to see how well you're doing.",
    },

    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-7.png",
      htxt: "Alerts Settings",
      stxt: "It is important to be aware of your surroundings at all times. That's why the alerts settings on this app are so important. By customizing the tone and volume of the alerts, you can ensure that you're always getting the information you need.",
    },

  ]

  return (
    <div className={styles.fintechsolutioncustomerappmainbox}>
      <div className={styles.fintechcustomerappboxfortext}>
        <h1>
          <span className={styles.specialtxt}> Customer </span> App
        </h1>
      </div>

      <div className={styles.fintecustomerappfelxingboxupper}>
        <div className={styles.fintecustomerappfelxingboxupperleft}>
          <div className={styles.fintechcustomerappleftsectionformobile}>
            <Image src={imageChange}
              alt={"imagemobile"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.fintechcustomerappflexright}>
          {fintechsolutioncustomerappdata.map((e) => {
            return (
              <div className={styles.fintechcustomerappboxesaftermapping}>
                <div className={styles.logofintechcustomerapp}>
                  <Image src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "25%" }}
                  />
                </div>

                <div className={styles.txtcustomerappfintech}>
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            )
          })}</div>
      </div>
    </div>
  );
};


