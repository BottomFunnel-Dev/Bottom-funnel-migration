import React from 'react'
import styles from "./Nextholiday.module.css"
import { Link } from '../Link/Link';
import Image from 'next/image';

export const Nextholiday = () => {

  return (
    <div className={styles.nextholidaymainboxes}>
    <div className={styles.nextholidayleftbox}>

    <Image className='nextholidaysimagemovable'
          src={"/Images/portfolio/Portfolio Screens/Next Holidays.webp"}
          alt={"next holiday"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "90%", height: "100%" ,objectFit:"contain",
      
        
        }}
        />
    
    </div>
    
    <div className={styles.nextholidayrighttbox}>
    <h1>Next Holidays</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.nextholidayrightinsideflexbox}>
  <div className={styles.nextholidaywrapbox1}>
  <h5>Downloads</h5>
  <p>180K<span style={{
    fontWeight:900,

  }}>+</span></p>
  </div>
   <div className={styles.nextholidaywrapbox1}>
   <h5>Region</h5>
   <p>UAE</p>
   </div>
<div className={styles.nextholidaywrapbox1}>
<h5>Technologies</h5>
<p><strong>Frontend</strong>: Javascript, Query</p>
<p><strong>Backend</strong>: ASP.NET</p>
<p><strong>Database</strong>: My SQl</p>
<p><strong>Cloud servers</strong>: AWS Server, Cloudfare</p>
</div>
<div className={styles.nextholidaywrapbox1}>
<h5>Available on</h5>
<div className={styles.portfolioavailableonicon}>
<div className={styles.porfolionextholidayicon}>
<Link href="https://play.google.com/store/apps/details?id=com.nextholidays.app">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Platform icons/Frame.png' alt='images' />
</a>
</Link>
</div>
<div className={styles.porfolionextholidayicon}>
<Link href="https://www.nextholidays.com/">
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
<img src='Images/portfolio/Next holiday/logo/download (2) 1.png' alt='images' />
</div>
<div>
<Link href="https://www.nextholidays.com/">
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
