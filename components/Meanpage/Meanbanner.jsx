import React from "react";
import styles from "./Meanbanner.module.css";
import * as reactAnimation from "../../../public/Animation/android.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Meanbanner () {
  return (
    <div>
      <div className={styles.androidIcon}>
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

// export default Meanbanner
