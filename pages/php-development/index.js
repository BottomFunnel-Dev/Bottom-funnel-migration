import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { phpBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { phpstackIntro } from "../../components/Data/webdevPageData/StackData";
import { phpDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyPHP } from "../../components/Data/webdevPageData/whyTechStack";
import { PHPWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

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

export default function PhP() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>PHP Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="PHP is a widely used programing language. Learn the different PHP solutions and development techniques that can help you 
          and your next project."
        />
      </Head>

      <main>
        <WebdevBanner
          bannerContent={phpBanner}
          animateData={"/webdevanimation/php.json"}
        />
        <Techstackintro techContent={phpstackIntro} />
        <WebDevServices webservicesContent={phpDevServices} />
        <WhyTechStack techData={whyPHP} />
        <GetStarted />
        <WebDevWhy whyDevContent={PHPWhyContent} />
      </main>
    </div>
  );
}
