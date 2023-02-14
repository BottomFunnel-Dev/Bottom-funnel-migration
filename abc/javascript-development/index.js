import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { javascriptWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import { whyJavascript } from "../../components/Data/webdevPageData/whyTechStack";
import { javascriptwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { javascriptstackIntro } from "../../components/Data/webdevPageData/StackData";
import { javascriptBanner } from "../../components/Data/webdevPageData/TechBannerData";
import * as ReactAnimation from "../../public/webdevanimation/Java Script.json";

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
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
});

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
        <WebdevBanner paraColor={"#393939"} bannerContent={javascriptBanner} animateData={ReactAnimation} />
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
