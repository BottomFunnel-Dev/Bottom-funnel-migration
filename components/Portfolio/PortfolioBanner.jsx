import React from 'react';
import styles from "./PortfolioBanner.module.css";
import { PopupForm } from "../PopupForm/PopupForm";

export const PortfolioBanner = () => {
  return (
    <div className={styles.portfoliobannermainboxes}>
      <div className={styles.portfoliobannerheadingtxt}>
        <h1>
          <span>Our</span> <span>Portfolio</span>
        </h1>

        <p>
          We aim at delivering rich digital experience and building meaningful relationships with our clients through
          outstanding designs,business centered web solutions and best customer support.
        </p>

        <div>
          <button className={styles.portfoliobannerbutton}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">Get Started</button>


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

    </div>
  )
}
