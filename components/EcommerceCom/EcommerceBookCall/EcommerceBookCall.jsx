import Image from "next/image";
import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./EcommerceBookCall.module.css";

export default function EcommerceBookCall() {
  return (
    <div className={styles.EcommerceBookCallMain}>
      <div>
        <h1>
          Get all the gaming development soluitons for all the kind of platform?
        </h1>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >Let's Get Started</button>
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
          src={"/Images/EcommercePhotos/background/phone.webp"}
          alt={"EcommercePhotos/background/phone.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
