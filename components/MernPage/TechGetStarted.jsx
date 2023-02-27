import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./techGetStarted.module.css";
export const TechGetStarted = ({ calltoAction }) => {
  return (
    <div
      className={styles.techgetstarted}
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${calltoAction.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div>
        <p>{calltoAction.description}</p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        >{calltoAction.buttonText}</button>

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
