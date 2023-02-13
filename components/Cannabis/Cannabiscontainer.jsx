import React from "react";
import styles from "./Cannabiscontainer.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Cannabis.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const Cannabiscontainer = () => {
  return (
    <div className={styles.cannabuscontainermainboxes}>
      <div className={styles.cannabuscontainerboxforsometext}>
        <h1> Medical Cannabis Delivery App </h1>
        <p>
          Take your dispensary business on-demand with Uber for medical cannabis
          to ease the ordering process for medical patients
        </p>
        <button className={styles.cannabuscontainerbutton}>
          {" "}
          Get Started{" "}
        </button>
      </div>

      <div className={styles.CannabisContainerAnimationDiv}>
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
  );
};
