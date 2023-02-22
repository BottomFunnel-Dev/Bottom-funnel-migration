import React, { useState } from "react";
import styles from "./AppBuilderSolutionBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export default function AppBuilderSolutionBanner() {
  return (
    <div className={styles.appbuildersolutionbannermainboxes}>
      <div className={styles.appbuildersolutionboxfortextenter}>
        <h1>
          {" "}
          Bottom Funnel: a multi-purpose platform for low-code app development{" "}
        </h1>
        <p>
          In today's fast-paced world, it becomes next to impossible to keep up
          with the pace of development. Therefore, we resort to platforms like
          Bottom Funnel that offer a solution for that in the form of low-code
          app development.
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

      <div className={styles.appBuilderSolutionBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/app builder.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
