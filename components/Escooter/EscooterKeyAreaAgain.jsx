import React, { useState } from 'react';
import styles from "./EscooterKeyAreaAgain.module.css";

export const EscooterKeyAreaAgain = () => {

  const escootercustomerappdata = [
    {
      htxt: "Easy App On-Boarding",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem.",
      img: "Images/Escooterchanges/Customer screens/Component 139.png"
    },
    {
      htxt: "Nearby Service Centers",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem.",
      img: "Images/Escooterchanges/Customer screens/Component 140.png"
    },

    {
      htxt: "Details About The Product",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem.",
      img: "Images/Escooterchanges/Customer screens/Component 141.png"
    },

    {
      htxt: "360 Degree View",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam et nisi volutpat ornare dapibus sit amet felis. Sed vel aliquam sem. Donec dignissim sed libero et faucibus. Pellentesque eu elementum lorem.",
      img: "Images/Escooterchanges/Customer screens/Component 142.png"
    },
  ]

  const [imageChange, setImageChange] = useState("Images/Escooterchanges/Customer screens/Component 139.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)

  }

  return (
    <div className={styles.escooteruppertextcustomerapp}>
      <h1 className={styles.colorescooty}>Customer App</h1>
      <div className={styles.escooterkeyareaagainmainboxes}>

        <div className={styles.escooterkeyarealeftbox}>
          {escootercustomerappdata.map((e) => {
            return (
              <div className={styles.escooterkeymappindataindivi}
                key={e.htxt} onMouseEnter={() => {

                  handleImageChange(e.img)
                }}
              >
                <h4>{e.htxt}</h4>
                <p>{e.stxt}</p>
              </div>
            )
          })}</div>

        <div className={styles.escooterkeyarearightbox}>
          <img src={imageChange} alt="image" />
        </div>

      </div>
    </div>
  )
}
