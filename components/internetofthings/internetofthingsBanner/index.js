import Image from "next/image";
import React from "react";
import styles from "./internetOfThingsBanner.module.css";

export default function InternetOfThingsBanner() {
  return (
    <div className={styles.internetOfThingsBannerContainer}>
      <div>
        <h1>IOT App development</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been
        </p>
        <button>Get Started</button>
      </div>
      <span>
        <Image
          src={"/Images/internetOfThingsPhotos/banner.webp"}
          alt={"internetOfThingsPhotos/banner.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
