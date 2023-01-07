import React from 'react'
import styles from "./AviationBanner.module.css"

export const AvitaionBanner = () => {
  return (
    <div className={styles.aviationbannermaiboxes}>
    <div className={styles.aviationbannertextboxes}>
    <h1>Aviation Softwere Development Services</h1>
    </div>
     <div className={styles.aviationboxsmalltextbox}>
     <p>Let us be your trusted technology partner and help you solve complex challenges in your Aviation business.</p>
    
    <button className={styles.aviationbannerbutton}>Book a free Cunsulatncy</button>
     </div>
    
    </div>
  )
}
