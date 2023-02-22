
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./CustomisedWebBanner.module.css";

export const CustomisedWebBanner = () => {

  return (
    <div className={styles.CustomisedWebBannerMain}>
      <h1>
        <span>Custom</span> Web Development Services
      </h1>
      <div className={styles.CustomisedWebBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is the best option for organizations that require
        brand-new and creative designs. Our team of experts will help you figure
        out your online presence, from strategy to execution. We'll work with
        you to understand your goals and requirements, and deliver a website
        that's effective, efficient, and designed with you in mind. We're
        committed to providing the best possible experience for our clients, so
        we always aim to exceed expectations.
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
