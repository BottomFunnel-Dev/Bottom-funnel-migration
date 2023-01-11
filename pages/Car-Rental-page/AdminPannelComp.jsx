import React, { useState } from 'react';
import styles from './adminPannelComp.module.css';

export const AdminPannelComp = () => {

  const [imageChange, setImageChange] = useState("/Images/Car-Rental-Page-Images/Component189.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const RGadminPannelData = [

    {
      img: "/Images/Car-Rental-Page-Images/login.png",
      head: "Login",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

    },

    {
      img: "/Images/Car-Rental-Page-Images/owner-management.png",
      head: "Owner Management",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
    },

    {
      img: "/Images/Car-Rental-Page-Images/dashboard(2).png",
      head: "Dashboard",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
    },

    {
      img: "/Images/Car-Rental-Page-Images/rental-management.png",
      head: "Retail Management",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
    },
  ]

  return (
    <div className={styles.RGadminPannelContainer}>
      <div className={styles.RGadminPannelLeftDiv}>
        {RGadminPannelData.map((e) => {
          return (
            <div className={styles.RGadminPannelLeftDivBoxex}
              key={e.head} onMouseEnter={() => {
                handleImageChange(e.img)
              }}
            >
              <div><h4>{e.head}</h4>
                <p>{e.para}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.RGadminPannelTextDiv}>
        <h1>
          <span className={styles.RGadminPannelSpan}>Admin </span>Pannel
        </h1>
      </div>

      <div className={styles.RGadminPannelMobileRightDiv}>
        <div className={styles.RGadminPannelMobileRightDivFrameForImages}>
          <img src={imageChange} alt="images" />
        </div>
      </div>
    </div>
  );
};
