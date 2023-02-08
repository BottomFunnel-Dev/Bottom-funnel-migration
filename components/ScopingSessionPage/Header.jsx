import Image from "next/image";
import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.RGmainContaier}>
        <div className={styles.RGheaderText}>
          <h1 className={styles.RGheaderTitle}>Scoping Session</h1>

          <p className={styles.RGheadertext}>
            Bottom Funnel is a marketing agency that specializes in conveying
            breakthrough ideas to the market cost-effectively. We understand
            your product inside out and will work tirelessly to make it a
            success.
          </p>

          <button className={styles.RGheaderButton}> Get Started</button>
        </div>

        <div className={styles.RGimageDiv}>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/Scoping-Session/Banners-&-Background/banner.webp"
            alt="Scoping-Session/Banners-&-Background/banner.webp"
          />
        </div>
      </div>
    </>
  );
};
