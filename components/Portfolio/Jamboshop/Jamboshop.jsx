import React from 'react'
import styles from "./Jamboshop.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/portfolio/Jambo Shop.json";
import Lottie from "react-lottie";
import { Link } from '../Link/Link';

export const Jamboshop = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div className={styles.nextholidaymainboxes}>
    <div className={styles.nextholidayleftbox}>

    <div className={styles.nextholidayleftboxforimages}>
    <Lottie style={{
      marginLeft:"-400%",
      width:"fitContent"
    }} options={lottieDefaultOptions} width={500} height={580}   />
  
    </div>
    </div>
    
    <div className={styles.nextholidayrighttbox}>
    <h1>Jambo shop</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.nextholidayrightinsideflexbox}>
  <div className={styles.nextholidaywrapbox1}>
  <h5>Downloads</h5>
  <p>150K+</p>
  </div>
   <div className={styles.nextholidaywrapbox1}>
   <h5>Region</h5>
   <p>Kenya</p>
   </div>
<div className={styles.nextholidaywrapbox1}>
<h5>Technologies</h5>
<p>Swift,Kotlin,Angular,Node,MongoDB</p>
</div>
<div className={styles.nextholidaywrapbox1}>
<h5>Available on</h5>
<div className={styles.portfolioavailableonicon}>
<div className={styles.porfolionextholidayicon}>
<Link href="https://play.google.com/store/apps/details?id=com.jamboshoppe.b2c">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame.png' alt='images' />
</a>
</Link>
</div>


<div className={styles.porfolionextholidayicon}>
<Link href="https://www.jamboshop.com/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>



<div className={styles.porfolionextholidayicon}>
<Link href="https://apps.apple.com/id/app/jamboshoppe/id1554294273?l=id">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame-2.png' alt='images' />
</a>
</Link>
</div>


</div>
</div>
<div className={styles.nextholidaywrapboximages}>
<img src='Images/portfolio/Jambo shop/logo/download.png' alt='images' />
</div>
<div>
<button className={styles.nextholidayviewcasebutton}>view case study</button>
</div>
    </div>
    
    </div>
    
    
    </div>
  )
}
