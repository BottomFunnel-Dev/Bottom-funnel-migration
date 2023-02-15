import React from 'react'
import styles from "./ContactManagementBanner.module.css"

export const ContactManagementBanner = () => {
  return (
    <div className={styles.contactmanagementbannermainboxes}>
    <div className={styles.contactmanagementsometextboxes}>
    <h1>Manage contacts with ease</h1>
    <p>with freshsales,track your contact's communication,unify data,improve customer engagement,and develop long-lasting relationships.</p>
    <div className={styles.contactmanagementflexdivtwobutton}>
    <div><button className={styles.contactmanagementbutton}>Signup</button></div>
    <div className={styles.button2}><button className={styles.contactmanagementbutton}>Request Demo</button></div>
    
    </div>
    </div>
    
    
    </div>
  )
}
