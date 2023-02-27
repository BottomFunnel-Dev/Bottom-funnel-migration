import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./CryptoCurrencyBanner.module.css";

export default function CryptoCurrencyBanner() {
  return (
    <div className={styles.cryptocurrencybannermainbox}>
      <div className={styles.cryptocurrencybannermainboxinnertextdiv}>
        <h1>Cryptocurrency App Development</h1>
        <p>
          Bottom funnel is the easiest way to get started in the cryptocurrency
          market. With our user-friendly platform, you can buy and sell
          cryptocurrencies with just a few clicks. We offer a wide range of
          coins, including Bitcoin, Ethereum, Litecoin, and more. So whether
          you're a beginner or a seasoned investor, we have the perfect solution
          for you.
        </p>

        <button className={styles.cryptocurrencybannerbutton}
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
