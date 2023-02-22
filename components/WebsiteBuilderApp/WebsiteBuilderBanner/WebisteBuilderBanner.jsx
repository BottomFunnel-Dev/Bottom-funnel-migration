import React, { useState } from "react";
import styles from "./WebsiteBuilderBanner.module.css";
import Image from "next/image";

import { PopupForm } from "../../PopupForm/PopupForm";

export default function WebisteBuilderBanner() {
  return (
    <div className={styles.websiteBuilderBannerParentDiv}>
      <div className={styles.websiteBuilderBannerImageDiv}>
        <Image
          src={"/Images/WebsiteBuilderApp/BannerBackground.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        <div className={styles.websiteBuilderBannerTopComp}>
          <div className={styles.websiteBuilderBannerContentDiv}>
            <h1> Create Website without Limits </h1>
            <p>
              Discover the platform that gives you the freedom to
              create,design,manage and develop your web presence exactly the way
              you want.
            </p>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Get Started
            </button>

            <div
              className="modal fade"
              id="staticBackdropwebsite"
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

          <div className={styles.websiteBuilderBannerTopImageComp}>
            <lottie-player
              src="/Animation/SolutionsAnimation/Website builder.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

// color quote #f5f5f5
