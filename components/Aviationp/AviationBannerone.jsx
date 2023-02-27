import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./AviationBannerone.module.css";

export default function AviationBannerone() {
  return (
    <div className={styles.AviationBannermain}>
      <div className={styles.aviationbannertext}>
        <h1>Aviation Software <br/>Developement Services</h1>
        <p>
          Let us be your strategic technology partner and help you to solve<br/>
          complex challenges and take your Aviation business to unprecedented
          height.
        </p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        >Get Started</button>

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
}
