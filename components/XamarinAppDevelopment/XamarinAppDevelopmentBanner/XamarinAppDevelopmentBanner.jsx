import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./XamarinAppDevelopmentBanner.module.css";

export const XamarinAppDevelopmentBanner = () => {
 
  return (
    <>
      <div className={styles.XamarinAppDevbannermainbox}>
        <div className={styles.XamarinAppDevbannermainboxinnertextdiv}>
          <h1>Xamarin App Development</h1>
          <p>
            We're passionate about our work, and our xamarin app development
            services reflect that
          </p>
          <button
          className={styles.XamarinAppDevbannerbutton}
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

        <div className={styles.xamrinIcon}>
          <lottie-player
            src="/Animation/Xamarin.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};
