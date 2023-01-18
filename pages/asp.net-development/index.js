import React from "react";
import { aspnetBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { aspstackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { aspnetwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyAspnet } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { aspnetWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";

export default function AspNet() {
  return (
    <div>
      <Navbar />
      <WebdevBanner bannerContent={aspnetBanner} />
      <Techstackintro techContent={aspstackIntro} />
      <WebDevServices webservicesContent={aspnetwebDevServices} />
      <WhyTechStack techData={whyAspnet} />
      <GetStarted />
      <WebDevWhy whyDevContent={aspnetWhyContent} />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      {/* <PlanProject />  */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
