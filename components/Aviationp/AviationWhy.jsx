import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./AviationWhy.module.css"
export const AviationWhy = () => {
  return (
    <div className={styles.AviationWhy}>
        <h2>Why Choose Bottom Funnel?</h2>
        <p>You need to consider that your Aviation website is a niche, but you need to make it appealing at the industry level. Aviation is the new future of IT industries</p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >Start free trail</button>

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
