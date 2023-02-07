import React from 'react'
import styles from "./AnandamGreens.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/portfolio/Anandam Greens.json";
import Lottie from "react-lottie";
import { Link } from '../Link/Link';


export const AnandamGreens = () => {

  
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div className={styles.anandamgreensmainboxes}>
    <div className={styles.portfolioanandamgreensleftbox}>
       <Lottie style={{
      marginLeft:"-100%",
      width:"fitContent"
    }} options={lottieDefaultOptions} width={500} height={600}   />
  
    </div>


    <div className={styles.portfolioanandamgreensrightbox}>
    <h1>Anandam Greens</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.nextholidayrightinsideflexbox}>
  <div className={styles.nextholidaywrapbox1}>
  <h5>Downloads</h5>
  <p>150K+</p>
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

<div className={styles.porfolionextholidayicon}>
<Link href="https://aanandamgreens.com/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>



</div>
</div>
<div className={styles.nextholidaywrapboximages}>

<img src='Images/portfolio/Anandam greens/logo/logo 2.png' alt='images' />

</div>
<div>
<button className={styles.nextholidayviewcasebutton}>view case study</button>
</div>
    </div>
    
    </div>
    </div>
  )
}
