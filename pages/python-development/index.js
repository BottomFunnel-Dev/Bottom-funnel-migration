import React from "react";
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
import { pythonBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { pythonstackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { pythonwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyPython } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { pythonWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

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

export default function PythonDevelopment() {
  return (
    <div>
      <Head>
        <title>PythonDevelopment | Bottom Funnel</title>
        <meta
          name="description"
          content="Python Development is the answer. We are a team of
       talented developers who love what they do. We understand the 
       importance of quality software development, and we strive to 
       deliver it on time."
        />
      </Head>

      <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
        <WebdevBanner paraColor={"#393939"} bannerContent={pythonBanner} />
        <Techstackintro techContent={pythonstackIntro} />
        <WebDevServices webservicesContent={pythonwebDevServices} />
        <WhyTechStack techData={whyPython} />
        <GetStarted />
        <WebDevWhy whyDevContent={pythonWhyContent} />

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
