import Image from "next/image";
import React from "react";
import styles from "./ItConsultingWebsiteBanner.module.css";

export const ItConsultingWebsiteBanner = () => {
  return (
    <div className={styles.consultingBannerParentDiv}>
      <Image
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
        src="/Images/ItConsulting/BannerImage.webp"
        alt="ItConsulting/BannerImage.webp"
      />
      <div className={styles.consultingBannerContentDiv}>
        <h1> IT Consulting Services </h1>
        <p>
          Bottom Funnel represents the connected world, offering innovative and
          customer-centric information technology experiences, enabling
          Enterprises, Associates and the Society to Rise.
        </p>
        <button> Get Started </button>
      </div>
    </div>
  );
};
