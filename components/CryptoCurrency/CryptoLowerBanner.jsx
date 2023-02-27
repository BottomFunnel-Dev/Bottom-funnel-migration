import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./CryptoLowerBanner.module.css";

export default function CryptoLowerBanner() {
  return (
    <div className={styles.cryptolowerbannermainbox}>
      <div className={styles.cryptocurrencylowerbannertxtdiv}>
        <h3>Have a Unique & Exceptional Idea For a Cryptocurrency App ?</h3>
        <h2>
          We can Turn Your Vision into an Interactive & fully function app.
        </h2>

        <button className={styles.cryptocurrencylowerbannerbutton}
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
    </div>
  );
}
