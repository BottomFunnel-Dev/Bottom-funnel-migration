import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./XamarinDevelopers.module.css";

export const XamarinDevelopers = () => {

  return (
      <>
        <div className={styles.xamarinDevelopersmainbox}>
            <div className={styles.xamarinDevelopersmainboxinnertextdiv}>
                <h1>Kick Start Your Dream Project With Us</h1>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec, eleifend eros . Sed sed efficitur lectus, sed vehicula est. Donec feugiat non ex a molestie. Nullam</p> */}
                
                <button className={styles.xamarinDevelopersbutton}
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
