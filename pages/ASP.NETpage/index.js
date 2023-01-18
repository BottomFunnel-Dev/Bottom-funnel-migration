import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { aspnetBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { aspstackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { aspnetwebDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyAspnet } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";
import { aspnetWhyContent } from "../Data/webdevPageData/whyBottomContent";


export default function AspNet() {
  return (
    <div>
      <WebdevBanner bannerContent={aspnetBanner} />
      <Techstackintro techContent={aspstackIntro} />
      <WebDevServices webservicesContent={aspnetwebDevServices} />
      <WhyTechStack techData={whyAspnet} />
      <GetStarted />
      <WebDevWhy whyDevContent={aspnetWhyContent} />

    </div>
  );
}
