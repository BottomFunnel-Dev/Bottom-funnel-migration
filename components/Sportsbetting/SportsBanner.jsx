import Image from "next/image";
import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./sportsBanner.module.css";

export default function SportsBanner() {
  return (
    <div className={styles.sportsbanner}>
      <div className={styles.bettingSectionleft}>
        <div className={styles.bettingContent}>
          <h2>Top Notch</h2>
          <h1>Sports Betting App Developemnt Company</h1>
          <p>
            We are the top notch customer service for mobile apps. Our extensive
            experience has helped us create the best sports betting app that you
            will ever get! This is because we have a team of developers who try
            to be in touch with all the latest trends and technologies of their
            days.
          </p>
          <button className={styles.bottomButton}
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

      <div className={styles.bettingSectionright}>
        <div className={styles.bettingImage}>
          <Image
            src={"/Images/sportsbettingpage/banners/bannerimg.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
