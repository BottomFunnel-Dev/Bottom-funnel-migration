import Image from "next/image";
import React from "react";
import styles from "./internetofThingsMidBanner.module.css";

export default function InternetofThingsMidBanner() {
  return (
    <div className={styles.internetofThingsMidBannerContainer}>
      <span>
        <Image
          src={"/Images/internetOfThingsPhotos/phone.webp"}
          alt={"internetOfThingsPhotos/phone.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h2>Have a Unique & Exceptional Idea For a IOT development App ?</h2>
        <h1>
          We can turn your vision into an Interactive & full functional app.
        </h1>
        <button>Get Started</button>
      </div>
    </div>
  );
}
