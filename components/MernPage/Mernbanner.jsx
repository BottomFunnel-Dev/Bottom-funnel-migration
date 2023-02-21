import React, { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";

import styles from "./mernbanner.module.css";
import { PopupForm } from "../PopupForm/PopupForm";

export const Mernbanner = ({ bannerdata, animateData }) => {


 
  return (
    <div
      className={styles.mernBanner}
      style={{
        background: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.mernbannercontent}>
        <h1>{bannerdata.title}</h1>
        <p>{bannerdata.description}</p>
        <button className={styles.mernButton}    type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">Request A Quote</button>


<div
            className="modal fade"
            id="staticBackdropmern"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
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

      <div className={styles.bannerIcons}>
        {bannerdata.icons.map((item, index) => (
          <div key={index} className={styles.mernskills}></div>
        ))}
      </div>  
      <div className={styles.mernanimation}>
        <Player
          src={animateData}
          background="transparent"
          speed="1"
          loop
          controls
          autoplay
        ></Player>
      </div>
    </div>
  );
};
