import React from "react";
import dynamic from "next/dynamic";
import { golangWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import { golangwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { golangBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { golangstackIntro } from "../../components/Data/webdevPageData/StackData";
import { whyGolang } from "../../components/Data/webdevPageData/whyTechStack";
import Head from "next/head";
import * as ReactAnimation from "../../public/webdevanimation/Goglang.json";

const WebdevBanner = dynamic(
  () => import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  { loading: () => "loading..." },
);
const Techstackintro = dynamic(
  () => import("../../components/WebDevelopment/techStackintro/Techstackintro"),
  { loading: () => "loading..." },
);
const WebDevServices = dynamic(
  () => import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  { loading: () => "loading..." },
);
const WhyTechStack = dynamic(
  () => import("../../components/WebDevelopment/whyTechStack/WhyTechStack"),
  { loading: () => "loading..." },
);
const GetStarted = dynamic(
  () => import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  { loading: () => "loading..." },
);
const WebDevWhy = dynamic(
  () => import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  { loading: () => "loading..." },
);
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
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

export default function GolangPages() {
  return (
    <div>
      <Head>
        <title>Golang Development | Bottom Funnel</title>
        <meta
          name="description"
          content="You can't improve what you don't know, and that's 
      why we're here. With years of experience in Golang development
      , we can help you create the next great web app. Not only are
       we experts in building quality code, but also in marketing
        your application to maximize its potential."
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
        <WebdevBanner paraColor={"#393939"} bannerContent={golangBanner} animateData={ReactAnimation}/>
        <Techstackintro techContent={golangstackIntro} />
        <WebDevServices webservicesContent={golangwebDevServices} />
        <WhyTechStack techData={whyGolang} />
        <GetStarted />
        <WebDevWhy whyDevContent={golangWhyContent} />

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
