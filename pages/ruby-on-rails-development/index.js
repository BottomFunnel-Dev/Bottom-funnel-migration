import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { rubyBanner } from "../../components/Data/webdevPageData/TechBannerData";
import { rubystackIntro } from "../../components/Data/webdevPageData/StackData";
import { rubyWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";
import { whyRuby } from "../../components/Data/webdevPageData/whyTechStack";
import { rubywebDevServices } from "../../components/Data/webdevPageData/Popularservices";

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

export default function RubyRails() {
  return (
    <div>
      <Head>
        <title>Ruby Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn how easy it is to develop powerful Ruby solutions with our comprehensive guide. From 
          setting up your development environment to writing code, we've got you covered."
        />
      </Head>

      <main>
        <WebdevBanner
          paraColor={"#393939"}
          bannerContent={rubyBanner}
          animateData={"/webdevanimation/Ruby.json"}
        />
        <Techstackintro techContent={rubystackIntro} />
        <WebDevServices webservicesContent={rubywebDevServices} />
        <WhyTechStack techData={whyRuby} />
        <GetStarted />
        <WebDevWhy whyDevContent={rubyWhyContent} />
      </main>
    </div>
  );
}
