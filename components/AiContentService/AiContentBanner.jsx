import React, { useState } from "react";
import styles from "./AiContentBanner.module.css";


import { PopupForm } from "../PopupForm/PopupForm";

export default function AiContentBanner() {
 

  return (
    <div className={styles.aicontentbannermainboxes}>
      <div className={styles.aicontentbannerboxfortext}>
        <h1>WRITE BETTER,FASTER Generate Content & Compy In Seconds with AI</h1>
        <p>
          Use AI to boost your traffic and save hours of work. Automatically
          write unique,engaging and high-quality copy or content from long-form
          blog posts or landing pages to digital ads in seconds.
        </p>

        <button
        className={styles.aicontentbannerbutton}
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
    </div>
  );
}
