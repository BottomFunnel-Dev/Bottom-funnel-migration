import React from 'react'
import styles from "./MobileDevMainBanner.module.css"

export const MobileDevMainBanner = () => {
  return (
    <div className={styles.mobiledevmainbannermainboxes}>
    <div className={styles.mobiledevmaininsidebannertxt}>
    <h1 className={styles.mobileDevHeading}>Mobile App</h1>
     <h1> Development Services</h1>
     <p>Bottom funnel provides an all-in-one development 
     services to help your business grow. We have a team 
     of experts whose experience and expertise ranges from
      application architecture to user experience, ensuring
       that you get the best results possible. With our 
       extensive portfolio, we understand what it takes
        to build a successful app, and we'll work hard to
         bring your vision to life. Let us help you take
          your business places it's never been before!</p>
     <button className={styles.mobileDevMainbannerbutton}>Get Started</button>
     </div>
    
    </div>
  )
}
