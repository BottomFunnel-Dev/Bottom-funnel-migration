import React from "react";
import dynamic from "next/dynamic";
import { golangWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import { golangwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { golangBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { golangstackIntro } from "../../components/Data/webdevPageData/StackData";
import { whyGolang } from "../../components/Data/webdevPageData/whyTechStack";
import Head from "next/head";

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
        <WebdevBanner
          paraColor={"#393939"}
          bannerContent={golangBanner}
          animateData={"/webdevanimation/Goglang.json"}
        />
        <Techstackintro techContent={golangstackIntro} />
        <WebDevServices webservicesContent={golangwebDevServices} />
        <WhyTechStack techData={whyGolang} />
        <GetStarted />
        <WebDevWhy whyDevContent={golangWhyContent} />
      </main>
    </div>
  );
}
