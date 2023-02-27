import Image from "next/image";
import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./EducationMidBanner.module.css";

export default function EducationMidBanner() {
  return (
    <div className={styles.EducationMidBannerContainer}>
      <div className={styles.EducationMidBannerContent}>
        <p>
          Transform the conventional education system into a customized modern
          lerning experience for your users.
        </p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >Talk to our experts</button>

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
      <div className={styles.EducationMidBannerImages}>
        <Image
          src={"/Images/Educationp/mid-banner.webp"}
          alt={"/Educationp/mid-banner.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
