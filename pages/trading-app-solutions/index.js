import React from "react";

import { TradingInvestingHeader } from "../../components/Trading-Investing-App-Page/TradingInvestingHeader";
import { ServicesOffer } from "../../components/Trading-Investing-App-Page/ServicesOffer";
import { WaysToGrow } from "../../components/Trading-Investing-App-Page/WaysToGrow";
import { SolutionFrame } from "../../components/Trading-Investing-App-Page/SolutionFrame";
import { SolutionFrameTwo } from "../../components/Trading-Investing-App-Page/SolutionFrameTwo";
import { WhyChooseBF } from "../../components/Trading-Investing-App-Page/WhyChooseBF";
import { TradingInvestingFooter } from "../../components/Trading-Investing-App-Page/TradingInvestingFooter";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function TradingInvestingApp() {
  return (
    <div>
      <Head>
        <title>
          Trading Investing Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you struggling to find the right Trading Investing Web 
          App Development Company to support your trading needs?
           Let us help you find the perfect partner for your project. 
          We specialize in Trading Investing Web and App Development 
          and can help you take your business to the next level."
        />
      </Head>

      <main>
        {/* <Navbar /> */}
        <TradingInvestingHeader />
        <ServicesOffer />
        <WaysToGrow />
        <SolutionFrame />
        {/* <SolutionFrameTwo /> */}
        <WhyChooseBF />
        {/*    <TradingInvestingFooter />  */}

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
