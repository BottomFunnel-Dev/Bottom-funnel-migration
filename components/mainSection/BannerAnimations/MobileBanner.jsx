import Image from "next/image";
import React from "react";
import styles from "./mobileBanner.module.css";
export const MobileBanner = () => {
  return (
    <div className={styles.mobilebanner}>
      <div className={styles.androidIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/android.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.iosIcon}>
        {" "} <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/ios.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.flutterIcon}>
        {" "} <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/flutter.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.ionicIcon}>
        {" "} <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/ionic.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.nativesIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/native.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.swiftIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobiledev/swift.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
    </div>
  );
};
