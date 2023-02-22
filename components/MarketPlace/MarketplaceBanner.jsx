import React, { useState } from "react";
import styles from "./MarketPlaceBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

export const MarketplaceBanner = () => {


  return (
    <div className={styles.marketplacebannerimage}>
      <div className={styles.marketplacebannerimageinsideboxtext}>
        <h1>Build A Freelancer Marketplace Like Upwork & Fiverr</h1>
        <p>
          Are you looking for a place to hire freelancers? Have you tried Upwork
          or Fiverr, but found them to be too time consuming and other similar
          sites? Let's build an online marketplace where people are looking for
          your type of work!{" "}
        </p>

        <button
        className={styles.marketplacebutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Plan Project
          </button>

          <div
            className="modal fade"
            id="staticBackdropmarketplace"
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

      <div className={styles.marketplaceBannerAnimationDiv}>
        <lottie-player
          src="/Animation/SolutionsAnimation/Marketplace.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};
