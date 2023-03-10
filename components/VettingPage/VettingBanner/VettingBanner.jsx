import React from "react";
import styles from "./VettingBanner.module.css";
import Image from "next/image";

export const VettingBanner = () => {
  return (
    <div className={styles.vettingBannerContainer}>
      <div className={styles.vettingBannerImage}>
        
        <Image
          src={"/Images/VettingPhotos/banner.webp"}
          alt={"Humanimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.vettingBannerMain}>
        <h1>
          <span>Bottom Funnel</span> talent network is India's largest network
          of top professionals.
        </h1>
        <hr />
        <p>
          Bottom Funilling is the process of thoroughly investigating an
          individual, company, or other entity before making a decision to go
          forward with a joint project. A background review is an example of a
          vetting process for a potential employee. Once the vetting process is
          concluded, a well-informed hiring decision can be made.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
