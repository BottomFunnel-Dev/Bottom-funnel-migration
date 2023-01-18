import React from 'react'
import styles from "./BusinessAnalysisBanner.module.css"



export const BusinessAnalysisBanner = () => {
  return (
    <div className={styles.businessanalysisbannermainbox}>
    
    <div className={styles.businessanalysisbannerleftbox}>
    <h1><a className={styles.specialcolor}>Business</a> Analysis</h1>
    <p>We transform conceptual business requirement into well designed applications by providing end to end mobile strategy solution
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor
     </p>
     <button className={styles.businessanalysisbannerbutton}>Get Started</button>
    </div>
    <div className={styles.businessanalysisbannerrightbox}>
    <img src='Images/Businessanalysis/BannersBackgrounds/Component79.png' alt='' />
    </div>
    </div>
  )
}
