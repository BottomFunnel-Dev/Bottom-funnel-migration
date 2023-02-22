
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./MetaverseBanner.module.css";

export const MetaverseBanner = () => {

  return (
    <div className={styles.MetaverseBannerMain}>
      <h1>
        <span>Metaverse</span> Services
      </h1>
      <div className={styles.EnterpriseSliderHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Welcome to the Metaverse! Where digital experiences are an alternative
        to or a replica of the real world, along with key civilizational aspects
        like social interactions, currency, trade, economy, and property
        ownership-- founded on a bedrock of blockchain technology.
      </p>

      <button
         
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Get Started
        </button>

        <div
          className="modal fade"
          id="staticbackdropmetaverse"
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
