import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./FlutterAppDevelopmentDreamProject.module.css";

export const FlutterAppDevelopmentDreamProject = () => {

  return (
    <>
      <div className={styles.flutterAppDevDreamProjectmainbox}>
        <div className={styles.flutterAppDevDreamProjectmainboxinnertextdiv}>
          <h1>Kick Start Your Dream Project With Us</h1>
          <p>We know that you have a dream project in mind, something that will change your life forever! If so, let us help you turn it into reality with our bottom funnel flutter app development services! </p>

          <button className={styles.flutterAppDevDreamProjectbutton}
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
