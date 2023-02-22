import React from "react";
import styles from "./CloudWorkWithUs.module.css";
import Image from "next/image";

export default function CloudWorkWithUs() {
  return (
    <div className={styles.CloudWorkWithUsContainer}>
      <h1>
        <span>Cloud</span> We Work with
      </h1>
      <div className={styles.CloudWorkWithUsHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is an ideal partner for sorting out these confusions and
        helping you pick the right cloud solution for your organization. We look
        at all major clouds to provide you with a comprehensive understanding
        about their features and capabilities so that you can make an informed
        decision.
      </p>
      <div className={styles.CloudWorkIconsContainer}>
        <div className={styles.CloudWorkIconsMain}>
          <div>
            <Image
              src={"/Images/cloudPhotos/aws.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <span></span>
          <div>
            <Image
              src={"/Images/cloudPhotos/digital-ocean.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <span></span>
          <div>
            <Image
              src={"/Images/cloudPhotos/google-cloud-platform.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <span></span>
          <div>
            <Image
              src={"/Images/cloudPhotos/microsoft-azure.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
