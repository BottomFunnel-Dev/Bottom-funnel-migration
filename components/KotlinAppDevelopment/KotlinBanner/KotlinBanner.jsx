import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./KotlinBanner.module.css";

export const KotlinBanner = () => {

  return (
    <>
      <div className={styles.kotlinbannermainbox}>
        <div className={styles.kotlinbannermainboxinnertextdiv}>
          <h1 className={styles.kotlinChange}>
            <span>Kotlin</span> App Development Services
          </h1>

          <p>
            We have been providing the best kotlin app development services to
            our clients since long. We are experts in this domain and we can
            make any kind of app with a single click. Our team consists of
            highly proficient professionals who have years of experience in
            developing apps. They know their stuff and they will make sure that
            your app is error-free and user-friendly too. Don't waste your time,
            order our kotlin app development services right away!
          </p>


          <button
          className={styles.kotlinbannerbutton}
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
        <div className={styles.kotlinIcon}>
          <lottie-player
            src="/Animation/kotlin.json"
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
