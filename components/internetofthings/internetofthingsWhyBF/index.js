import Image from "next/image";
import React from "react";
import styles from "./internetofthingsWhyBF.module.css";

export default function InternetofthingsWhyBF() {
  return (
    <div className={styles.internetofthingsWhyBFContainer}>
      <h1>Why Choose Bottom Funnel</h1>
      <p>
        Lorem Ipsum is simple dummy text of the printing and typesetting
        industry. Lorem Ipsum has been
      </p>
      <div>
        <Image
          src={"/Images/internetOfThingsPhotos/whyBottomFunnel.webp"}
          alt={"internetOfThingsPhotos/whyBottomFunnel.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "fit-content" }}
        />
      </div>
    </div>
  );
}
