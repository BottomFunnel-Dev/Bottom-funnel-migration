import React from 'react'
import styles from "./PortfolioBanner.module.css"

export const PortfolioBanner = () => {
  return (
    <div className={styles.portfoliobannermainboxes}>
    <div className={styles.portfoliobannerheadingtxt}>
    <h1><span>Our</span> <span>Portfolio</span></h1>
    <p>We aim at delivering rich digital experience a d building meaningful relationships with our clients through outstanding designs,business centered web solutions and best customer support.</p>
    
    <div>
    <button className={styles.portfoliobannerbutton}>Get Started</button>
    </div>
    
    </div>
   
    </div>
  )
}
