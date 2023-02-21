
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./ReactNativeAppDevelopmentBanner.module.css";

export const ReactNativeAppDevelopmentBanner = () => {

  return (
    <div>
      <div className={styles.ReactNativeAppDevelopmentbannermainbox}>
        <div
          className={styles.ReactNativeAppDevelopmentbannermainboxinnertextdiv}
        >
          <h1>React Native App Development Services</h1>
          <p>
            React Native is a popular app development platform that enables
            developers to create mobile apps using JavaScript. React Native is
            different from traditional web development because it uses stateless
            components, which makes the app more responsive and faster. This
            platform also allows for easy integration with third-party APIs,
            making it ideal for developing features that require access to
            external data or services.
          </p>

          <button
       className={styles.ReactNativeAppDevelopmentbannerbutton}
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
        <div className={styles.reactfileIcon}>
          <lottie-player
            src="/Animation/reactfile.json"
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
