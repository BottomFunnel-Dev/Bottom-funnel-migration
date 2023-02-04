import React from "react";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
import { meanBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { meanstackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { meanDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyMEAN } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { MEANWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";


export default function MeanPage() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Mean Development | Bottom Funnel</title>
        <meta
          name="description"
          content="You are sinking and want the ocean to repeat.
       But, you don't know how to swim or what is waiting for 
       you at the bottom. Or perhaps you're too lazy to learn! 
      Whatever be your reason, SmartApp is here to help you out.
       We have developed a team of experts who understand your 
       business requirements and can craft an app that's tailored
        precisely to meet those needs."
        />
      </Head>

  <main>
  <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
    
      <WebdevBanner bannerContent={meanBanner   } />
    
      <Techstackintro techContent={meanstackIntro} />
      <WebDevServices webservicesContent={meanDevServices} />
      <WhyTechStack techData={whyMEAN} />
      <GetStarted />
      <WebDevWhy whyDevContent={MEANWhyContent} />

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
        
      </main>
    </div>
  );
}
