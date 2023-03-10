import Head from "next/head";
import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./FoodDeliveryBookCall.module.css";

export const FoodDeliveryBookCall = () => {
  return (
    <>
      <div className={styles.foodDeliveryBookCallMain}>
        <h2> Discuss your requirements with our experts </h2>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        > Book a call with our experts </button>

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
    </>
  );
};
