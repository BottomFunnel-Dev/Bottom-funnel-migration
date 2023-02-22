import React, { useState } from "react";
import styles from "./pickupBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export const PickupBanner = () => {


  return (
    <div className={styles.pickupbannermaiboxes}>
      <div className={styles.pickupbannersometextbox}>
        <h1> Set Up An Efficient Online Pickup & Delivery Business </h1>
        <p>
          We all know that managing a business is no easy task, especially when
          it grows and requires more attention. When you have to attend to every
          little detail of it, life gets hectic. And if there's shipping
          involved, things can get even more complicated.
        </p>
        <button
        className={styles.pickupbannerbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Get Started
          </button>

          <div
            className="modal fade"
            id="staticBackdroppickup"
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

      <div className={styles.pickupDeliveryBannerAimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/pickup and delivery.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
