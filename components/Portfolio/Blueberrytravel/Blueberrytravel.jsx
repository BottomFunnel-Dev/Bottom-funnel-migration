import React from 'react'
import styles from "./Blueberrytravel.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/portfolio/Blueberry Travels.json";
import Lottie from "react-lottie";


export const Blueberrytravel = () => {
    const lottieDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: reactAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
  
    <div className={styles.cattlecountrymainboxes}>
    <div className={styles.portfolioyanballeftbox}>
    <h1>Blueberry Travels</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.nextholidayrightinsideflexbox}>
  <div className={styles.nextholidaywrapbox1}>
  <h5>Downloads</h5>
  <p>150K</p>
  </div>
   <div className={styles.nextholidaywrapbox1}>
   <h5>Region</h5>
   <p>Globle</p>
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
<img src='Images/portfolio/blueberry travels/logo/download (2) 1.png' alt='images' />
</div>
<div>
    <button className={styles.cattlecountrybutton}>view case study</button>
</div>
    </div>
    </div>
    <div className={styles.portfolioyanbalrightbox}>
    <Lottie style={{
      marginLeft:"-80%",
      width:"fitContent"
    }} options={lottieDefaultOptions} width={500} height={580}   />
  
    
    
    </div>
    </div>
    

  )
}

