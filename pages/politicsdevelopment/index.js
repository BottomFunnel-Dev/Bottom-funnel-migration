import React from "react";
import { PoliticsAppDevelopmentbanner } from "../../components/PoliticsAppDevelopment/PoliticsAppDevelopmentbanner";
import { Politicsadminpannel } from "../../components/PoliticsAppDevelopment/Politicsadminpannel";
import { PoliticsApptextbox } from "../../components/PoliticsAppDevelopment/PoliticsApptextbox";
import { Politicscustomerapp } from "../../components/PoliticsAppDevelopment/Politicscustomerapp";
import { PoliticsDevelopmentlowerbanner } from "../../components/PoliticsAppDevelopment/PoliticsDevelopmentlowerbanner";
import PoliticsnewsLogo from "../../components/PoliticsAppDevelopment/PoliticsDevelopmentnews";
import { PoliticsFramework } from "../../components/PoliticsAppDevelopment/PoliticsFramework";
import { Politicsnewsheading } from "../../components/PoliticsAppDevelopment/Politicsnewsheading";

export default function PoliticsAppDevelopment() {
  return (
    <div>
      <PoliticsAppDevelopmentbanner />

      {/*    <PoliticsnewsLogo /> */}
      <PoliticsApptextbox />
      <Politicscustomerapp />
      <Politicsadminpannel />
      <PoliticsDevelopmentlowerbanner />
      <PoliticsFramework />
    </div>
  );
}
