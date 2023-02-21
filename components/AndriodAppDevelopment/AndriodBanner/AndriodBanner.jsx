import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./AndriodBanner.module.css";
import Image from "next/image";

export default function AndriodBanner() {
  return (
    <>
      <div className={styles.andriodAppDevbannermainbox}>
        <div className={styles.andriodAppDevbannermainboxinnertextdiv}>
          <h1>Andriod App Development</h1>
          <p>
            If you're looking for a reliable and affordable android app
            development service, you've come to the right place. At Bottom
            funnel, we understand the importance of delivering high-quality apps
            on time and at a fraction of the cost of other developers. So
            whether you're looking for a simple Android app or a more complex
            project, we can help. We take pride in our extensive experience and
            track record of success, so you can be sure that your project will
            be handled with care. Contact us today to get started!
          </p>
          <button
            className={styles.andriodAppDevbannerbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Get Started
          </button>

          <div
            className="modal fade"
            id="staticBackdropandroid"
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
        <div className={styles.bg1banner}>
          <div className={styles.androidIcon}>
            <lottie-player
              src="/Animation/android.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </>
  );
}
