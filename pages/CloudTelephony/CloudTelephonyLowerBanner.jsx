import React from 'react'
import styles from "./CloudTelephonyLowerBanner.module.css"

export const CloudTelephonyLowerBanner = () => {
  return (
    <div className={styles.cloudtelephonylowerbannermainboxes}>
    <div className={styles.cloudtelephonylowerbannersometxt}>
    <h1>Looking for an all-in-one sales and marketing solutions ? Try Bottim Funnel Suite</h1>
    <p>Bottom funnel Suite combines the power of sales, Marketing chat and telephony in one AI-powered solution.</p>
    <div className={styles.cloudtelephonylowerbannerflexboxinner}>
    <div className={styles.cloudlowerbannerleftbox}>
    <ul>
    <li>Attract the best leads with personalized messages</li>
    <li>Engage across channels-Phone,Email,WhatsApp,Chat</li>
    <li>Close deals faster with AI-powered insights</li>
    <li>Deliver personalized experiences with 360° customer context.</li>
    </ul>
    <button className={styles.lowerbannercloudtelephonybutton}>Learn More</button>
    </div>
    <div className={styles.cloudlowerbannerrightbox}>
    <img src='Images/cloudtelephony/sales vector 1.png' alt='images' />
    </div>
  
    </div>
    </div>
    
    </div>
  )
}
