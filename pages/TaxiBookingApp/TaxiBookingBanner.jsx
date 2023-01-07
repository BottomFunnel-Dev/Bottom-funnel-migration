import React from 'react'
import styles from "./TaxiBookingBanner.module.css"

export const TaxiBookingBanner = () => {
  return (
    <div className={styles.taxibookingbannermainboxes}>
   <div className={styles.taxibookingappboxfortext}>
   <h1><span className={styles.specialcolor}>Taxi Booking App</span> Development Services</h1>
   <p>With taxi booking app development, significant amount of your time can be saved. We have the best taxi dispatch software development expertise ensures that you get your best solution in no time. </p>
   <button className={styles.taxibookingappbannerbutton}>Get Started</button>
   </div>
    
    </div>
  )
}

