import React from "react";
import styles from "./AppBuilderSolutionBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/app builder.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AppBuilderSolutionBanner() {
  return (
    <div className={styles.appbuildersolutionbannermainboxes}>
      <div className={styles.appbuildersolutionboxfortextenter}>
        <h1>
          {" "}
          Bottom Funnel: a multi-purpose platform for low-code app development{" "}
        </h1>
        <p>
          Discover the platform that gives you the freedom to
          create,design,manage and develop your web presence the way you want.
        </p>

        <button className={styles.appbuildersolutionbannerbutton}>
          {" "}
          Get Started
        </button>
      </div>

      <div className={styles.appBuilderSolutionBannerAnimationDiv}>
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
}
