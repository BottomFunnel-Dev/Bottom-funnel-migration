import Image from "next/image";
import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./internetofThingsMidBanner.module.css";

export default function InternetofThingsMidBanner() {
  return (
    <div className={styles.internetofThingsMidBannerContainer}>
      <span>
        <Image
          src={"/Images/internetOfThingsPhotos/phone.webp"}
          alt={"internetOfThingsPhotos/phone.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h2>Have a Unique & Exceptional Idea For a IOT development App ?</h2>
        <h1>
          We can turn your vision into an Interactive & full functional app.
        </h1>
        <button
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
