import React from "react";
import styles from "./mobileBanner.module.css";
export const MobileBanner = () => {
  return (
    <div className={styles.mobilebanner}>
      <div className={styles.androidIcon}>
        {" "}
        <img src="Images/banner/mobiledev/android.png" alt="" />
      </div>
      <div className={styles.iosIcon}>
        {" "}
        <img src="Images/banner/mobiledev/ios.png" alt="" />
      </div>
      <div className={styles.flutterIcon}>
        {" "}
        <img src="Images/banner/mobiledev/flutter.png" alt="" />
      </div>
      <div className={styles.ionicIcon}>
        {" "}
        <img src="Images/banner/mobiledev/ionic.png" alt="" />
      </div>
      <div className={styles.nativesIcon}>
        {" "}
        <img src="Images/banner/mobiledev/native.png" alt="" />
      </div>
      <div className={styles.swiftIcon}>
        {" "}
        <img src="Images/banner/mobiledev/swift.png" alt="" />
      </div>
    </div>
  );
};
