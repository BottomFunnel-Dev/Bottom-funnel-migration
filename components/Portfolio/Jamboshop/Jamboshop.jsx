import React from 'react'
import styles from "./Jamboshop.module.css"
import { Link } from '../Link/Link';
import Image from 'next/image';

export const Jamboshop = () => {

  return (
    <div className={styles.nextholidaymainboxes}>
    <div className={styles.nextholidayleftbox}>
    <Image className='nextholidaysimagemovable'
    src={"/Images/portfolio/Portfolio Screens/jambo.webp"}
    alt={"next holiday"}
    width={"0"}
    height={"0"}
    sizes={"100vw"}
    style={{ width: "80%", height: "100%" ,objectFit:"contain",marginLeft:"5%"
  
  }}
        />
  
   
    </div>
    
    <div className={styles.nextholidayrighttbox}>
    <h1>Jambo shop</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.nextholidayrightinsideflexbox}>
  <div className={styles.nextholidaywrapbox1}>
  <h5>Downloads</h5>
  <p>160K+</p>
  </div>
   <div className={styles.nextholidaywrapbox1}>
   <h5>Region</h5>
   <p>Kenya</p>
   </div>
<div className={styles.nextholidaywrapbox1}>
<h5>Technologies</h5>
<p><strong>Frontend</strong>: Javascript, Jquery, Bootstrap, Moment.Js</p>
<p><strong>Backend</strong>: Java</p>
<p><strong>Web servers</strong>: Apache</p>
<p><strong>Cloud Server</strong>: AWS</p>

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
<img src='/Images/portfolio/Portfolio logoimg/jamboshop.webp' alt='images' />
</div>
<div>
<Link href="https://www.jamboshop.com/">
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
