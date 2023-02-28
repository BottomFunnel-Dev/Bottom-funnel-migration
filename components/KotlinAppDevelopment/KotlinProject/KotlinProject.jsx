import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./KotlinProject.module.css";

export const KotlinProject = () => {

  return (
      <>
        <div className={styles.kotlinProjectmainbox}>
            <div className={styles.kotlinProjectmainboxinnertextdiv}>
                <h1>Kick Start Your Dream Project With Us</h1>
                <p>We understand what it takes to make your project shine from every angle, so let us be your partner in success!</p>
                
                <button className={styles.kotlinProjectbutton}
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
