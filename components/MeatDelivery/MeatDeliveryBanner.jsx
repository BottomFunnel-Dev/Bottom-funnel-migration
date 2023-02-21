import React, { useState } from "react";
import styles from "./MeatDeliveryBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export const MeatDeliveryBanner = () => {


  return (
    <div className={styles.meatdeliverybannermainboxes}>
      <div className={styles.meatdeliverybannerfortextboxes}>
        <h1> Meat Delivery Application Solutions </h1>
        <p>
          {" "}
          Bottom Funnel is surely one of the best ways to find quick and simple
          solutions for IT support. We provide you with a wide range of
          services, so you can always be sure that your system is being looked
          after. What's more, our experts are available 24 hours a day, 7 days a
          week - so there's no need to worry about any issues arising at odd
          times.{" "}
        </p>

        <button
        className={styles.meatdeliverybanner}
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

      <div className={styles.meatDeliveryBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Meat delivery.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
