import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.RGtank}>
      <div className={styles.RGfooterImage}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/Scoping-Session/Banners-&-Background/midbanner.webp"
          alt="Scoping-Session/Banners-&-Background/midbanner.webp"
        />
      </div>
    </div>
  );
};
