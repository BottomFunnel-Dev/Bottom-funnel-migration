import React from 'react'
import style from "./SaaSHomePageBanner.module.css";

export const SaaSHomePageBanner = () => {
  return (
    <div> 
        <div className={style.SaaSHomePagebannermainbox}>
    <div className={style.SaaSHomePagebannermainboxinnertextdiv}>
    <h1>Bottom Funnel for SaaS Business</h1>
    <p>No more juggling between multiple tools to view customer data. Sales & marketing automation, predictive contact scoring, behavioral analytics, telephony, email, and chat—all, in one solution. </p>
    <button className={style.SaaSHomePagebannerbutton}>TRY FOR FREE</button>
    </div>
  </div>
  </div>
  )
}
