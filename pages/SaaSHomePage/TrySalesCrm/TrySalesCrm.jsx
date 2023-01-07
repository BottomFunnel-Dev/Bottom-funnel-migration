import React from 'react'
import style from "./TrySalesCrm.module.css";

export const TrySalesCrm = () => {
  return (
    <div>
       <div className={style.TrySalesCrmmaindiv}>
        <div className={style.TrySalesCrmcontaindiv}>
            <h2>Try Bottom Funnel sales CRM</h2>
            <p>Bottom Funnel Sales is a leading CRM built for sales teams in SaaS businesses geared to improve customer experiences, sell more, and increase productivity. Your search for a CRM ends here. Sign up for a 21-day free trial and see how you can grow your SaaS business organically.</p>
        <button className={style.TrySalesCrmbutton}>Start Free Trail</button>
        </div>
        <div className={style.TrySalesCrmimagediv}>
            <img src="Images/SaaShomepagephotos/Startup.png" alt="image" />
        </div>
        </div> 
    </div>
  )
}
