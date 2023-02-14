import React from "react";
import { FlutterAppDevelopmentBanner } from "../../components/FlutterAppDevelopment/FlutterAppDevelopmentBanner/FlutterAppDevelopmentBanner";
import { FlutterServices } from "../../components/FlutterAppDevelopment/FlutterServices/FlutterServices";
import { WhyFlutter } from "../../components/FlutterAppDevelopment/WhyFlutter/WhyFlutter";
import { FlutterCrossPlatform } from "../../components/FlutterAppDevelopment/FlutterCrossPlatform/FlutterCrossPlatform";
import { FlutterAppDevelopmentDreamProject } from "../../components/FlutterAppDevelopment/FlutterAppDevelopmentDreamProject/FlutterAppDevelopmentDreamProject";
import { FluterDevelopmentExpertise } from "../../components/FlutterAppDevelopment/FluterDevelopmentExpertise/FluterDevelopmentExpertise";

import Head from "next/head";

export default function FlutterAppDevelopment() {
  return (
    <>
      <Head>
        <title>Flutter App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for top-notch flutter app development 
       services? Our team offers comprehensive and 
       thorough solutions. Read on to know about our 
       offerings."
        />
      </Head>
      <main>
        <FlutterAppDevelopmentBanner />
        <FlutterServices />
        <WhyFlutter />

        <FlutterCrossPlatform />
        <FlutterAppDevelopmentDreamProject />
        <FluterDevelopmentExpertise />
      </main>
    </>
  );
}
