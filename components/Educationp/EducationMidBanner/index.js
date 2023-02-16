import Image from "next/image";
import React from "react";
import styles from "./EducationMidBanner.module.css";

export default function EducationMidBanner() {
  return (
    <div className={styles.EducationMidBannerContainer}>
      <div className={styles.EducationMidBannerContent}>
        <p>
          Transform the conventional education system into a customized modern
          lerning experience for your users.
        </p>
        <button>Talk to our experts</button>
      </div>
      <div className={styles.EducationMidBannerImages}>
        <Image
          src={"/Images/Educationp/mid-banner.webp"}
          alt={"/Educationp/mid-banner.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
