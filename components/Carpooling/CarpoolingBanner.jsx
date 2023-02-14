import dynamic from "next/dynamic";
import React from "react";
const MainBanner = dynamic(() =>
  import("../particularComponents/BannerCompo/MainBanner"),
);
import { homeBannerData } from "../Data/BannerData";

export default function CarpoolingBanner() {
  return (
    <>
      <MainBanner bannerData={homeBannerData} />
    </>
  );
}
