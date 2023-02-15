import React from 'react'
import styles from "./CloudTelephonyBanner.module.css";



export const CloudTelephonyBanner = () => {
  return (
    <div className={styles.cloudtelephonybannermainbox}>
    <div className={styles.cloudtelephonybannersometextboxes}>
    <h1>Built-in cloud telephony to help you converse better</h1>
    <p>Monitor and measure sales calls and their impact and deliver consistent experiences with Freshsales.</p>
    <button className={styles.cloudtelebannerbutton}>Sign up for free</button>
    </div>
    
    </div>
  )
}
