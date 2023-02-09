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

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function RubyRails() {
  return (
    <div>
      <Head>
        <title>Ruby Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn how easy it is to develop powerful Ruby 
          solutions with our comprehensive guide. From 
          setting up your development environment to writing 
          code, we've got you covered."
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
