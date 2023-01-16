import React from 'react'
import style from "./SalesWorldwide.module.css";


export const SalesWorldwide = () => {
  return (
    <div className={style.SalesWorldwideheading}>
        <h1>Trusted by businesses worldwide</h1>
        <div className={style.SalesWorldwideimagebox}>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/multichoice.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/brewdog.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/Bridge.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/fiverr.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/klarna.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/bluenile.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/itv.png" alt="logo" />
            </div>
            <div className={style.SalesWorldwideimage}>
                <img src="/Images/SalesPagePhotos/travix.png" alt="logo" />
            </div>
        </div>

    </div>
  )
}
