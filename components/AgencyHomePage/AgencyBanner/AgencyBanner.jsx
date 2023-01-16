import React from 'react'
import style from "./AgencyBanner.module.css";

export const AgencyBanner = () => {
  return (
    <div>
               <div className={style.AgencySalesbannermainbox}>
    <div className={style.AgencySalesbannermainboxinnertextdiv}>
    <h1>CRM for Agencys</h1>
    <p>Improve speed, time, and quality of customer service with a  frist-rate CRM for Agencys </p>
    <button className={style.AgencySalesbannerbutton}>TRY FOR FREE</button>
    </div>
  </div>
    </div>
  )
}
