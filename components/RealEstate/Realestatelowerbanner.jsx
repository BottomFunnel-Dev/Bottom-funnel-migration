import React, { useState } from "react";
import styles from "./Realestatelowerbanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export default function Realestatelowerbanner() {
  return (
    <div className={styles.realestatelowerbannermainboxes}>
      <div className={styles.realestatelowerbannersometxtbox}>
        <h2> Software Products Development </h2>
        <p>
          We belive that every business, no matter how small or large,should be
          able to have easy access to quality it services, which is why we offer
          a varitety of plans for every budget.
        </p>

        <button
          className={styles.realstatelowerbannerbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Get Started
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
    </div>
  );
}
