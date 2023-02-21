

import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./MLBanner.module.css";

export const MLBanner = () => {
 
  return (
    <div className={styles.MLBannerMain}>
      <h1>Machine Learning Development For Human-Like Solutions</h1>
      <div className={styles.MLBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is one such machine learning system that uses artificial
        intelligence to make predictions for the future based on historical
        data. By assessing user preferences and analyzing their online behavior,
        the company builds a model that predicts the next action users are
        likely to take after visiting their website.
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
};
