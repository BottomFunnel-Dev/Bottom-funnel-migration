import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./CloudBanner.module.css";

export default function CloudBanner() {
  return (
    <div className={styles.CloudBannerMain}>
      <h1>
        <span>Cloud</span> Services Consulting
      </h1>
      <div className={styles.CloudBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom funnel is a cost-effective way of getting the cloud computing
        services without worrying about single-price tag. You can have that
        peace of mind as you know your data is safe and secure. With bottom
        funnel, you get comprehensive cloud solutions like storage, networking,
        and security by experts in the field. Let us take care of your business
        with our fast turnaround times and professional service plans to keep
        you up and running. Contact us today!
      </p>

      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Request A Quote
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
  );
}
