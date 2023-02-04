import React from 'react'
import styles from "./Younity.module.css"

export const Younity = () => {
  return (
    <div className={styles.yanbalmainboxes}>
    <div className={styles.portfolioyanballeftbox}>
    <h1>Younity</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.nextholidayrightinsideflexbox}>
  <div className={styles.nextholidaywrapbox1}>
  <h5>Downloads</h5>
  <p>150K</p>
  </div>
   <div className={styles.nextholidaywrapbox1}>
   <h5>Region</h5>
   <p>UAE</p>
   </div>
<div className={styles.nextholidaywrapbox1}>
<h5>Technologies</h5>
<p>Swift,Kotlin,Angular,Node,MongoDB</p>
</div>
<div className={styles.nextholidaywrapbox1}>
<h5>Available on</h5>
<div className={styles.portfolioavailableonicon}>
<div className={styles.porfolionextholidayicon}><img src='Images/portfolio/Platform icons/Frame.png' alt='images' /></div>
<div className={styles.porfolionextholidayicon}><img src='Images/portfolio/Platform icons/Frame-1.png' alt='images' /></div>
<div className={styles.porfolionextholidayicon}><img src='Images/portfolio/Platform icons/Frame-2.png' alt='images' /></div>


</div>
</div>
<div className={styles.nextholidaywrapboximages}>
<img src='Images/portfolio/Younity/logo/Mobile 1.png' alt='images' />
</div>
<div>
<button className={styles.nextholidayviewcasebutton}>view case study</button>
</div>
    </div>
    </div>
    <div className={styles.portfolioyanbalrightbox}>
    <div className={styles.portfolioyanbelrightinnerimages}>
    <img src='Images/portfolio/Younity/Screens/Screenshot_2022.png' alt='images' />
    </div>
    
    
    </div>
    </div>
  )
}
