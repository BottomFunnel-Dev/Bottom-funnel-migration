import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { webDevMain } from "../../components/Data/webdevPageData/TechBannerData";
import { webDevServices } from "../../components/Data/webdevPageData/Popularservices";
import { mernWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

const WebdevBanner = dynamic(
  () => import("../../components/WebDevelopment/bannerWebdev/WebdevBanner"),
  { loading: () => "loading..." },
);
const WebDevServices = dynamic(
  () => import("../../components/WebDevelopment/webdevServices/WebDevServices"),
  { loading: () => "loading..." },
);
const GetStarted = dynamic(
  () => import("../../components/WebDevelopment/webGetStartedCard/GetStarted"),
  { loading: () => "loading.." },
);
const WebDevTechStack = dynamic(
  () =>
    import("../../components/WebDevelopment/webDevTachstack/WebDevTechStack"),
  { loading: () => "loading..." },
);
const WebDevWhy = dynamic(
  () => import("../../components/WebDevelopment/webDevWhy/WebDevWhy"),
  { loading: () => "loading..." },
);

export default function index() {
  return (
    <div>
      <Head>
        <title>Web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to build a killer website or app? Our 
        extensive knowledge and experience in web 
        app development can help you create 
        top-notch solutions for your business."
        />
      </Head>
      <main>
        <WebdevBanner bannerContent={webDevMain} />
        <WebDevServices webservicesContent={webDevServices} />
        <GetStarted />

        <WebDevTechStack />

        <WebDevWhy whyDevContent={mernWhyContent} />
      </main>
    </div>
  );
}
