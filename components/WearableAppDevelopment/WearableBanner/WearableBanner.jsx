import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./WearableBanner.module.css";
import Image from "next/image";

export const WearableBanner = () => {
  return (
    <div>
      <div className={styles.wearablebannermainbox}>
        <div className={styles.wearablebannermainboxinnertextdiv}>
          <h1>
            <span>Wearable App</span> Development{" "}
          </h1>
          <p>
            The use of wearable technology for both individuals and businesses
            are growing at a rapid rate. Whether it is for tracking steps walked
            or sending real-time work push notifications, wearable tech of both
            Android wearable development and IOS wearable development domain is
            being used by companies and individuals from all walks of life.
          </p>

          <button
            className={styles.wearablebannerbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            get started
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
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

        <div className={styles.wearablebannermainboxImage}>
          <div className={styles.WearableIcon}>
            <lottie-player
              src="/Animation/wearable.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};
