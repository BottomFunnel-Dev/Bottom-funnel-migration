import Image from 'next/image'
import React from 'react'
import styles from "./Customer.module.css"


export const Customer = () => {

    const kidswearcustomerappdaat=[
        {
            icon:"/Images/kidswearappservice/Group78.webp",
            htxt:" Product Filtering & Sorting",
            stxt:"With advanced search filter, users will be able to find their products and services in a more efficient way.",
        },
       
        
        {
            icon:"/Images/kidswearappservice/Tracking delivery.webp",
            htxt:"Shipment Tracking",
            stxt:"Users should be able to track their products in real-time.",
        },


        {
            icon:"/Images/kidswearappservice/Vector.webp",
            htxt:"Multiple Payment Options",
            stxt:"Integrate standard payment gateway to allow users to pay anyway they want.",
        },


        {
            icon:"/Images/kidswearappservice/Group.webp",
            htxt:"Push Notification",
            stxt:"Offer your shipper with multiple payment options and helps in invoice generation.",
        },

    ]





  return (
    <div className={styles.kidswearcustomermainboxes}>
  <div className={styles.kidswearcustomerleftbox}>
  <h2><span>Customer App</span> Features</h2>

  <div className={styles.kidswearcustomerdatamapping}>{kidswearcustomerappdaat.map((e)=>{
    return (
        <div>
        <div className={styles.kidswearicon}>
        <Image
          src={e.icon}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain", }}
        />
        </div>
        <div className={styles.kidswearcustomerapptextdata}>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        
        
        </div>
    )
  })}</div>
  
  </div>



<div className={styles.kidswearcustomerrightbox}>
<Image
src={"/Images/kidswearappservice/Multiple Payment.webp"}
alt={"image"}
width={"0"}
height={"0"}
sizes={"100vw"}
style={{ width: "40%", height: "90%",objectFit:"contain", marginLeft:"20%" }}
        />
    
</div>

    
    </div>
  )
}
