import React from 'react';
import { PopupForm } from '../PopupForm/PopupForm';
import styles from "./EyeWearAccelerate.module.css";

export const EyeWearAccelerate = () => {
  return (
    <div className={styles.eyewearacceleratemainbox}>
      <div className={styles.eyewearacceleratetextbox}>
        <h2>
          Accelerate Your Business Growth With Customizable Eyewear Delivery App Solution.
        </h2>

        <button className={styles.Eyewearacceleratebannerbutton}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        > Get Started </button>

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
  );
};

