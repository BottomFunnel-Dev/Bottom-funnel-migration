import React, { useState } from "react";
import styles from "./TaxiBookingBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export default function TaxiBookingBanner() {
  return (
    <div className={styles.taxibookingbannermainboxes}>
      <div className={styles.taxibookingappboxfortext}>
        <h1>
          <span className={styles.specialcolor}>Taxi Booking App</span>{" "}
          Development Services
        </h1>

        <p>
          With taxi booking app development, significant amount of your time can
          be saved. We have the best taxi dispatch software development
          expertise ensures that you get your best solution in no time.
        </p>

        <button
          className={styles.taxibookingappbannerbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Get Started
        </button>

        <div
          className="modal fade"
          id="staticBackdroptaxi"
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

      <div className={styles.taxiBookingBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Taxi booking.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
