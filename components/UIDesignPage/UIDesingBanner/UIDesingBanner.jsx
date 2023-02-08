import Image from "next/image";
import React from "react";
import styles from "./UIDesingBanner.module.css";

export const UIDesingBanner = () => {
  return (
    <div className={styles.UIDesingBannercontainer}>
      <div className={styles.UIDesingBannercontent}>
        <h1>User Interface Design</h1>
        <p>
          Bottom funnel knows how important it is to design interfaces that are
          visually-stimulating, so they made sure that every application they
          built offers an experience worth your time.
        </p>
        <button>Book a Free Consultation</button>
      </div>
      <div className={styles.UIDesingBannermain}>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src={"/Images/UIDesignPhotos/banner.webp"}
            alt="UIDesignPhotos/banner.webp"
          />
        </div>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src={"/Images/UIDesignPhotos/background.webp"}
            alt="UIDesignPhotos/background.webp"
          />
        </div>
      </div>
    </div>
  );
};
