import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { javaBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { javastackIntro } from "../../components/Data/webdevPageData/StackData";
import { javawebDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { whyJava } from "../../components/Data/webdevPageData/whyTechStack";
import { javaWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

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

export default function JavaDevPage() {
  return (
    <div>
      <Head>
        <title>Java Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for reliable Java development services? Our 
          team of expert consultants can help you with various
          aspects of Java programming. Read on to know more."
        />
      </Head>

      <main>
        <WebdevBanner
          paraColor={"#393939"}
          bannerContent={javaBanner}
          animateData={"/webdevanimation/Java.json"}
        />
        <Techstackintro techContent={javastackIntro} />
        <WebDevServices webservicesContent={javawebDevServices} />
        <WhyTechStack techData={whyJava} />
        <GetStarted />
        <WebDevWhy whyDevContent={javaWhyContent} />
      </main>
    </div>
  );
}
