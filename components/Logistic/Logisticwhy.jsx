import React from "react";
import styles from "./Logisticwhy.module.css";
import Image from "next/image";

export default function Logisticwhy() {
  return (
    <div className={styles.logisticwhyContainer}>
      <div>
        <h1>Boost your revenue with our Logistics app development services</h1>
        <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >Let's Get Started</button>
      </div>
      <span>
        <Image
          src={"/Images/logistic/background/mid-banner.webp"}
          alt={"logistic/background/mid-banner.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
