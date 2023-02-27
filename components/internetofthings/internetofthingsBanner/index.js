import Image from "next/image";
import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./internetOfThingsBanner.module.css";

export default function InternetOfThingsBanner() {
  return (
    <div className={styles.internetOfThingsBannerContainer}>
      <div>
        <h1>IOT App development</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been
        </p>
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
      <span>
        <Image
          src={"/Images/internetOfThingsPhotos/banner.webp"}
          alt={"internetOfThingsPhotos/banner.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
