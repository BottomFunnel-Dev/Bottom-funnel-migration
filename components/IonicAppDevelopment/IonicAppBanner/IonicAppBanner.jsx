import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./IonicAppBanner.module.css";

export const IonicAppBanner = () => {

  return (
    <>
      <div className={styles.ionicAppBannermainbox}>
        <div className={styles.ionicAppBannermainboxinnertextdiv}>
          <h1>Ionic App Development Services</h1>
          <p>
            Our ionic app development services include up-to date integrated
            seamless apps that are highly functional and combines irresistible
            features to suit your business. We help you build great ionic
            applications that are not just browser-based. They also penetrate IU
            WebView for operating systems and web view for Android. Our apps
            make use of low-level browsers using tools such as Cordova or
            PhoneGap.
          </p>
          <button
          className={styles.ionicAppBannerbutton} 
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
        <div className={styles.ionicIcon}>
          <lottie-player
            src="/Animation/ionic.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};
