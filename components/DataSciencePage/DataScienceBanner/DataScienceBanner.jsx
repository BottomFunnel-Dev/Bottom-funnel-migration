
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./DataScienceBanner.module.css";

export const DataScienceBanner = () => {
 

  return (
    <div className={styles.DataScienceBannerMain}>
      <h1>
        <span>Data</span> Science Services
      </h1>
      <div className={styles.DataScienceBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is a company that is dedicated to helping its clients with
        their data problems. It has a team of data scientists who have years of
        experience solving various business difficulties with the help of big
        data.
      </p>

      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Get Started
      </button>

      <div
        className="modal fade"
        id="staticbackdropds"
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
};
