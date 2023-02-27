import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./PoliticsWhychooseus.module.css"

export const PoliticsWhychooseus = () => {
  return (
    <div className={styles.politicswhychooseusmainbox}>
    <h1>Why Choose Bottom Funnel</h1>
    <p>You need to consider that your Politics website has a niche, but also you need to make it appealing at the industry level.Politics is the new future of IT industries.</p>

    <button
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    
    
    >Start free trial</button>

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
  )
}
