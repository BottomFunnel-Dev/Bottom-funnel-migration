import React, { useState } from "react";
import styles from "./LaundaryBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

const LaundryPageBanner = () => {
 

  return (
    <div className={styles.laundrypagebannercontainer}>
      <div className={styles.laundryPagebannersubcontainer}>
        <div className={styles.laundrypagebannerleft}>
          <div className={styles.laundrypageBannerContentDiv}>
            <h1> Build an On-Demand App for Your Laundry Business </h1>
            <p>
              Being in the best on demand laundry app development Company, we
              develop complete on-demand app and provides a solution. Our Mobile
              app development team is all determined to make the on-demand app
              revolution in various industries that require instant provisioning
              of benefits and services. Thus, we had a very welcoming look at
              the laundry service market.
            </p>

            <button
              className={styles.laundrypagebannerbutton}
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

        <div className={styles.laundaryPageBannerAnimationDiv}>
          <lottie-player
            src="/Animation/SolutionsAnimation/laundry.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default LaundryPageBanner;
