

import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./EnterpriseWebBanner.module.css";

export const EnterpriseWebBanner = () => {

  return (
    <div className={styles.EnterpriseWebBannerMain}>
      <h1>Enterprise Web Solutions</h1>
      <div className={styles.EnterpriseWebBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Enterprise Web Services (EWS) is a system of reference that enables
        enterprises to scale their applications, access commonly shared source
        data in real-time and highly available architecture. The goal of EWS is
        to enable enterprises to access commonly required source data and make
        them more productive with it.
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
