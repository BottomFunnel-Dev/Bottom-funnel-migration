import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./Onlinepaymentlowerbanner.module.css"


export const Onlinepaymentlowerbanner = () => {
  return (
    <div className={styles.onlinepaymentlowerbannermainboxes}>
    <div className={styles.onlinepaymentlowerbannertxt}>
    <h2>Boost your revenue with our online payment app development services.</h2>
    
<button className={styles.onlinepaymentbuttonlowerbanner}

type="button"
data-bs-toggle="modal"
data-bs-target="#staticBackdrop"

>Let's get started</button>

<div
className="modal fade"
id="staticBackdrop"
data-bs-backdrop="static"
data-bs-keyboard="false"
aria-labelledby="staticBackdropLabel"
aria-hidden="true"
>
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>

    <div>
      <PopupForm />
    </div>
  </div>
</div>
</div>


    </div>
    
    
    </div>
  )
}
