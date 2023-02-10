import React from 'react'
import styles from "./Salesbot.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/Salesboat.json";
import Lottie from "react-lottie";
import { Link } from '../Link/Link';

export const Salesbot = () => {

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

    <Lottie options={lottieDefaultOptions}    />
  
    </div>
    
    <div className={styles.nextholidayrighttbox}>
    <h1>Salesbot</h1>
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

<img src='Images/portfolio/Platform icons/Platform icons/Frame.png' alt='images' />

</div>


<div className={styles.porfolionextholidayicon}>
<Link href="https://www.salesbot.co/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>


<div className={styles.porfolionextholidayicon}>

<img src='Images/portfolio/Platform icons/Platform icons/Frame-2.png' alt='images' />

</div>


</div>
</div>
<div className={styles.nextholidaywrapboximages}>
<img src='Images/portfolio/Sales bot/logo/download (2) 1.png' alt='images' />
</div>
<div>
<Link href="https://www.salesbot.co/">
<a className={styles.androidappicon}>
<button className={styles.nextholidayviewcasebutton}>view case study</button>
</a>
</Link>
</div>
    </div>
    
    </div>
    
    
    </div>
  )
}
