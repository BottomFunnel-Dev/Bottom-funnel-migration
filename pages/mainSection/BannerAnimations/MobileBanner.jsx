import React from "react";
import "./mobileBanner.css";
export const MobileBanner = () => {
  return (
    <div className="mobilebanner">
      <div className="androidIcon">
        {" "}
        <img src="Images/banner/mobiledev/android.png" alt="" />
      </div>
      <div className="iosIcon">
        {" "}
        <img src="Images/banner/mobiledev/ios.png" alt="" />
      </div>
      <div className="flutterIcon">
        {" "}
        <img src="Images/banner/mobiledev/flutter.png" alt="" />
      </div>
      <div className="ionicIcon">
        {" "}
        <img src="Images/banner/mobiledev/ionic.png" alt="" />
      </div>
      <div className="nativesIcon">
        {" "}
        <img src="Images/banner/mobiledev/native.png" alt="" />
      </div>
      <div className="swiftIcon">
        {" "}
        <img src="Images/banner/mobiledev/swift.png" alt="" />
      </div>
    </div>
  );
};
