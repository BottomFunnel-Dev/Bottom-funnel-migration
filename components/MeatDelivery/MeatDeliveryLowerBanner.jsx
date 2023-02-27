import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./MeatDeliveryLowerBanner.module.css"

export const MeatDeliveryLowerBanner = () => {
  return (
    <div className={styles.meatdeliverylowerbannermainboxes}>
    <div className={styles.meatdeliverylowerbannertextbox}>
    <h2>Discuss Your Requirement with Our Experts</h2>
    <button className={styles.meatdeliverylowerbanner}
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    
    
    >Book a call with with our experts</button>
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

