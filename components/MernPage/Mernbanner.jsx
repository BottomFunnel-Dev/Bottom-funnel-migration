import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import styles from "./mernbanner.module.css";

export const Mernbanner = ({ bannerdata, animateData }) => {
  return (
    <div
      className={styles.mernBanner}
      style={{
        background: `url(${bannerdata.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.mernbannercontent}>
        <h1>{bannerdata.title}</h1>
        <p>{bannerdata.description}</p>
        <button className={styles.mernButton}>Request A Quote</button>
      </div>

      <div className={styles.bannerIcons}>
        {bannerdata.icons.map((item, index) => (
          <div key={index} className={styles.mernskills}></div>
        ))}
      </div>
      <div className={styles.mernanimation}>
        <Player
          src={animateData}
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
