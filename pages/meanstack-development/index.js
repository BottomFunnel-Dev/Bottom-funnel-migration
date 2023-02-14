import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { meanBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { meanstackIntro } from "../../components/Data/webdevPageData/StackData";
import { meanDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyMEAN } from "../../components/Data/webdevPageData/whyTechStack";
import { MEANWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import * as ReactAnimation from "../../public/webdevanimation/Mean Stack.json";

const WebdevBanner = dynamic(
  () => import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  { loading: () => "loading..." }
);
const Techstackintro = dynamic(
  () => import("../../components/WebDevelopment/techStackintro/Techstackintro"),
  { loading: () => "loading..." }
);
const WebDevServices = dynamic(
  () => import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  { loading: () => "loading..." }
);
const WhyTechStack = dynamic(
  () => import("../../components/WebDevelopment/whyTechStack/WhyTechStack"),
  { loading: () => "loading..." }
);
const GetStarted = dynamic(
  () => import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  { loading: () => "loading..." }
);
const WebDevWhy = dynamic(
  () => import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  { loading: () => "loading..." }
);

export default function MeanPage() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>MEAN Stack Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn about the benefits of using the MEAN
          Stack for building modern web apps with 
          minimal effort. Our guide covers all aspects of 
          Stack development, including topics like building 
          a website or mobile app."
        />
      </Head>

      <main>
        <WebdevBanner bannerContent={meanBanner} animateData={ReactAnimation} />
        <Techstackintro techContent={meanstackIntro} />
        <WebDevServices webservicesContent={meanDevServices} />
        <WhyTechStack techData={whyMEAN} />
        <GetStarted />
        <WebDevWhy whyDevContent={MEANWhyContent} />
      </main>
    </div>
  );
}
