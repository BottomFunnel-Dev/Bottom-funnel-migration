import React from "react";
import styles from "./Beautycontainer.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/beauty and salon.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Beautycontainer() {
  return (
    <div className={styles.beautycontainer}>
      <div className={styles.beautyleft}>
        <h1 className={styles.heading}>
          Beauty And Salon App Development Solutions
        </h1>
        <p>
          Beautify Your Business with An App! Enhance your salon's customer
          experience with our cutting-edge beauty & salon app development.
        </p>
        <button> Get Started</button>
      </div>

      <div className={styles.mobile}>
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
