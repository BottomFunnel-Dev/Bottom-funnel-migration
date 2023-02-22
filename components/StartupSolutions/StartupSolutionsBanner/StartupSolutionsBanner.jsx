
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./StartupSolutionsBanner.module.css";

export default function StartupSolutionsBanner() {

  return (
    <div className={styles.StartupSolutionsBannerMain}>
      <h1>
        <span>Startup</span> Solutions
      </h1>
      <div className={styles.StartupSolutionsBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is a startup consulting firm that helps new enterprises to
        grow and flourish. We believe in giving back, so we provide our clients
        with access to our vast network of experts who are passionate about
        helping businesses succeed.
      </p>
      <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
           Request A Quote
          </button>

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
  );
}
