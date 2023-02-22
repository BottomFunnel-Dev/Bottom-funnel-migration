import React, { useState } from "react";
import styles from "./FinTechSolutionBanner.module.css";
import { PopupForm } from "../PopupForm/PopupForm";

export const FinTechSolutionBanner = () => {
 

  return (
    <div className={styles.fintechsolutionbannermainbox}>
      <div className={styles.fintechsolutionbannertextboxes}>
        <h1> Fintech App Solution </h1>
        <p>
          In a world where data is the new oil, but making sense of it can be
          tricky, you need a finance company that knows how to solve your most
          complex data-related problems. Introducing Fintech App Solution -a
          team of experts who understand the ins and outs of data analysis.
          They'll use their in-depth expertise to help you get the most out of
          your data so you can make smarter decisions and grow your business
          faster. Plus, they offer cutting-edge technologies that will give you
          an edge over your competitors.
        </p>

        <button
         className={styles.fintechsolutionbannerbutton}
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

      <div className={styles.fintechSolutionBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/fintech.json"
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
