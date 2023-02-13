import React from "react";
import { MainBanner } from "../particularComponents/BannerCompo/MainBanner";
import { homeBannerData } from "../Data/BannerData";

export const CarpoolingBanner = () => {
  return (
    <>
      <MainBanner bannerData={homeBannerData} />
    </>
  );
};
