import React from "react";
import { PoliticsAppDevelopmentbanner } from "../../components/PoliticsAppDevelopment/PoliticsAppDevelopmentbanner";
import { Politicsadminpannel } from "../../components/PoliticsAppDevelopment/Politicsadminpannel";
import { PoliticsApptextbox } from "../../components/PoliticsAppDevelopment/PoliticsApptextbox";
import { Politicscustomerapp } from "../../components/PoliticsAppDevelopment/Politicscustomerapp";
import { PoliticsDevelopmentlowerbanner } from "../../components/PoliticsAppDevelopment/PoliticsDevelopmentlowerbanner";
import PoliticsnewsLogo from "../../components/PoliticsAppDevelopment/PoliticsDevelopmentnews";
import { PoliticsFramework } from "../../components/PoliticsAppDevelopment/PoliticsFramework";
import { Politicsnewsheading } from "../../components/PoliticsAppDevelopment/Politicsnewsheading";
import Head from "next/head";

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

      {/*    <PoliticsnewsLogo /> */}
      <PoliticsApptextbox />
      <Politicscustomerapp />
      <Politicsadminpannel />
      <PoliticsDevelopmentlowerbanner />
      <PoliticsFramework />
      </main>
    </div>
  );
}
