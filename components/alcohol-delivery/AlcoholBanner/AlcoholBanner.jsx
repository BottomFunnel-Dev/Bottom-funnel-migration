import React, { useState } from "react";
import styles from "./AlcoholBanner.module.css";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function AlcoholBanner() {
  return (
    <>
      <div className={styles.alcoholBannerMain}>
        <div className={styles.alcoholBannerContent}>
          <h1> Alcohol Delivery </h1>
          <p>
            There's no need to run out and purchase alcohol anymore! With alcohol
            delivery services, you can have all the wine, beer, and liquor your
            heart desires delivered right to your door.
          </p>
          <button
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


        <div className={styles.alcoholBannerImage}>
          <lottie-player
            src="/Animation/SolutionsAnimation/alchohal delivery.json"
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
}
