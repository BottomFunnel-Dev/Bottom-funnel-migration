import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { pythonBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { pythonstackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { pythonwebDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyPython } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";
import { pythonWhyContent } from "../Data/webdevPageData/whyBottomContent";



export default function PythonDevelopment() {
  return (
    <div>
      <WebdevBanner bannerContent={pythonBanner} />
      <Techstackintro techContent={pythonstackIntro} />
      <WebDevServices webservicesContent={pythonwebDevServices} />
      <WhyTechStack techData={whyPython} />
      <GetStarted />
      <WebDevWhy whyDevContent={pythonWhyContent} />
    </div>
  );
}
