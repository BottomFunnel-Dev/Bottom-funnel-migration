import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./CarserviceMidbanner.module.css"

export default function CarServiceMidbanner ()  {
  return (
    <div className={styles.Midbannermainbox}>
        <div className={styles.Midbannermainimg}>
      <div className={styles.Midbannertextbox}>
        <h2>
          Accelerate Your Business Growth With Customizable Car Service App Developement Solution.
        </h2>
        <button className={styles.Midbannerbutton}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        > Get Started </button>

        <div
            className="modal fade"
            id="staticBackdropcarrental"
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
                  <PopupForm/>
                </div>
              </div>
            </div>
          </div>

      </div>
      
      </div>

      <div className={styles.Midbannertext}>
        <h1>An Overview of Our Car service App</h1>
        <p>A complete scope of car service app developement solution for co-ordinating and moving travellers Together.</p>
      </div>
    
    </div>
  )
}
