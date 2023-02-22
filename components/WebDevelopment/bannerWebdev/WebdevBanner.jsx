import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./webdevBanner.module.css";

export default function WebdevBanner({
  paraColor,
  bannerContent,
  animateData,
}) {
  return (
    <div className={styles.webDevBanner}>
      <div className={styles.webDebText}>
        <h1 style={{ color: paraColor ? paraColor : null }}>
          <span className={styles.orange}>{bannerContent.title.orange}</span>{" "}
          {bannerContent.title.normal}
        </h1>
        <p style={{ color: paraColor ? paraColor : null }}>
          {bannerContent.description}
        </p>

        <button
          className={styles.webDevButton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Request A Quote
        </button>

        <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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

      <div className={styles.mernanimation}>
        <lottie-player
          src={animateData}
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
