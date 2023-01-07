import React from 'react'
import style from "./SalesPageBanner.module.css";


export const SalesPageBanner = () => {
  return (
    <div>
        
         <div className={style.SalesPageBannermainbox}>
         <div className={style.SalesPageBannermainboximage}>
          <img src="/Images/SalesPagePhotos/salesbnaer.png"></img>
        </div>
        <div className={style.SalesPageBannermainboxinnertextdiv}>
          <h1>Accelerate your revenue </h1>
          <h1>with context-driven sales </h1>
          <p>
        Personalize engagement, shorten your sales cycle, and grow your business with Bottom Funnel sales.
          </p>
          <div className={style.SalesPageBannerbuttonbox}>

          <button className={style.SalesPageBannerbutton}>SIGN UP </button>
          <button className={style.SalesPageBannerbutton1}>VIEW PRICING</button>
          </div>
        </div>
       
      </div>

    </div>
  )
}
