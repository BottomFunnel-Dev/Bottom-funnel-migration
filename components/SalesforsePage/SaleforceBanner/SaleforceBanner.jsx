
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./SaleforceBanner.module.css";

export default function SaleforceBanner() {


  return (
    <div className={styles.SaleforceBannerMain}>
      <h1>
        <span>Salesforce</span> Solutions
      </h1>
      <div className={styles.SaleforceBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is here to help you improve your entire company processes
        and find answers to crucial business problems. We will assist you in
        managing your company operations by designing and developing salesforce
        applications that are both extremely functional and beautiful. As a
        salesforce development company, we have experience in delivering
        expertise in everything we do.
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
          id="staticbackdropsales"
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
