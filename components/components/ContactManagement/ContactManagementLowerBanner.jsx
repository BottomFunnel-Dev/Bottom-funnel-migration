import React from 'react'
import styles from "./ContactManagementLowerBanner.module.css"

export const ContactManagementLowerBanner = () => {
  return (
    <div className={styles.contactmanagementlowerbannermain}>
    <div className={styles.contactmanagementlowerbannersometxtbox}>
    <h1>Looking for an all-in-one sales and marketing solution ? Try Freshsales Suite</h1>
    <p>Freshsales suite combine the power of sales, marketing,chat and telephony in one AI-powered solution.</p>
    <div className={styles.contactmgmtlowerbannerflex}>
    <div className={styles.contactmgmtlowerbannerflexleft}>
    <ul>
    <li>Attract the best leads with personalized messages</li>
    <li>engage across channel-Phone,Email,WhatsApp,Chat</li>
    <li>Close deals faster with AI-powered insights</li>
    <li>Deliver personalized experience with 360° customer context</li>
    </ul>
    </div>
    <div className={styles.contactmgmtlowerbannerflexright}>
    <img src='Images/contactmanagement/sales vector 1.png' alt='image' />
    </div>
    </div>
    
    
    </div>
    
    </div>
  )
}
