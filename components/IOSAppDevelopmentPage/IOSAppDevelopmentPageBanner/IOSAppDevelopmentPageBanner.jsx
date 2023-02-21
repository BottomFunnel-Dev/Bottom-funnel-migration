import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./IOSAppDevelopmentPageBanner.module.css";
import * as reactAnimation from "../../../public/Animation/ios.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const IOSAppDevelopmentPageBanner = () => {



  return (
    <div>
      <div className={styles.IOSAppDevelopmentbannermainbox}>
        <div className={styles.IOSAppDevelopmentbannermainboxinnertextdiv}>
          <h1>
            <span>IOS App</span> Development Services
          </h1>
          <p>
            We deliver iOS apps keeping in mind both the business side and the
            end-users. Hire iOS software developers now.
          </p>

          <button
          className={styles.IOSAppDevelopmentbannerbutton}
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
        <div className={styles.IOSandroidIcon}>
          <Player
            src={reactAnimation}
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
          ></Player>
        </div>
      </div>
    </div>
  );
};
