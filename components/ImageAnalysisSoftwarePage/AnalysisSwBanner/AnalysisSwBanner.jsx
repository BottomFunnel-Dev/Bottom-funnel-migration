
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";  
import styles from "./AnalysisSwBanner.module.css";

export const AnalysisSwBanner = () => {

 

  return (
    <div className={styles.AnalysisSwBannerContainer}>
      <h1>Image Analysis Software</h1>
      <div className={styles.AnalysisSwBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Image analysis (IA) is the identification of attributes within an image
        via digital image processing techniques to make the IA process more
        accurate and cost-effective.
      </p>

      <button
          className={styles.appbuildersolutionbannerbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Request a Quote
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
};
