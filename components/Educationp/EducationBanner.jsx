import Image from "next/image";
import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./EducationBanner.module.css";

export default function EducationBanner() {
  return (
    <div className={styles.EducationBannerMain}>
      <div className={styles.EducationBannerText}>
        <p>Bridge the gap between</p>
        <h1>
          Tutors & Students with the Best <br />
          Education App
        </h1>
        <p>Get branded App & Website for your business</p>
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
      <div className={styles.EducationBannerimg}>
        <Image
          src={"/Images/Educationp/banner.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
