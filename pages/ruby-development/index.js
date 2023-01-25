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
import Head from "next/head";

export default function RubyRails() {
  return (
    <div>
      <Head>
        <title>Ruby Development | Bottom Funnel</title>
        <meta
          name="description"
          content="We know that your time is valuable and 
      you have a very keen interest in finding a company
       that can deliver quality work for reasonable prices.
        When you look for Ruby development, you are looking 
        for the best web application development company in town. 
        We are more than happy to be able to help individuals,
         businesses, and startups with their app needs. Our team 
         of seasoned developers is ready to take on any project – big
          or small! We will provide the best possible solutions while
           keeping your budget in mind. Contact us today so we can get 
           started working on your project!"
        />
      </Head>

      <main>
        <Navbar />
        <WebdevBanner paraColor={"#393939"} bannerContent={rubyBanner} />
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
      </main>
    </div>
  );
}
