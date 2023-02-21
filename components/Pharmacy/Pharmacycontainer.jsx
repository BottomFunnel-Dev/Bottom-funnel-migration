import React, { useState } from "react";
import styles from "./Pharmacycontainer.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export default function Pharmacycontainer() {
  return (
    <div className={styles.szpharmacycontainer}>
      <div className={styles.szpharmacysubcontainer}>
        <div className={styles.szpharmacyleft}>
          <div>
            <h1>Launch an On-Demand</h1>
            <h2>Pharmacy Delivery App</h2>
            <p>
              Pharmacy delivery apps are a convenient way to have your
              medications delivered to you. With these apps, you can have your
              medications sent directly to your door by a pharmacy professional.{" "}
            </p>

            <button
              className={styles.szpharmacybtn}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Get Started
            </button>

            <div
              className="modal fade"
              id="staticBackdroppharmacy"
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

        <div className={styles.pharmacyBannerAnimationDiv}>
          <lottie-player
            src="/Animation/SolutionsAnimation/pharmacy.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}
