import React from "react";

import Head from "next/head";
import { PoliticsAppDevelopmentbanner } from "../../../components/PoliticsAppDevelopment/PoliticsAppDevelopmentbanner";
import { PoliticsApptextbox } from "../../../components/PoliticsAppDevelopment/PoliticsApptextbox";
import { Politicscustomerapp } from "../../../components/PoliticsAppDevelopment/Politicscustomerapp";
import { Politicsadminpannel } from "../../../components/PoliticsAppDevelopment/Politicsadminpannel";
import { PoliticsDevelopmentlowerbanner } from "../../../components/PoliticsAppDevelopment/PoliticsDevelopmentlowerbanner";
import { PoliticsFramework } from "../../../components/PoliticsAppDevelopment/PoliticsFramework";
import { Politicsreliable } from "../../../components/PoliticsAppDevelopment/Politicsreliable";
import { PoliticsWhychooseus } from "../../../components/PoliticsAppDevelopment/PoliticsWhychooseus";

export default function PoliticsAppDevelopment() {
  return (
    <div>
      <Head>
        <title>Politics Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable politics web app development company that can take on your project 
      wholeheartedly? Check out our website and see for yourself how we can help!"
        />
      </Head>

      <main>
        <PoliticsAppDevelopmentbanner />

        {/*<PoliticsnewsLogo /> */}
        <PoliticsApptextbox />
        <Politicscustomerapp />
        <Politicsadminpannel />
        <PoliticsDevelopmentlowerbanner />
        <PoliticsFramework />
        <Politicsreliable />
        <PoliticsWhychooseus />
      </main>
    </div>
  );
}
