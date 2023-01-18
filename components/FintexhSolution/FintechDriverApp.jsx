import React, { useState } from 'react';
import styles from "./FintechDriverApp.module.css";

export const FintechDriverApp = () => {
  const [imageChange, setImageChange] = useState("/Images/fintechsolutionpage/Component 189.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const fintechsolutiondriverappdata = [
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
    <div className={styles.fintechsolutiondriverappmainbox}>
      <div className={styles.fintechdriverappboxfortext}>
        <h1>
          <span className={styles.specialtxtdriver}>Driver</span> App
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum
        </p>
      </div>

      <div className={styles.fintedriverappfelxingboxupper}>
        <div className={styles.fintedriverappfelxingboxupperleft}>
          <div className={styles.fintechdriverappleftsectionformobile}>
            <img src={imageChange} alt="imagemobile" />
          </div>
        </div>

        <div className={styles.fintechdriverappflexright}>
          {fintechsolutiondriverappdata.map((e) => {
            return (
              <div className={styles.fintechdriverappboxesaftermapping}>
                <div className={styles.logofintechdriverapp}>
                  <img src={e.icon} alt="image" />
                </div>

                <div className={styles.txtdriverappfintech}>
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

