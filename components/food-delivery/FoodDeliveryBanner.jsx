import React, { useState } from "react";
import styles from "./FoodDeliveryBanner.module.css";
import { PopupForm } from "../PopupForm/PopupForm";

export const FoodDeliveryBanner = () => {


  return (
    <div className={styles.foodDeliveryBannerMain}>
      <div className={styles.foodDeliveryBannerContent}>
        <div>
          <h1> Food Delivery App Solutions </h1>
          <p>
            Spice up the competition in the industry with your own food delivery
            app!
          </p>

          <button
            className={styles.appbuildersolutionbannerbutton}
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
      </div>

      <div className={styles.foodDeliveryBannerImage}>
        <lottie-player
          src="/Animation/SolutionsAnimation/FoodDelivery.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
