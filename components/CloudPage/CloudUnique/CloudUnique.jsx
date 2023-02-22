import React from "react";
import styles from "./CloudUnique.module.css";
import Image from "next/image";

export default function CloudUnique() {
  return (
    <>
      <div className={styles.CloudUniqueContainer}>
        <div className={styles.CloudUniqueContent}>
          <h1>
            <span>Cloud</span> Services.
          </h1>
          <div className={styles.CloudUniqueHrLine}>
            <span></span>
            <div></div>
            <span></span>
          </div>
          <p>
            Bottom Funnel's team of seasoned consultants is ready to help you
            navigate the complex world of clouds and understand your unique
            needs. We'll work with you every step of the way to ensure that your
            cloud deployment is error-free and efficient.
            {/* <ul>
            <li>
              Designing a pragmatic cloud strategy.
            </li>
            <li>
              Defining the right cloud services to use.
            </li>
            <li>
              Efficient cloud-native development.
            </li>
            <li>
              Smooth migration of legacy infrastructures to cloud, and more.
            </li>
          </ul> */}
          </p>
        </div>
        <div className={styles.CloudUniqueImage}>
          <Image
            src={"/Images/CloudPhotos/vector.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
