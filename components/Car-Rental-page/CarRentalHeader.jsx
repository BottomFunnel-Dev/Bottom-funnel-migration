import React, { useState } from "react";
import styles from "./carRentalHeader.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export default function CarRentalHeader() {


  return (
    <div className={styles.RGcarRentalContainer}>
      <div className={styles.RGcarRentalHeaderLeft}>
        <h1> Car Rental App Solution</h1>
        <p>
          The Screeno ecosystem is designed to help you generate profit. Set up
          complete sales and marketing funnels with ease using the Screeno
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
            id="staticBackdropcarrental"
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

      <div className={styles.RGcarRentalHeaderRight}>
        <lottie-player
          src="/Animation/SolutionsAnimation/car rental.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
