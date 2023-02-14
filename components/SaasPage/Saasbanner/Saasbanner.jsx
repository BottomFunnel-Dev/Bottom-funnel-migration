import React from "react";
import { BannerContent } from "./BannerContent/BannerContent";
import styles from "./Saasbanner.module.css";
import Image from "next/image";

export const Saasbanner = () => {
  return (
    <>
      <div className={styles.saasBannerMain}>
        <div className={styles.saasBannerImage}>
            <Image
                src={"/Images/saasPhotos/banner.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        </div>
      </div>
      <BannerContent />
    </>
  );
};
