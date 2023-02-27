import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./WebsiteBuilderOnePlatform.module.css";

export default function WebsiteBuilderOnePlatform() {
  return (
    <div className={styles.onePlatformParentDiv}>
      <h1> One platform, infinite possibilities </h1>

      <div className={styles.onePlatformContentMainDiv}>
        <div className={styles.onePlatformContentInnerDiv1}>
          <h2> Unlimited creation </h2>
          <p>
            Create a website with a complete suite of a advance functionalities
            and bring your vision to life.
          </p>
        </div>

        <div className={styles.onePlatformContentInnerDiv2}>
          <h2> Powerful Infrastructure </h2>
          <p>
            Get an enterprise-grade foundation, engineered for your limitless
            scalability and peace of mind.
          </p>
        </div>

        <div className={styles.onePlatformContentInnerDiv3}>
          <h2> The place for growth </h2>
          <p>
            Convert and scale seamlessly with built-in marketing and business
            sloution.
          </p>
        </div>
      </div>

      <div className={styles.onePlatformButtonDiv}>
        <button className={styles.onePlatformButton1}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        
        > Get Started </button>

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
        <button className={styles.onePlatformButton2}> More Designs</button>
      </div>
    </div>
  );
}
