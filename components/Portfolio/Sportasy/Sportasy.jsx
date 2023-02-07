import React from 'react'
import styles from "./Sportasy.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/Sportasy.json";
import Lottie from "react-lottie";
import { Link } from '../Link/Link';

export const Sportasy = () => {
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
    <h1>Sportasy</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.yanballeftboxinsiderflexbox}>
    <div className={styles.yanbalindibox}>
    <h5>Downloads</h5>
    <p>160<span className={styles.yanbalplusbold}>+</span></p>
    </div>
    
    <div className={styles.yanbalindibox}>
    <h5>Region</h5>
    <p>Globle</p>
    </div>
    
    <div className={styles.yanbalindibox}>
    <h5>Technologies</h5>
    <p>Javascript, JQuery, Bootstrap, Popper, Cloudflare, Cdnjs</p>
    </div>
    <div className={styles.yanbalindibox}>
    <h5>Available on</h5>
<div className={styles.yanbaliconflexbox}>
<div className={styles.yanabaliconandeoid} >
<Link href="https://play.google.com/store/apps/details?id=com.sportasy.fantasy">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame.png' alt='images' />
</a>
</Link>
</div>

<div className={styles.yanabaliconandeoid}>
<Link href="https://sportasy.in/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>


<div className={styles.yanabaliconandeoid}>
<Link href="https://apps.apple.com/in/app/sporteasy/id599931266">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame-2.png' alt='images' />
</a>
</Link>
</div>
</div>

</div>

<div className={styles.yanballogoboxingalongflex}>
<img src='Images/portfolio/Sportasy/logo/Mobile 1.png' alt='images' />
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



