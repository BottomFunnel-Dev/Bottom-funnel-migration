import React from 'react'
import styles from "./Yanbal.module.css"
import * as reactAnimation from "../../../public/Animation/PortfolioAnimation/portfolio/Yanbal.json";
import Lottie from "react-lottie";

export const Yanbal = () => {

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
    <h1>Yanbal</h1>
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
    <p>Javascript, JQuery, Mordernizr, JAVA, Microsoft</p>
    </div>
    <div className={styles.yanbalindibox}>
    <h5>Available on</h5>
<div className={styles.yanbaliconflexbox}>
<div className={styles.yanabaliconandeoid}><img src='Images/portfolio/Platform icons/Frame.png' alt='images' /></div>
<div className={styles.yanabaliconandeoid}><img src='Images/portfolio/Platform icons/Frame-1.png' alt='images' /></div>
<div className={styles.yanabaliconandeoid}><img src='Images/portfolio/Platform icons/Frame-2.png' alt='images' /> </div>
</div>

</div>

<div className={styles.yanballogoboxingalongflex}>
<img src='Images/portfolio/yanbal/logo/yanbal-logo.png' alt='images' />
</div>

<div><button className={styles.yanabalbuttonalongflex}>view case study</button></div>
    
    </div>
    
    </div>


    <div className={styles.yanbalrightboxes}>
    <Lottie style={{
          marginLeft:"-70%",
                 width:"fitContent"
           }} options={lottieDefaultOptions} width={720} height={530}   />
             
    
    </div>
    
    
    </div>
  )
}

