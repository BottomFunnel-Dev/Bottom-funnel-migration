
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./NFTDevBanner.module.css";

export default function NFTDevBanner() {

  return (
    <div className={styles.NFTDevBannerMain}>
      <h1>
        <span>NFT</span> Development Services
      </h1>
      <div className={styles.NFTDevBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel offers a simple way to create and transfer ownership of
        your digital assets with minimal technical expertise required. By
        recording ownership on the blockchain, your NFT can be sold or traded
        securely without fear of fraud or theft. And because Bottom Funnels are
        unique identifiers in their own right, they can be used across multiple
        applications without duplication or confusion.
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
          id="staticbackdropds"
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
}
