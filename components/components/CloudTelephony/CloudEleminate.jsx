import React from 'react'
import styles from "./CloudEleminate.module.css"

export const CloudEleminate = () => {
    return (
        <div className={styles.cloudeleminatemainboxes}>
       
        <div className={styles.cloudeleminateboxflexingdiv}>
        <div className={styles.cloudeleminateboxflexingdivleft}>
        <h1>Eliminate manual data entry and focus on selling</h1>
       <p>Eliminate manually entering data into your CRM and save time.With your Freshsales account,you can automatically log sales calls and add call logs in your CRM.You can also map calls that you receive on your phone number to existing or new contacts add notes about the call and do more.</p>
        </div>
    
        <div className={styles.cloudeleminateboxflexingdivright}>
        <img src='Images/cloudtelephony/contextual conversations.png' alt='images' />
        </div>
        </div>
        
        </div>
      )
    }
    