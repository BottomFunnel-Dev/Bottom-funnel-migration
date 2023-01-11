import React from "react";
import { MainBanner } from "../particularComponents/BannerCompo/MainBanner";
// import "./carpoolingBanner.css";
import { homeBannerData } from "../Data/BannerData";

export const CarpoolingBanner = () => {
  return (
    <>
      <MainBanner bannerData={homeBannerData} />
    </>
  );
};
