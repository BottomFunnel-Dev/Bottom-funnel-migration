import React from "react";
import styles from "./OurDevBanner.module.css";
import Image from "next/image";

export const OurDevBanner = () => {
  return (
    <div className={styles.ourDevBannerContainer}>
      <div className={styles.ourDevBannerImage}>
        {/* <img
          src="/Images/ourDevPhotos/banner.png"
          alt="Vetting banner human image"
        /> */}
        <Image
            src={"/Images/ourDevPhotos/banner.webp"}
            alt={"bannerimage"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
      </div>

      <div className={styles.ourDevBannerMain}>
        <h1>
          <span>Bottom Funnel</span>Follows a pursuit to develop the best products for web and mobile.
        </h1>
        <hr />
        <p>
          Bottom funnel follows a pursuit to develop the best products for web and mobile. We have rich experience in creating apps, website and games. Our concept is to provide our customers a branded experience ensuring them a high quality product.This process is based on a thorough research of market needs, requirements and opportunities. After many brainstorming sessions, we came up with this funnel diagram.We believe that innovation is key to sustainable growth and we are committed to conducting ourselves in a transparent manner.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
