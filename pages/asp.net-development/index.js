import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";



// ---------------importing components data from data folder from components-----------------------
import { aspnetBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { aspstackIntro } from "../../components/Data/webdevPageData/StackData";
import { aspnetwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyAspnet } from "../../components/Data/webdevPageData/whyTechStack";
import { aspnetWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import * as ReactAnimation from "../../public/webdevanimation/Asp.json";


// ---------------importing components with lazy loading-----------------------

const WebdevBanner = dynamic(
  ()=>import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  {loading:()=>"Loading..."}
)

const Techstackintro = dynamic(
  ()=>import("../../components/WebDevelopment/techStackintro/Techstackintro"),
  {loading:()=>"Loading..."}
)

const WebDevServices = dynamic(
  ()=>import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  {loading:()=>"Loading..."}
)

const WhyTechStack = dynamic(
  ()=>import("../../components/WebDevelopment/whyTechStack/WhyTechStack"),
  {loading:()=>"Loading..."}
)
const GetStarted = dynamic(
  ()=>import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  {loading:()=>"Loading..."}
)

const WebDevWhy = dynamic(
  ()=>import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  {loading:()=>"Loading..."}
)

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
        <WebdevBanner paraColor={"#393939"} bannerContent={aspnetBanner} animateData={ReactAnimation} />
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
