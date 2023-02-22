import React, { useState } from "react";
import styles from "./mainBanner.module.css";

import { PopupForm } from "../../PopupForm/PopupForm";

export default function MainBanner({ bannerData }) {


  return (
    <div className={styles.mainBanner}>
      <div className={styles.mainbannerTextcontainer}>
        <div>
          <h1>{bannerData.title}</h1>
          <p>{bannerData.description}</p>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Get Started
          </button>

          <div
            className="modal fade"
            id="staticBackdropcarpool"
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

      <div className={styles.mainbannerImageContainer}>
        <img src={bannerData.heroImage} alt="images" />
      </div>
    </div>
  );
}
