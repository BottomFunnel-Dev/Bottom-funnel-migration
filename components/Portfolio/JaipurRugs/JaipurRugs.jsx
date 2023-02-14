import React from 'react'
import styles from "./JaipurRugs.module.css"
import { Link } from '../Link/Link';
import Image from 'next/image';

export const JaipurRugs = () => {
  return (
    <div className={styles.nextholidaymainboxes}>
    <div className={styles.nextholidayleftbox}>

    <Image className='nextholidaysimagemovable'
    src={"/Images/portfolio/Portfolio Screens/jaipurrags.webp"}
    alt={"next holiday"}
    width={"0"}
    height={"0"}
    sizes={"100vw"}
    style={{ width: "92%", height: "100%" ,objectFit:"contain",marginLeft:"5%"

  
  
  
  }}
        />
  
    </div>
    
    <div className={styles.nextholidayrighttbox}>
    <h1>Jaipur Rugs</h1>
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
<p><strong>Frontend</strong>: Javascript, Jquery, Bootstrap</p>
<p><strong>Backend</strong>: ASP.NET</p>
<p><strong>web servers</strong>: Cloudflare</p>
<p><strong>Database</strong>: Amazon</p>

</div>
<div className={styles.nextholidaywrapbox1}>
<h5>Available on</h5>
<div className={styles.portfolioavailableonicon}>
<div className={styles.porfolionextholidayicon}>

<img src='Images/portfolio/Platform icons/Frame.png' alt='images' />

</div>


<div className={styles.porfolionextholidayicon}>
<Link href="https://www.jaipurrugs.com/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>

<div className={styles.porfolionextholidayicon}><img src='Images/portfolio/Platform icons/Frame-2.png' alt='images' /></div>


</div>
</div>
<div className={styles.nextholidaywrapboximages}>
<img src='/Images/portfolio/Portfolio logoimg/jaipurrags.webp' alt='images' />
</div>
<div>
<button className={styles.nextholidayviewcasebutton}>view case study</button>
</div>
    </div>
    
    </div>
    
    
    </div>
  )
}
