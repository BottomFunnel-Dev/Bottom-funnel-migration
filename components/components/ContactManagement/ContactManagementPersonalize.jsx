import React from 'react'
import styles from "./ContactManagementPersonalize.module.css"

export const ContactManagementPersonalize = () => {
  return (
    <div className={styles.contactmanagementpersonalizemainbox}>
    <div className={styles.getpersonalizecontactmanagementsometextbox}>
    <h1>Gain a 360° view of contacts and build stronger relationships.</h1>
    <p>Get complete details about the contacts in your database-be it marketing contacts or sales leads.Devise strategies and run marketing campaigns that result in greater engagement and drive conversions.Arm your sales teams with sufficient intel to close deals fater with personalized engegement.</p>
    </div>
    <div className={styles.getpersonalizecontactmanagementboxforimage}>
    <div className={styles.getpersonalizeimageboxcontactmanagementforouterimage}>
    <img src='Images/contactmanagement/gain 360 view.png' alt='image' />
    </div>
    </div>
    </div>
  )
  
  
}
