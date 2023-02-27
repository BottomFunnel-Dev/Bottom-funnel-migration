import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./SocialMediaBanner.module.css";

export default function SocialMediaBanner() {
  return (
    <div className={styles.socialmediabannermainbox}>
      <div className={styles.socialmediabannerinnertextboxes}>
        <h1>Build A freelancer Marketplace Like Upwork & Fiverr</h1>
        <p>
          Bottom Funnel saas is the perfect solution for you if you're looking
          to launch your own social networking app. We provide advanced features
          and tech so that you can focus on building a successful business.
        </p>
        <button className={styles.socialmediabannerbutton}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >Get Started</button>

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
