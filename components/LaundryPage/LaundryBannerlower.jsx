import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./Laundrybannerlower.module.css";

const LaundryBannerlower = () => {
  return (
    <div className={styles.bannerlowerlaundrypageapp}>
      <div className={styles.bannerlowerlaundrypageappinsiderimagetxt}>
        <h2>
          Get a Complete solution with advance & flawless features with our
          laundry app development company
        </h2>
        <p>
          we are excited to listen from you and help you bring your idea to
          realitywith the help of our on Demand Laundry App Development Solution
        </p>
        <button className={styles.laundrypagebannerbutton}
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
                  <PopupForm/>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default LaundryBannerlower;
