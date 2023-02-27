import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./FitnessStart.module.css";

export default function Fitnessstart() {
  return (
    <div className={styles.fitnessstart}>
      <div className={styles.fitnessstartcontainer}>
        <h2>Get all the fitness solution for all the kind of platforms</h2>
        <button className={styles.szstartbtn}
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
    </div>
  );
}
