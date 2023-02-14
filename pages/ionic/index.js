import React from "react";
import { IonicAppBanner } from "../../components/IonicAppDevelopment/IonicAppBanner/IonicAppBanner";
import { IonicBottomFunnel } from "../../components/IonicAppDevelopment/IonicBottomFunnel/IonicBottomFunnel";
import { IonicServices } from "../../components/IonicAppDevelopment/IonicServices/IonicServices";
import { WhyChooseIonic } from "../../components/IonicAppDevelopment/WhyChooseIonic/WhyChooseIonic";
import { IonicCrossPlatform } from "../../components/IonicAppDevelopment/IonicCrossPlatform/IonicCrossPlatform";
import { WhyChooseIonicBottomFunnel } from "../../components/IonicAppDevelopment/WhyChooseIonicBottomFunnel/WhyChooseIonicBottomFunnel";
import { IonicProject } from "../../components/IonicAppDevelopment/IonicProject/IonicProject";
import { IonicDevelopmentExpertise } from "../../components/IonicAppDevelopment/IonicDevelopmentExpertise/IonicDevelopmentExpertise";

import Head from "next/head";

export default function IonicAppDevelopment() {
  return (
    <>
      <Head>
        <title>Ionic App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for the best Ionic app development company in India? Hire BottomFunnel's ionic developer to build feature-rich, highly functional and customized ionic applications"
        />
      </Head>

      <main>

        <IonicAppBanner />
        <IonicBottomFunnel />
        <IonicServices />
        <WhyChooseIonic />
        <IonicCrossPlatform />
        <WhyChooseIonicBottomFunnel />
        <IonicProject />
        <IonicDevelopmentExpertise />

      </main>
    </>
  );
}
