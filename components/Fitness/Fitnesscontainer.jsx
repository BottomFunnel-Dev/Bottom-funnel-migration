import Image from "next/image";
import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./fitnesscontainer.module.css";

export default function Fitnesscontainer() {
  return (
    <div className={styles.fitnesscontainer}>
      <div className={styles.fitnesssub}>
        <div className={styles.fitnessleft}>
          <h1>Make Your own Health and Fitness App</h1>
          <p>
            Our fitness apps are the perfect companion for everyone who wants to
            be more active and healthy. Whether you want to lose weight or just
            want a healthier lifestyle.
          </p>
          <button className={styles.fitnesgetbtn}
          
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

        <div className={styles.fitnessright}>
          <div className={styles.fitnessimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/fitness/yoga1.webp"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
