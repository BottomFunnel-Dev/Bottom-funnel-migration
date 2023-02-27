import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./getStarted.module.css";

export default function GetStarted () {
  return (
    <div className={styles.getStarted}>
      <div className={styles.getText}>
        <p>
          Don't wait any longer! Contact bottom funnel today and let us build
          your next success story!
        </p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        >
        Let's get Started</button>

        <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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
