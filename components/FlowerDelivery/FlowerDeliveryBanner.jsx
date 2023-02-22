import React, { useState } from "react";
import styles from "./FlowerDelevrybanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

const FlowerDeliveryBanner = () => {
 

  return (
    <div className={styles.flowerdeliverybannermaindiv}>
      <div className={styles.flowerdeliverybannerleftbox}>
        <h1>
          <span> On-Demand </span> Flower Delivery App
        </h1>

        <p>
          Get your florist delivery business online with a flower delivery app
          development solution to provide superior service experience to
          customers
        </p>

        <button
        className={styles.flowerdeliverybannerbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Plan Project
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

      <div className={styles.flowerdeliverybannerrightbox}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Flower delivery.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default FlowerDeliveryBanner;
