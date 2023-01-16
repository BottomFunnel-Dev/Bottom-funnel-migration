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

export default function MeanPage() {
  return (
    <div>
      <WebdevBanner bannerContent={meanBanner} />
      <Techstackintro techContent={meanstackIntro} />
      <WebDevServices webservicesContent={meanDevServices} />
      <WhyTechStack techData={whyMEAN} />
      <GetStarted />
      <WebDevWhy whyDevContent={MEANWhyContent} />

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
