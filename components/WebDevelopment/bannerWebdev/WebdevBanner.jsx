import React from "react";
import styles from "./webdevBanner.module.css";
import Lottie from "react-lottie";
export const WebdevBanner = ({ paraColor, bannerContent , animateData}) => {
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
      className={styles.webDevBanner}
      style={{
        background: `url(${bannerContent.background})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.webDebText}>
        <h1 style={{ color: paraColor ? paraColor : null }}>
          <span className={styles.orange}>
            {bannerContent.title.orange}</span>{" "}
          {bannerContent.title.normal}
        </h1>
        <p style={{ color: paraColor ? paraColor : null }}>
          {bannerContent.description}
        </p>

        <button className={styles.webDevButton}>Request A Quote</button>
      </div>
    <div className={styles.mernanimation}>
      <Lottie style={{
        marginTop:"10%",
        marginLeft:"100%"
      }} options={lottieData} height={600} width={700} />
      </div>
      </div>
  );
};
