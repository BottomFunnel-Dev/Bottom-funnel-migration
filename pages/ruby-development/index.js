import React from "react";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
import { rubyBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { rubystackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { rubywebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyRuby } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { rubyWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function RubyRails() {
  return (
    <div>
      <Navbar />
      <WebdevBanner bannerContent={rubyBanner} />
      <Techstackintro techContent={rubystackIntro} />
      <WebDevServices webservicesContent={rubywebDevServices} />
      <WhyTechStack techData={whyRuby} />
      <GetStarted />
      <WebDevWhy whyDevContent={rubyWhyContent} />
      
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
