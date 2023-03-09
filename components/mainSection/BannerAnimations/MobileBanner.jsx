import Image from "next/image";
import React from "react";
import styles from "./mobileBanner.module.css";
export const MobileBanner = () => {
  return (
    <div className={styles.mobilebanner}>
      <div className={styles.androidIcon}>
        {" "}
        {/* <Image
          src={"/Images/banner/mobiledev/android.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} /> */}
        <img src={"/Images/banner/mobiledev/android.png"} alt="image" />
      </div>

      <div className={styles.iosIcon}>
        {" "}
        {/* <Image
          src={"/Images/banner/mobiledev/ios.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} /> */}
        <img src="/Images/banner/mobiledev/ios.png" alt="image" />
      </div>
      <div className={styles.flutterIcon}>
        {" "}
        <Image
          src={"/Images/banner/mobiledev/flutter.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.ionicIcon}>
        {" "} <Image
          src={"/Images/banner/mobiledev/ionic.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.nativesIcon}>
        {" "}
        <Image
          src={"/Images/banner/mobiledev/native.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      <div className={styles.swiftIcon}>
        {" "}
        <Image
          src={"/Images/banner/mobiledev/swift.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
    </div>
  );
};
