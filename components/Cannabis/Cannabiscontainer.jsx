import React, { useState } from "react";
import styles from "./Cannabiscontainer.module.css";
import { PopupForm } from "../PopupForm/PopupForm";

export default function Cannabiscontainer() {
 

  return (
    <div className={styles.cannabuscontainermainboxes}>
      <div className={styles.cannabuscontainerboxforsometext}>
        <h1> Medical Cannabis Delivery App </h1>
        <p>
          Take your dispensary business on-demand with Uber for medical cannabis
          to ease the ordering process for medical patients
        </p>



        <button
        className={styles.cannabuscontainerbutton}
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

      <div className={styles.CannabisContainerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Cannabis.json"
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
