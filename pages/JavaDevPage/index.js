import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { javaBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { javastackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { javawebDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyJava } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";
import { javaWhyContent } from "../Data/webdevPageData/whyBottomContent";



export default function JavaDevPage() {
  return (
    <div>
      <WebdevBanner bannerContent={javaBanner} />
     <Techstackintro techContent={javastackIntro} />
     <WebDevServices webservicesContent={javawebDevServices} />
    <WhyTechStack techData={whyJava} />
       <GetStarted />
         <WebDevWhy whyDevContent={javaWhyContent} />

 
    </div>
  );
}
