import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./BIBanner.module.css";

export default function BIBanner() {
  return (
    <div className={styles.BIBannerMain}>
      <h1>
        <span>Business Intelligence</span> Services & Solutions
      </h1>
      <div className={styles.BIBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Business intelligence is something that every company needs nowadays,
        and Bottom Funnel is here to take care of it. With an impressive track
        record of delivering quality services, they know exactly how to extract
        data-driven insights from structured data. This makes them a smart
        choice when it comes to making informed decisions about your company's
        future growth or potential opportunities.
      </p>

      <button
        className={styles.aicontentbannerbutton}
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
}
