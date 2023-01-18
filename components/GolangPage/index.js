import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { golangBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { golangstackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { golangwebDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyGolang } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { golangWhyContent } from "../Data/webdevPageData/whyBottomContent";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

export default function GolangPages() {
  return (
    <div>
      <WebdevBanner bannerContent={golangBanner} />
      <Techstackintro techContent={golangstackIntro} />
      <WebDevServices webservicesContent={golangwebDevServices} />
      <WhyTechStack techData={whyGolang} />
      <GetStarted />
      <WebDevWhy whyDevContent={golangWhyContent} />

      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
}
