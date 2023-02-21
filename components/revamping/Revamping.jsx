import React, { useState } from "react";
import styles from "./revamping.module.css";
import { RiMailSendFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";


import { PopupForm } from "../PopupForm/PopupForm";

const Revamping = () => {
 

  return (
    <div className={styles.revamp}>
      <div className={styles.revampback}>
        <img src="/Images/revamp/final2.webp" alt="images" />
      </div>
      <div className={styles.textlayer}>
        <div className={styles.navmotion}>
          <img src="/Images/revamp/navigation.gif" alt="images" />
        </div>
        <h1>Need an expert advice on your technical queries?</h1>
        <p>
          Fill the required information about your query and we will send you
          your solution.
        </p>

        <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <IconContext.Provider value={{ className: styles.buttonIcon }}>
            <RiMailSendFill />
          </IconContext.Provider>
          Enquire now
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
  );
};

export default Revamping;
