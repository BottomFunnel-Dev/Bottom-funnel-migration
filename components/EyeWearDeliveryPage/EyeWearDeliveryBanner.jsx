import React, { useState } from "react";
import styles from "./EyeWearDeliveryBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export const EyeWearDeliveryBanner = () => {


  return (
    <div className={styles.eyeweardeliverybannermainboxes}>
      <div className={styles.eyewearbannersometextboxes}>
        <h1>
          <a className={styles.colored}>Eyewear</a>
          Delivery App
        </h1>

        <p>
          Design Sprint facility quick ideation, prototyping and validation of a
          product idea.Find Solutions for business problems through an
          integrated design thinking approch. We've all been there - you see
          that new pair of glasses you want, but can't get your hands on. Or
          perhaps you saw an old pair in a thrift store and wondered how they
          were able to fit in that tiny little frame. Regardless of the reason,
          eyewear delivery app Bottom funnel is here to help! With its vast
          collection of top-quality frames for men and women, as well as kids'
          styles, you're sure to find something that suits your needs.
        </p>

        <button
         className={styles.Eyeweardeliverybannerbutton}
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

      <div className={styles.eyeWearDeliveryBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/eye wear.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
