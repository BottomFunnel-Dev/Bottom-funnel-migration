import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./ondemandQuote.module.css";
const OndemandQuote = () => {
  return (
    <div className={styles.quotation}>
      <h2> The Best Ondemand Home Services Applications </h2>
      <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      > Request A Quote </button>

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
                  <PopupForm/>
                </div>
              </div>
            </div>
          </div>

      <h3> To Know More </h3>
    </div>
  );
};

export default OndemandQuote;
