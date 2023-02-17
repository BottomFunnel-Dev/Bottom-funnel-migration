import Image from "next/image";
import React from "react";
import styles from "./EcommerceBookCall.module.css";

export default function EcommerceBookCall() {
  return (
    <div className={styles.EcommerceBookCallMain}>
      <div>
        <h1>
          Get all the gaming development soluitons for all the kind of platform?
        </h1>
        <button>Let's Get Started</button>
      </div>
      <span>
        <Image
          src={"/Images/EcommercePhotos/background/phone.webp"}
          alt={"EcommercePhotos/background/phone.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
