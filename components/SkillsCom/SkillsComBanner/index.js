import Head from "next/head";
import React from "react";
// import styles from "./SkillsComBanner.module.css";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function SkillsComBanner({ data }) {
  const { image, title, description, icon, points } = data;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://d1krs40fxb67ye.cloudfront.net/components/SkillsCom/SkillsComBanner/SkillsComBanner.module.css"
        />
      </Head>
      <div
        className="skillsbannermain"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="skillsbannercontent">
          <h1>
            {title[0]} <span>{title[1]}</span> {title[2]}
          </h1>
          <p>{description}</p>
          <ul>
            {points.map((elem) => (
              <li key={elem}>{elem}</li>
            ))}
          </ul>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Get Started
          </button>
          <div
            className="modal fade"
            id="skillsBannerPopupForm"
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
        <img src={icon} alt={icon} />
      </div>
    </>
  );
}
