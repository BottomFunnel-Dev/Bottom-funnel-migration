import React, { useState } from "react";
import styles from "./OnlinePaymentAppSolutionBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export const OnlinePaymentAppSolutionBanner = () => {


  return (
    <div className={styles.onlinepaymentappsolutionbannermainboxes}>
      <div className={styles.onlonepaymentappbannerimageinsidetext}>
        <h1> Online Payment App Solution </h1>
        <p>
          Create custom mobile payment solutions for P2P payments using debit
          cards, credit cards, mobile wallets, bank accounts, and more for
          Android, iOS, and Windows Mobile platforms. Our developers integrate
          near field communication (NFC), quick response (QR), barcode
          configurations, magnetic secure transmission (MST) technology, and
          more. We provide initiator, target, reader/writer, P2P communications,
          and card emulation software development for mobile devices, payment
          terminals, and other NFC platforms.
        </p>

        <button
         className={styles.onlinepaymentsolutionbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Plan Project
          </button>

          <div
            className="modal fade"
            id="staticBackdroponline"
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

      <div className={styles.onlinePaymentSolutionBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/oNLINE PAYMENTY.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
