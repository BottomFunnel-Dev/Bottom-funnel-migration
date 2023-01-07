import React from "react";
import { MobileKickStart } from "./MobileKickStart";
import { MobileUiUxBanner } from "./MobileUiUxBanner";
import { MobileUiUxToNotched } from "./MobileUiUxToNotched";
import { MobileUXReactNative } from "./MobileUXReactNative";
import { MobileUxUiB2cSolution } from "./MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "./MobileUxUiDesignPartner";
import { MobileUXUIServiceOffer } from "./MobileUXUIServiceOffer";


export default function MobileUiUxDesign () {

  return (
    <div>
      <MobileUiUxBanner />
      <MobileUiUxToNotched />
      <MobileUXUIServiceOffer />
      <MobileUxUiB2cSolution />
      <MobileUxUiDesignPartner />
      <MobileKickStart />
      <MobileUXReactNative />

    </div>
  );
};
