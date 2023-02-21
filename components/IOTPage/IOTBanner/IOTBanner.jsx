
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./IOTBanner.module.css";

export const IOTBanner = () => {

  return (
    <div className={styles.IOTBannerMain}>
      <h1>
        Internet of Things (IOT) services help elaborate your idea of IoT
        adoption and set up secure technology infrastructure for advanced data
        tasks.
      </h1>
      <div className={styles.IOTBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>

      <p>
        Bottom Funnel IoT development can be a challenging process. However,
        when you partner with Us, it becomes an easy one. We have the expertise
        and experience to help you build successful IoT solutions that will
        change the way your customers do business.
      </p>
      <button
          className={styles.appbuildersolutionbannerbutton}
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
