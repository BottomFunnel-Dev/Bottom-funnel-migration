import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./AlcoholBookCall.module.css";


export default function AlcoholBookCall() {
  return (
    <>
      <div className={styles.alcoholBookCallMain}>
        <div>
          <h1>
            Get all the alcohol delivery app development solutions for all the kind of platform?
          </h1>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Let's Get Started
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
    </>
  );
};
