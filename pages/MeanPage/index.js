import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { meanBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { meanstackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { meanDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyMEAN } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";
import { MEANWhyContent } from "../Data/webdevPageData/whyBottomContent";


export default function MeanPage() {
  return (
    <div>
      <WebdevBanner bannerContent={meanBanner} />
      <Techstackintro techContent={meanstackIntro} />
      <WebDevServices webservicesContent={meanDevServices} />
      <WhyTechStack techData={whyMEAN} />
      <GetStarted />
      <WebDevWhy whyDevContent={MEANWhyContent} />

    </div>
  );
}
