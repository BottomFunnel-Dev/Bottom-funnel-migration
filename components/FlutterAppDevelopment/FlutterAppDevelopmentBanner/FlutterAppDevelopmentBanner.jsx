import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./FlutterAppDevelopmentBanner.module.css";

export const FlutterAppDevelopmentBanner = () => {
  return (
    <>
      <div className={styles.flutterAppDevbannermainbox}>
        <div className={styles.flutterAppDevbannermainboxinnertextdiv}>
          <h1>
            <span>Flutter App</span> Development
          </h1>
          <p>
            Bottom funnel flutter app development is a complete package which
            offers you all the services to develop an application from scratch.
            With our eminent developers and designers, you can be sure that your
            smart application will be up-to-date with all the changes in
            technology.
          </p>

          <button
            className={styles.flutterAppDevbannerbutton}
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
            tabIndex="-1"
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
        <div className={styles.FlutterIcon}>
          <lottie-player
            src="/Animation/flutter.json"
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
