import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components data from data folder from components-----------------------
import { aspnetBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { aspstackIntro } from "../../components/Data/webdevPageData/StackData";
import { aspnetwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyAspnet } from "../../components/Data/webdevPageData/whyTechStack";
import { aspnetWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

// ---------------importing components with lazy loading-----------------------

const WebdevBanner = dynamic(
  () => import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  { loading: () => "Loading..." },
);

const Techstackintro = dynamic(
  () => import("../../components/WebDevelopment/techStackintro/Techstackintro"),
  { loading: () => "Loading..." },
);

const WebDevServices = dynamic(
  () => import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  { loading: () => "Loading..." },
);

const WhyTechStack = dynamic(
  () => import("../../components/WebDevelopment/whyTechStack/WhyTechStack"),
  { loading: () => "Loading..." },
);
const GetStarted = dynamic(
  () => import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  { loading: () => "Loading..." },
);

const WebDevWhy = dynamic(
  () => import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  { loading: () => "Loading..." },
);

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
        <WebdevBanner
          paraColor={"#393939"}
          bannerContent={aspnetBanner}
          animateData={"/webdevanimation/Asp.json"}
        />
        <Techstackintro techContent={aspstackIntro} />
        <WebDevServices webservicesContent={aspnetwebDevServices} />
        <WhyTechStack techData={whyAspnet} />
        <GetStarted />
        <WebDevWhy whyDevContent={aspnetWhyContent} />
      </main>
    </div>
  );
}
