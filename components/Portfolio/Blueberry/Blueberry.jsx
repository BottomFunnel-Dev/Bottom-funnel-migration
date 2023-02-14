import React from 'react'
import styles from "./Blueberry.module.css"
import { Link } from '../Link/Link';
import Image from 'next/image';

export const Blueberry = () => {
  return (
    <div className={styles.yanbalmainboxes}>
    <div className={styles.yanballeftboxes}>
    <h1>Blueberry Group</h1>
    <p>When you feel like you need a break from your hectic routine, take a trip to Portfolio bottom funnel. We've got everything you're looking for in an escape: a quiet retreat, great food, and friendly service. Our modern, rustic-style restaurant is perfect for any occasion.</p>
    <div className={styles.yanballeftboxinsiderflexbox}>
    <div className={styles.yanbalindibox}>
    <h5>Downloads</h5>
    <p>140<span className={styles.yanbalplusbold}>+</span></p>
    </div>
    
    <div className={styles.yanbalindibox}>
    <h5>Region</h5>
    <p>Globle</p>
    </div>
    
    <div className={styles.yanbalindibox}>
    <h5>Technologies</h5>
  <p><strong>Database</strong>: My Sql</p>
  <p><strong>Frontend</strong>: Javascript, Jquery, Bootstrap</p>
  <p><strong>Backend</strong>: PHP</p>
  <p><strong>Web Server</strong>: Cloudfare Server</p>

    </div>
    <div className={styles.yanbalindibox}>
    <h5>Available on</h5>
<div className={styles.yanbaliconflexbox}>


<div className={styles.yanabaliconandeoid}>
<Link href="https://blueberrygroup.co/">
<a className={styles.androidappicon}>
<img src='Images/portfolio/Platform icons/Frame-1.png' alt='images' />
</a>
</Link>
</div>


</div>

</div>

<div className={styles.yanballogoboxingalongflex}>
<img src='/Images/portfolio/Portfolio logoimg/blueberrygroup.webp' alt='images' />
</div>

<div>
<Link href="https://blueberrygroup.co/">
<a className={styles.androidappicon}>

<button className={styles.yanabalbuttonalongflex}>view case study</button>
</a>
</Link>
</div>
    
    </div>
    
    </div>


    <div className={styles.yanbalrightboxes}>
 
    <Image className='nextholidaysimagemovable'
    src={"/Images/portfolio/Portfolio Screens/blueberrygroup.webp"}
    alt={"next holiday"}
    width={"0"}
    height={"0"}
    sizes={"100vw"}
    style={{ width: "95%", height: "100%" ,objectFit:"contain",

  
  
  
  }}
        />
    
    </div>
    
    
    </div>
  )
}
