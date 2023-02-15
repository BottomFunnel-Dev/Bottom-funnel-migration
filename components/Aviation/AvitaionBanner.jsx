import React from 'react'
import styles from "./AviationBanner.module.css"

export default function AvitaionBanner  () {
  return (
    <div className={styles.aviationbannermaiboxes}>
    <div className={styles.aviationbannertextboxes}>
    <h1>Aviation Software Development Services</h1>
   <p>Let us be your trusted technology partner and help you solve complex challenges in your Aviation business.</p>
    
    <button className={styles.aviationbannerbutton}>Book a free Consultancy</button>
     </div>
    
    </div>
  )
}
