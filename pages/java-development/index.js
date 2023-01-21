import React from "react";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
import { javaBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { javastackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { javawebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyJava } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { javaWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

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

export default function JavaDevPage() {
  return (
    <div>
      <Head>
        <title>Java Development | Bottom Funnel</title>
        <meta
          name="description"
          content="You have a great idea for a web app, 
      but you don't know where to begin. There's so 
      much information out there about app development, 
      but it's all confusing. You don't want to spend 
      money on an app that isn't going to give you the
       results you're looking for, and you also don't want
        to waste time on something that won't be useful in 
        the long run."
        />
      </Head>

      <main>
        <Navbar />
        <WebdevBanner paraColor={"#393939"} bannerContent={javaBanner} />
        <Techstackintro techContent={javastackIntro} />
        <WebDevServices webservicesContent={javawebDevServices} />
        <WhyTechStack techData={whyJava} />
        <GetStarted />
        <WebDevWhy whyDevContent={javaWhyContent} />

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
