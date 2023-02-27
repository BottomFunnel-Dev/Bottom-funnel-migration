
import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import style from "./CarServiceBanner.module.css";
export const CarServiceBanner = () => {
  return (
    <div className={style.carservicebannermainboxes}>
      <div className={style.carservicestextboxes}>
        <h1>Car Service App Developement Solution</h1>
        <p>
          Design sprint facilities quick idealation, prototyping, and validation
          of a product idea. Find solutions for business problems through an
          integrated design thinking approach.
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
            id="staticBackdropcarrental"
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
