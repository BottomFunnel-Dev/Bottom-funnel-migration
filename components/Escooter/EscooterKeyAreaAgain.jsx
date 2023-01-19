import React, { useState } from 'react';
import styles from "./EscooterKeyAreaAgain.module.css";

export const EscooterKeyAreaAgain = () => {

  const escootercustomerappdata = [
    {
      htxt: "Easy App On-Boarding",
      stxt: "We want to make sure that your trip is as easy and convenient as possible. That's why we've included an app on our solutions, so you can easily download it and start using your new vehicle right away!",
      img: "Images/Escooterchanges/Customer screens/Component 142.png"
    },
    {
      htxt: "Nearby Service Centers",
      stxt: "We have a list of service centers nearby. If you are looking for a service center or repair for your Escooter, feel free to contact us. We will help you locate the nearest service center that can help you with your repair or maintenance needs.",
      img: "Images/Escooterchanges/Customer screens/Component 141.png"
    },

    {
      htxt: "Details About The Product",
      stxt: "Our app is your one-stop shop for all things escooter. It's where you can find all the information you need about how to operate and maintain your vehicle, as well as what's legal and what's not. We've got everything from safety tips to regulations, so whether you're new to riding or an experienced pro at it, we've got what you need.",
      img: "Images/Escooterchanges/Customer screens/Component 139.png"
    },

    {
      htxt: "360 Degree View",
      stxt: "Our 360-degree view of the world around us gives you a bird's-eye view of your surroundings. When you use our app, you'll be able to see what's going on around you from any angle, whether that means seeing all the way down to the street level or floating above it.",
      img: "Images/Escooterchanges/Customer screens/Component 140.png"
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
