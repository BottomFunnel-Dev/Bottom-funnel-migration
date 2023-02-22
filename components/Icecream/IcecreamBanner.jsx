import React, { useState } from "react";
import styles from "./IcecreamBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export const IcecreamBanner = () => {


  return (
    <div className={styles.icecreambannermainboxes}>
      <div className={styles.icreambannersometextbox}>
        <h1> Launch an On-Demand </h1>
        <h2>
          <span className={styles.specialcolor}> Ice-cream </span> Delivery App
        </h2>
        <p>
          Looking to build an online presence for your ice cream delivery
          service? Create and customize your very own branded app in seconds
          with Jotform’s ready-made Ice Cream Delivery App. You can include an
          online menu with photos and descriptions, create a catering form, link
          to your social media accounts, and list your contact information.
          Share your app by sending email invitations, generating a unique QR
          code, or by seamlessly embedding it in your website.
        </p>

        <button
        className={styles.icecreambannerbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Plan Project
          </button>

          <div
            className="modal fade"
            id="staticBackdropicecream"
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

      <div className={styles.iceCreamBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Icecream.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
