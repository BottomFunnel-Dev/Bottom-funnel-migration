import Image from "next/image";
import React from "react";
import styles from "./softwarebanner.module.css";
export const SoftwareBanner = () => {
  return (
    <div className={styles.softwareBanner}>
      <div className={styles.javaIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/native.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

      <div className={styles.jqueryIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/webdev/jquery.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

      <div className={styles.jsIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/webdev/js.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

      <div className={styles.nodeIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/webdev/node.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      
      <div className={styles.reactIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/webdev/react.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

    </div>
  );
};
