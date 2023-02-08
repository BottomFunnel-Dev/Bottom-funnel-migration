import React from "react";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
import { javascriptBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { javascriptstackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { javascriptwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyJavascript } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { javascriptWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

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

export default function JavascriptPage() {
  return (
    <div>
      <Head>
        <title>Javascript Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for Javascript development services? Our 
          team of top- notch experts offers comprehensive 
          solutions for building engaging web experiences. 
          Read on for details"
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
        <WebdevBanner paraColor={"#393939"} bannerContent={javascriptBanner} />
        <Techstackintro techContent={javascriptstackIntro} />
        <WebDevServices webservicesContent={javascriptwebDevServices} />
        <WhyTechStack techData={whyJavascript} />
        <GetStarted />
        <WebDevWhy whyDevContent={javascriptWhyContent} />

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
