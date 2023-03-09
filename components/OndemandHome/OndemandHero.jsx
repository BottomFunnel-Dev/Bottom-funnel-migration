import React, { useState } from "react";
import styles from "./ondemandHero.module.css";

import { PopupForm } from "../PopupForm/PopupForm";
import Head from "next/head";

const OndemandHero = () => {

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/components/OndemandHome/ondemandHero.module.css"
        />
      </Head>

      <div className="ondemandHero">
        <div className="textcontainer">
          <div>
            <h1> Home Services App Solutions </h1>
            <p>
              Provide services to your customers at the comfort of their home with
              an app! Boost efficiency and drive more business with our
              industry-leading on demand home services app development services.
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
              id="staticBackdropondemnd"
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

        <div className="imageContainer">
          <lottie-player
            src="/Animation/SolutionsAnimation/On demand home services.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default OndemandHero;
