import React from 'react'
import styles from "./Roshiwelness.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/Roshi wellness.json";
import Lottie from "react-lottie";
import { Link } from '../Link/Link';



export const Roshiwelness = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div className={styles.yanbalmainboxes}>
    <div className={styles.yanballeftboxes}>
    <h1>Roshi Welness</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.yanballeftboxinsiderflexbox}>
    <div className={styles.yanbalindibox}>
    <h5>Downloads</h5>
    <p>170<span className={styles.yanbalplusbold}>+</span></p>
    </div>
    
    <div className={styles.yanbalindibox}>
    <h5>Region</h5>
    <p>Globle</p>
    </div>
    
    <div className={styles.yanbalindibox}>
    <h5>Technologies</h5>
   <p><strong>Frontend</strong>:Javascript, Jquery, Polyfill</p>
   <p><strong>Backend</strong> ruby</p>
   <p><strong>Web Servers</strong>Cloudfare</p>
   <p><strong>Database</strong>: shopify</p>

    </div>
    <div className={styles.yanbalindibox}>
    <h5>Available on</h5>
<div className={styles.yanbaliconflexbox}>


<div className={styles.yanabaliconandeoid}>
<Link href="https://roshiwellness.com/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>



</div>

</div>

<div className={styles.yanballogoboxingalongflex}>
<img src='Images/portfolio/roshi wellness/logo/download (2) 1.png' alt='images' />
</div>

<div><button className={styles.yanabalbuttonalongflex}>view case study</button></div>
    
    </div>
    
    </div>


    <div className={styles.yanbalrightboxes}>
    
    <Lottie className={styles.lottieimages} style={{
    
      width:"fitContent"
    }} options={lottieDefaultOptions}   />

    </div>
    
    
    </div>
  )
}