import React from "react";
import styles from "./FlutterAppDevelopmentBanner.module.css";
import * as reactAnimation from "../../../public/Animation/flutter.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const FlutterAppDevelopmentBanner = () => {
  return (
    <>
      <div className={styles.flutterAppDevbannermainbox}>
        <div className={styles.flutterAppDevbannermainboxinnertextdiv}>
          <h1>
            <span>Flutter App</span> Development
          </h1>
          <p>
            Bottom funnel flutter app development is a complete package which
            offers you all the services to develop an application from scratch.
            With our eminent developers and designers, you can be sure that your
            smart application will be up-to-date with all the changes in
            technology.
          </p>
          <button className={styles.flutterAppDevbannerbutton}>
            Get Started
          </button>
        </div>
        <div className={styles.FlutterIcon}>
          <Player
            src={reactAnimation}
            background="transparent"
            speed="1"
            loop
            controls
            autoplay
          ></Player>
        </div>
      </div>
    </>
  );
};
