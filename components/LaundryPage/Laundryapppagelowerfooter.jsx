import React from 'react'
import styles from "./LaundryPage.module.css"

export const Laundryapppagelowerfooter = () => {
  const Laundrywhydata = [

  {
          cardtitle: "100% Customzation",
          cardIcon: "Images/Laundrypage/icons/Component 41.png",
        },
        {
          cardtitle: "Highly Scalable",
          cardIcon: "Images/Laundrypage/icons/Component 42.png",
        },
        {
          cardtitle: "Dedicated Support",
          cardIcon: "Images/Laundrypage/icons/Component 43.png",
        },
        {
          cardtitle: "Global Solution",
          cardIcon: "Images/Laundrypage/icons/Component 44.png",
        },
      ];

  return (
    <div className={styles.laundrypagefooterbanner}>
    <div className={styles.laundryfooterbannertxt}>
    <h1>Why Choose Bottom Funnel As Your Laundry App Development Company ?</h1>
    <p>Our custom-built dry-cleaning app development services will help you deliver premium service for your customers and achieve the target ROI.</p>
    </div>
    <div className={styles.laundrylowerbannermapperbox}>{Laundrywhydata.map((e)=>{
      return (
        <div className={styles.laundryfooterbanmappeindi}>
<div className={styles.cardiconlaundry}><img src={e.cardIcon} alt="images" /></div>
<div className={styles.cardtitlelaundry}><h3>{e.cardtitle}</h3></div>

        </div>
      )
    })}</div>
    
    
   
    </div>
  )
}
