import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./IonicProject.module.css";

export const IonicProject = () => {

  return (
    <>
      <div className={styles.ionicProjectmainbox}>
        <div className={styles.ionicProjectmainboxinnertextdiv}>
          <h1> Kick Start Your Dream Project With Us </h1>
          <p>
            We have great insights and expert teams who possess remarkable prowess on the Ionic framework. We lend our best teams to help you develop your Ionic based Mobile application using our Ionic App Development Services.
          </p>

          <button className={styles.ionicProjectbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          >Get Started</button>

<div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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
