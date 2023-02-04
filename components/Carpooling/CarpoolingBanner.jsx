import React from "react";
import { MainBanner } from "../particularComponents/BannerCompo/MainBanner";
// import "./carpoolingBanner.css";
import { homeBannerData } from "../Data/BannerData";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Flower delivery.json";
import Lottie from "react-lottie";

export const CarpoolingBanner = () => {
  
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <MainBanner bannerData={homeBannerData} />
    </>
  );
};
