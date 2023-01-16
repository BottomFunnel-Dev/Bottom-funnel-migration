import React from 'react'
import styles from "./LaundryPage.module.css"

const LaudryApplication = () => {
  return (
    <div className={styles.laundryapplicationmaindiv}>
    <div className={styles.laundryapplicationtxtdiv}>
    <h5>Launch Your Own</h5>
    <h1>Laundry Application With Our Best In Class Laundry App Development Services</h1>
   </div>
   <div className={styles.laundryapplicationflexbox}>
   <div className={styles.laundryflexboxno1}>
   <div className={styles.laundrypageflexboxno1imagediv}>
  <img className={styles.laundrypageflexboxno1imagedivimage1} src='Images/Laundrypage/Bannersbackgrounds/dirtyshirtlaundryservice.png' alt='' />
   
   </div>
   <div className={styles.laundryflexbox1imagetxt}>
   <h4 className={styles.laundryflexbox1imagetxt1}>Single Vendor Laundry Delivery Service</h4>
   <p className={styles.laundryflexbox1imagetxt2}><small >Bottom Funnel is providing ready made solutions that helps individual startups and enterprises launch their business quickly. We have the wide range of ready made solutions, customizable per your business requirements. We are an expert laundry & Dry cleaning app  services all around the globe.</small></p>
   <p className={styles.laundryflexboximageboxgreentxt}>Get Started</p>
   </div>
   
   
   </div>





   <div className={styles.laundryflexboxno2}>
   <div className={styles.laundrypageflexboxno1imagediv}>
  <img className={styles.laundrypageflexboxno1imagedivimage1} src='Images/Laundrypage/Bannersbackgrounds/washingmachineslaundromat.png' alt='' />
   
   </div>
   <div className={styles.laundryflexbox1imagetxt}>
   <h4 className={styles.laundryflexbox1imagetxt1}>Multi-vendor Laundry Service Marketplace</h4>
   <p className={styles.laundryflexbox1imagetxt2}><small >On Demand Laundry & Dry Cleaning App Development.Bottom Funnel is a reputed laundry app development company providing on-demand laundry mobile app and same day laundry mobile app development for iPhone & Android. Bottom Funnel is a reputed laundry app</small></p>
   <p className={styles.laundryflexboximageboxgreentxt}>Get Started</p>
   </div>
   
   
   </div>
   </div>
      
    </div>
  )
}

export default LaudryApplication
