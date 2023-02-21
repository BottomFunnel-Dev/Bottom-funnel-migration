import React, { useState } from "react";
import styles from "./GameDevelopmentBanner.module.css";

import { PopupForm } from "../PopupForm/PopupForm";

const GameDevelopmentBanner = () => {
  return (
    <div className={styles.gamedevelopmentbannermainboxes}>
      <div className={styles.gamedeveloperbackgroundimagetxtdiv}>
        <h1>Game Development Application</h1>
        <p>
          A game development application is a program that allows users to
          create and publish games, interactive applications, and other digital
          content. Applications typically allow users to design their own
          levels, characters, and worlds; build attractors or user interfaces;
          add sound effects and music; and publish their creations online for
          others to download. Some applications also offer marketing tools for
          promoting the games they have developed.
        </p>

        <button
          className={styles.gamedevelopmentbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Get Started
        </button>

        <div
          className="modal fade"
          id="staticbackdropds"
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

export default GameDevelopmentBanner;
