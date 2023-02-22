import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./CryptoDevBanner.module.css";

export const CryptoDevBanner = () => {
  return (
    <div className={styles.CryptoDevBannerMain}>
      <h1>
        <span>Cryptocurrency</span> Development Services
      </h1>
      <div className={styles.CryptoDevBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Still confused about how cryptocurrency works? Join the club. That's why
        Bottom Funnel has decided to clear up all your confusion with their
        easy-to-understand explanations. From mining a coin to using it as
        payment, Bottom Funnel has got you covered. With units of cryptocurrency
        created through a process called mining, this guide will teach you
        everything you need to know about them! Next, we'll look at how users
        can buy and sell currencies in the market.
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
        id="staticbackdroprecampds"
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
  );
};
