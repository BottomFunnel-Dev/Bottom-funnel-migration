import Image from "next/image";
import React from "react";
import styles from "./UXDesingBanner.module.css";

export const UXDesingBanner = () => {
  return (
    <div className={styles.UXDesingBannercontainer}>
      <div className={styles.UXDesingBannercontent}>
        <h1>User Experience Design</h1>
        <p>
          Bottom Funnel is a company that embodies innovation and creativity.
          We're driven by a vision to create cutting-edge products and services
          that exceed expectations. With our team of experts, we craft
          brilliance together and deliver experiences that are ever-evolving.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className={styles.UXDesingBannermain}>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/UXDesignPhotos/banner.webp"
            alt="Banner mobile image"
          />
        </div>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/UXDesignPhotos/design-key.webp"
            alt="design-key.webp"
          />
        </div>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/UXDesignPhotos/ps.webp"
            alt="PS.webp"
          />
        </div>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/UXDesignPhotos/ux.webp"
            alt="ux.webp"
          />
        </div>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/UXDesignPhotos/research.webp"
            alt="research.webp"
          />
        </div>
      </div>
    </div>
  );
};
