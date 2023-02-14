import React from "react";

import { XamarinAppDevelopmentBanner } from "../../components/XamarinAppDevelopment/XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinMobileDevelopment } from "../../components/XamarinAppDevelopment/XamarinMobileDevelopment/XamarinMobileDevelopment";
import { XamarinSolutions } from "../../components/XamarinAppDevelopment/XamarinSolutions/XamarinSolutions";
import { WhyChooseXamarin } from "../../components/XamarinAppDevelopment/WhyChooseXamarin/WhyChooseXamarin";
import { XamarinDevelopers } from "../../components/XamarinAppDevelopment/XamarinDevelopers/XamarinDevelopers";
import { XamarinApproach } from "../../components/XamarinAppDevelopment/XamarinApproach/XamarinApproach";
import { XamarinDevelopmentExpertise } from "../../components/XamarinAppDevelopment/XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";

import Head from "next/head";

export default function XamarinAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Xamarin App Development Company | Hire Xamarin Developers |
          BottomFunnel
        </title>
        <meta
          name="description"
          content="BottomFunnel is a leading Xamarin app development company. Not just developing, we transform ideas into a digital existence. Hire Xamarin app developers from us."
        />
      </Head>
      <main>
        <XamarinAppDevelopmentBanner />
        <XamarinMobileDevelopment />
        <XamarinSolutions />
        <WhyChooseXamarin />
        <XamarinDevelopers />
        <XamarinApproach />
        <XamarinDevelopmentExpertise />
      </main>
    </>
  );
}
