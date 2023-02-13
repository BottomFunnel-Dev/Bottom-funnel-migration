import React from "react";
import styles from "./carRentalHeader.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/car rental.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function CarRentalHeader() {
  return (
    <div className={styles.RGcarRentalContainer}>
      <div className={styles.RGcarRentalHeaderLeft}>
        <h1> Car Rental App Solution</h1>
        <p>
          The Screeno ecosystem is designed to help you generate profit. Set up
          complete sales and marketing funnels with ease using the Screeno
        </p>
        <button>Start Free Trail </button>
      </div>

      <div className={styles.RGcarRentalHeaderRight}>
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
