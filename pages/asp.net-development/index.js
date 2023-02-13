import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
import { WebdevBanner } from "../../components/WebDevelopment/bannerWebdev/WebdevBanner";
import { aspnetBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Techstackintro } from "../../components/WebDevelopment/techStackintro/Techstackintro";
import { aspstackIntro } from "../../components/Data/webdevPageData/StackData";
import { WebDevServices } from "../../components/WebDevelopment/webdevServices/WebDevServices";
import { aspnetwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { WhyTechStack } from "../../components/WebDevelopment/whyTechStack/WhyTechStack";
import { whyAspnet } from "../../components/Data/webdevPageData/whyTechStack";
import { GetStarted } from "../../components/WebDevelopment/webGetStartedCard/GetStarted";
import { WebDevWhy } from "../../components/WebDevelopment/webDevWhy/WebDevWhy";
import { aspnetWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "Loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "Loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "Loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "Loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "Loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "Loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "Loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "Loading..." },
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

// ------------------Main page function-----------------
export default function AspNet() {
  return (
    <div>
      <Head>
        <title>ASP.NET Development | Bottom Funnel</title>
        <meta
          name="description"
          content="ASP.NET is a widely used web development 
          framework that offers many benefits to web 
          developers. Learn about these advantages and 
          get tips on developing ASP.NET solutions"
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
        <WebdevBanner paraColor={"#393939"} bannerContent={aspnetBanner} />
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
      </main>
    </div>
  );
}
