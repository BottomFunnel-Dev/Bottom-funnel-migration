import React from "react";
import styles from "./SaasArrangeCall.module.css";
import Image from "next/image";
import { PopupForm } from "../../PopupForm/PopupForm";

export const SaasArrangeCall = () => {
  return (
    <>
      <div className={styles.arrangeCallMainDiv}>
        <div className={styles.arrangeCallImage}>
                <Image
                  src={"/Images/saasPhotos/SaasImages/div.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                <h1>Arrange a Call</h1>
                <p>
                    Do you need an expert opinion or advice for your software development ? <br/>
                    If so,connect with us now for a free consultation call. Our solution
                    architects and CTO can nudge you towards success.
                </p>
                <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                
                >BOOK A 30 MIN CALL</button>

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
    </>
  );
};
