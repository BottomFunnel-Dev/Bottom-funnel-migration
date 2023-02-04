import React from "react";
import Lottie from "react-lottie";

import styles from "./mernbanner.module.css";


export const Mernbanner = ({ bannerdata, animateData }) => {
  const lottieData = {
    loop: true,
    autoplay: true,
    animationData: animateData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
    <div
      className={styles.mernBanner}
      style={{
        // background: `url(${bannerdata.background})`,
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
          <div key={index} className={styles.mernskills}>
            
           
          </div>
        ))}
      </div>
      <div className={styles.mernanimation}>
            <Lottie options={lottieData} />
            </div>
    </div>
  );
};
