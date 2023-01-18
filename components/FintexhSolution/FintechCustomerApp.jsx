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
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

    },

    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-8.png",
      htxt: "Earning Analytics",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

    },

    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-6.png",
      htxt: "Daily Report's Dashboard",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

    },

    {
      img: "",
      icon: "/Images/EyewearDeliveryapp/icons/prototyping-7.png",
      htxt: "Alerts Settings",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
    },

  ]

  return (
    <div className={styles.fintechsolutioncustomerappmainbox}>
      <div className={styles.fintechcustomerappboxfortext}>
        <h1>
          <span className={styles.specialtxt}>Customer</span> App
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum
        </p>
      </div>

      <div className={styles.fintecustomerappfelxingboxupper}>
        <div className={styles.fintecustomerappfelxingboxupperleft}>
          <div className={styles.fintechcustomerappleftsectionformobile}>
            <img src={imageChange} alt="imagemobile" />
          </div>
        </div>

        <div className={styles.fintechcustomerappflexright}>
          {fintechsolutioncustomerappdata.map((e) => {
            return (
              <div className={styles.fintechcustomerappboxesaftermapping}>
                <div className={styles.logofintechcustomerapp}>
                  <img src={e.icon} alt="image" />
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


