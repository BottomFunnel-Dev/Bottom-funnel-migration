import React, { useState } from "react";
import styles from "./Beautycontainer.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export default function Beautycontainer() {
 

  return (
    <div className={styles.beautycontainer}>
      <div className={styles.beautyleft}>
        <h1 className={styles.heading}>
          Beauty And Salon App Development Solutions
        </h1>

        <p>
          Beautify Your Business with An App! Enhance your salon's customer
          experience with our cutting-edge beauty & salon app development.
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
            id="staticBackdropbeauty"
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

 

      <div className={styles.mobile}>
        <lottie-player
          src="/Animation/SolutionsAnimation/beauty and salon.json"
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
