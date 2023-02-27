import Image from "next/image";
import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./EcommerceComBanner.module.css";

export default function EcommerceComBanner() {
  return (
    <div className={styles.eCommerceBannerMain}>
      <div className={styles.eCommerceBannerContent}>
        <h1>E-commerce App Development Company</h1>
        <p>
          Hey, you! Do you want to build a website for your eCommerce business
          but are not sure where to start? Well, we understand that it can be
          overwhelming at first. That's why we offer web development services
          for brands that want to create an online presence and grow their
          business.
        </p>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >GET STARTED</button>

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
      <div className={styles.eCommerceBannerImage}>
        <Image
          src={"/Images/EcommercePhotos/background/banner.webp"}
          alt={"e-commerce banner image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
