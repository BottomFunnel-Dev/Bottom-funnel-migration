import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./PoliticsDevelopmentlowerbanner.module.css"


export const PoliticsDevelopmentlowerbanner = () => {
  return (
    <div className={styles.politicslowerbannermainboxes}>
    <div className={styles.lowerbannerpoliticstxtbox}>
    <h3>Get all the gamin development solutions for all kind of platform?</h3>
    <button className={styles.politicslowerbannerbutton}
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    >Let's Get Started</button>
    
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
