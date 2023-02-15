import React from 'react'
import { useState } from 'react'
import styles from "./RealEstateDriver.module.css"

export const RealEstateDriver = () => {
        
    const [imageChange, setImageChange] = useState("Images/RealEstate/Driver App/Custom Alerts.webp")


    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
      console.log(imagepath)
   }
     
  const realstatedriverdata = [
      {
          image:" Images/RealEstate/Driver App/Custom Alerts.webp",
         htxt: "Custom Alerts",
          stxt:"The partner will get a notification for every new activity related to them on the app which will male them stay updated.",
      },
      {
          image:" Images/RealEstate/Driver App/Help Desk.webp",
          htxt:"Help Desk",
          stxt: "It has easy to understand the place and get their details from tourist guys and our this customization app designs give the customer comfort of use to find their trip destination in budget-friendly packages.",
  
      },
  
      {
          image:" Images/RealEstate/Driver App/Live Chat With Agents.webp",
          htxt:"Live Chat with Agents",
          stxt:"This feature enables the partners to personally chat with their customers as well as the admin and resolve their queries.",
  
      },
  
      {
          image:" Images/RealEstate/Driver App/Filtering & Sorting.webp",
          htxt:"Filtering & Sorting",
          stxt:"Sorting and filtering products in Ecommerce can be time-comsuming. That makes it easier than ever to find the right products.",
   
      },
  ]
  
  
    return (
      <div className={styles.realestatedriverboxmain}>
      <div className={styles.realestatedriverleftbox}>
      <div className={styles.realstatedriverappleftboxsometextupper}>
      <h1>Driver Application</h1>
      </div>
      <div className={styles.realestatedrivermappingmainbox}>{realstatedriverdata.map((e)=>{
          return (
              <div className={styles.realstatemapperdriverindivisuallybox}
              key={e.htxt} onMouseEnter={() => {
            
                  handleImageChange(e.image)
              }}
                
              ><h5>{e.htxt}</h5>
              <p>{e.stxt}</p>
              </div>
          )
      })}</div>
      </div>
      <div className={styles.realestatedriverrightbox}>
      <div className={styles.realestatedriverapprightboxformobile}>
      <img src={imageChange} alt="image" />
      </div>
      </div>
      </div>
    )

}