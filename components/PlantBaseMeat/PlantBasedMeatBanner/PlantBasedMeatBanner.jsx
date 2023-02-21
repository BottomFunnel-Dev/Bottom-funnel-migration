import React, { useState } from "react";
import styles from "./PlantBasedMeatBanner.module.css";


import { PopupForm } from "../../PopupForm/PopupForm";

export default function PlantBasedMeatBanner() {


  return (
    <div className={styles.plantBasedBannerParentDiv}>
      <div className={styles.plantBasedMeatBannerContentDiv}>
        <h1>
          <span> Plant Based </span>
          Meat Delivered App
        </h1>

        <p>
          Impossible Beef is made from plants for people who love meat. Anything
          you can make with ground beef, you can make with Impossible Beef Made
          From Plants-tacos, sliders, lasagna, you name it! It's packed with
          protein and nutrients, has 0mg cholesterol (13g total fat, 6g
          saturated fat per serving), and is way better for the planet than beef
          from cows.
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

      <div className={styles.plantBasedBannerImageDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Plant based meat.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
