import React from "react";
import styles from "./AboutusBanner.module.css";
import Image from "next/image";

export const AboutusBanner = () => {
  return (
    <div className={styles.aboutusBanner}>
      <div className={styles.aboutusbannerimage}>
        <Image
          src={"/Images/aboutusImage/banner.webp"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.aboutusbannercontent}>
        <h1>
          Build Your Brands presence With{" "}
          <span className={styles.aboutusanimatedtitle}> BOTTOM FUNNEL </span>
        </h1>
        <hr />
        <p>
          Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field.
        </p>
        <button> Get Started </button>
      </div>
    </div>
  );
};
