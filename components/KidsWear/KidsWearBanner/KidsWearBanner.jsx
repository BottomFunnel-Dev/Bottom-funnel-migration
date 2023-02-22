import React, { useState } from "react";
import styles from "./KidsWearBanner.module.css";

import { PopupForm } from "../../PopupForm/PopupForm";

export default function KidsWearBanner() {


  return (
    <div>
      <div className={styles.KidsWearbannermainbox}>
        <div className={styles.KidsWearbannermainboxinnertextdiv}>
          <h1>
            {" "}
            <span className={styles.kidswearspecialcolor}>
              Baby & Kids Wear
            </span>{" "}
            App Solution{" "}
          </h1>
          <p>
            Are you looking for a Baby & Kids Wear App Solution? Look no further
            than Ours ! We offer an exciting and easy-to-use app solution that
            is perfect for any baby or kid's clothing needs. With our app, you
            can easily find and purchase clothes for your little ones with just
            a few clicks. Plus, our app makes it easy to keep track of your
            child's clothing size so you always know what to buy when they need
            new clothes.
          </p>

          <button
          className={styles.KidsWearbannerbutton}
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

        <div className={styles.kidsWearBannerAnimationDiv}>
          <lottie-player
            src="/Animation/SolutionsAnimation/baby and kids wear.json"
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
