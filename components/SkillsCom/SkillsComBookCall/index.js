import Head from "next/head";
import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
// import styles from "./SkillsComBookCall.module.css";

export default function SkillsComBookCall({ data }) {
  const { title, btn, image } = data;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://d1krs40fxb67ye.cloudfront.net/components/SkillsCom/SkillsComBookCall/SkillsComBookCall.module.css"
        />
      </Head>
      <div
        className="skillsbookcallmain"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="skillsbookcallmainh1">{title}</h1>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          className="skillsbookcallmainbutton"
        >
          {btn}
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
    </>
  );
}
