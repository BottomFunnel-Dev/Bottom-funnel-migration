import React from "react";
import { WebdevBanner } from "../WebDevelopment/bannerWebdev/WebdevBanner";
import { rubyBanner } from "../Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../WebDevelopment/techStackintro/Techstackintro";
import { rubystackIntro } from "../Data/webdevPageData/StackData";
import { WebDevServices } from "../WebDevelopment/webdevServices/WebDevServices";
import { rubywebDevServices } from "../Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../WebDevelopment/whyTechStack/WhyTechStack";
import { whyRuby } from "../Data/webdevPageData/whyTechStack";
import { GetStarted } from "../WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../WebDevelopment/webDevWhy/WebDevWhy";
import { rubyWhyContent } from "../Data/webdevPageData/whyBottomContent";

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

export default function RubyRails() {
  return (
    <div>
      <WebdevBanner bannerContent={rubyBanner} />
      <Techstackintro techContent={rubystackIntro} />
      <WebDevServices webservicesContent={rubywebDevServices} />
      <WhyTechStack techData={whyRuby} />
      <GetStarted />
      <WebDevWhy whyDevContent={rubyWhyContent} />
      
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
