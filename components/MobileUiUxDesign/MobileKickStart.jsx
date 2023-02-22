import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";

import styles from "./MobileKickStart.module.css";

export const MobileKickStart = () => {
  return (
    <div className={styles.mobilekickstartbannerfootermainbox}>
      <div className={styles.mobilekickstartbannerfootertext}>
        <h1>Kickstart Your Dream Project With Us</h1>
        <p>World across industries</p>

        <button
          className={styles.mobileuiuxdesignlowerbannerbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          get started
        </button>

        <div
          className="modal fade"
          id="staticBackdropmobile"
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
