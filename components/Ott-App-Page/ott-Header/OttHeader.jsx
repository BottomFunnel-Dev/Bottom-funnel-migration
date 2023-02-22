import React, { useState } from "react";
import styles from "./ottHeader.module.css";

import { PopupForm } from "../../PopupForm/PopupForm";

export default function OttHeader() {


  const ServicesData = [
    {
      icon: "/Images/ott-app/Frame-2.webp",
      title: "Best Quality",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Group901189.webp",
      title: "Fast Downloading",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Group16.webp",
      title: "Analytics Services",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Frame.webp",
      title: "Data Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Group-1.webp",
      title: "Regular Support",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Frame-1.webp",
      title: "Search Engine Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },
  ];

  return (
    <div className={styles.testdiv}>
      <div className={styles.ottHeaderContainerMain}>
        <div className={styles.ottHeaderLeftDiv}>
          <div className={styles.ottHeaderLeftTextDiv}>
            <h1 className={styles.redbn}>OTT App Solutions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              porro id est in sit! Velit consectetur suscipit, corrupti tenetur
              nontcliolectui dignissimos possimus, doloremque in minimabgrds
              ggue quae quia magnam reiciendis ab.
            </p>

            <button
             className={styles.ottHeaderButton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
           Get Started
          </button>

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

        <div className={styles.ottHeaderRightDiv}>
          <div className={styles.ottHeaderRightFrameForImage}>
            <div className={styles.ottHeaderRightImagesDiv}>
              <lottie-player
                src="/Animation/SolutionsAnimation/Ott.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ottServicesContainer}>
        <div className={styles.ottServicesContainer2}>
          <div className={styles.ottServicesTitleDiv}>
            <h1>OTT App Services</h1>
            <p>
              The best streaming platform with all the latest shows and best
              videos quality
            </p>
          </div>
          <button className={styles.ottServicesButton}>
            Book a Meeting With Us Today
          </button>
          <div className={styles.ottServicesContent}>
            {ServicesData.map((e) => (
              <div className={styles.ottServicesBoxesDiv}>
                <div className={styles.ottServicesDivForFlexIconHead}>
                  <div>
                    <img src={e.icon} alt="image" />
                  </div>
                  <h5>{e.title}</h5>
                </div>
                <div className={styles.ottServicesLoremPara}>
                  <p>{e.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
