import React, { useState } from "react";
import styles from "./ToolDeliveryBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

function TooDeliveryBanner() {


  return (
    <div className={styles.tdtooldeliverycontainer}>
      <div className={styles.txtooldeliverysubcontainer}>
        <div className={styles.tdtooldeliveryleft}>
          <div className={styles.tdtooldeliverysometxtbox}>
            <h1>On-Demand Tool Delivery Solution </h1>
            <p>
              Tool delivery app is a smart solution which makes your life as an
              entrepreneur much easier. It helps you deliver tools faster than
              ever before without any hassles or complications of any sort.
            </p>

            <button
            className={styles.tdtooldeliverybtn}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Plan Project
          </button>

          <div
            className="modal fade"
            id="staticBackdroptool"
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

        <div className={styles.toolDeliveryAnimationDiv}>
          <lottie-player
            src="/Animation/SolutionsAnimation/tool deliver.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default TooDeliveryBanner;
