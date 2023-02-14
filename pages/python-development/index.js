import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { pythonBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { pythonstackIntro } from "../../components/Data/webdevPageData/StackData";
import { pythonwebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyPython } from "../../components/Data/webdevPageData/whyTechStack";
import { pythonWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import * as ReactAnimation from "../../public/webdevanimation/Phyton.json";

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

export default function PythonDevelopment() {
  return (
    <div>
      <Head>
        <title>Python Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Python Development is the answer. We are a team of
       talented developers who love what they do. We understand the 
       importance of quality software development, and we strive to 
       deliver it on time."
        />
      </Head>

      <main>
        <WebdevBanner paraColor={"#393939"} bannerContent={pythonBanner} animateData={ReactAnimation}/>
        <Techstackintro techContent={pythonstackIntro} />
        <WebDevServices webservicesContent={pythonwebDevServices} />
        <WhyTechStack techData={whyPython} />
        <GetStarted />
        <WebDevWhy whyDevContent={pythonWhyContent} />
      </main>
    </div>
  );
}
