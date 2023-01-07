import React from 'react'
import style from "./MakeYourDeal.module.css";

export const MakeYourDeal = () => {
  return (
    <div className={style.MakeYourDealdiv} >
      <div className={style.MakeYourDealinnerdiv}>
        <h1>Make Your Deal with Bottom Funnel Sales</h1>
        <h4>Start your 21-days free trial. No credit card required.</h4>
        <button className={style.MakeYourDealbutton}> SIGN UP </button>
        </div>
    </div>
  )
}
