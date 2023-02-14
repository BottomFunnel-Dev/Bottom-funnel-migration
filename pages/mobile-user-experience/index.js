import React from "react";
import { MobileKickStart } from "../../components/MobileUiUxDesign/MobileKickStart";
import { MobileUiUxBanner } from "../../components/MobileUiUxDesign/MobileUiUxBanner";
import { MobileUiUxToNotched } from "../../components/MobileUiUxDesign/MobileUiUxToNotched";
import { MobileUXReactNative } from "../../components/MobileUiUxDesign/MobileUXReactNative";
import { MobileUxUiB2cSolution } from "../../components/MobileUiUxDesign/MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "../../components/MobileUiUxDesign/MobileUxUiDesignPartner";
import { MobileUXUIServiceOffer } from "../../components/MobileUiUxDesign/MobileUXUIServiceOffer";

import Head from "next/head";

export default function MobileUiUxDesign() {
  return (
    <>
      <Head>
        <title>UI UX App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is the best web design company in India, we offers professional & custom website design services including mockup design, graphic UI design e-commerce website design at competitive prices."
        />
      </Head>

      <main>
        <MobileUiUxBanner />
        <MobileUiUxToNotched />
        <MobileUXUIServiceOffer />
        <MobileUxUiB2cSolution />
        <MobileUxUiDesignPartner />
        <MobileKickStart />
        <MobileUXReactNative />
      </main>
    </>
  );
}
