import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { javascriptBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { javascriptstackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { javascriptwebDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyJavascript } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";
import { javascriptWhyContent } from "../Data/webdevPageData/whyBottomContent";


export default function JavascriptPage() {
  return (
    <div>
      <WebdevBanner bannerContent={javascriptBanner} />
      <Techstackintro techContent={javascriptstackIntro} />
      <WebDevServices webservicesContent={javascriptwebDevServices} />
      <WhyTechStack techData={whyJavascript} />
      <GetStarted />
      <WebDevWhy whyDevContent={javascriptWhyContent} />

      
    </div>
  );
}
