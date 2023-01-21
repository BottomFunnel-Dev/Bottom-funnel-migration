import React from "react";

import { TradingInvestingHeader } from "./TradingInvestingHeader";
import { ServicesOffer } from "./ServicesOffer";
import { WaysToGrow } from "./WaysToGrow";
import { SolutionFrame } from "./SolutionFrame";
import { SolutionFrameTwo } from "./SolutionFrameTwo";
import { WhyChooseBF } from "./WhyChooseBF";
import { TradingInvestingFooter } from "./TradingInvestingFooter";

import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../revamping/Revamping";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

export default function TradingInvestingApp () {
  return (
    <div>

    <Head>
    <title>Trending App Solution | Bottom Funnel</title>
    <meta
      name="description"
      content="Are you looking for 
      a trending app solution that will 
      help you save time and money? 
      Look no further, as our team has
       got you covered. Read on to learn
        more about our trending app
         solution and how it can benefit
          you."
    />
  </Head>


  <main>

      <Navbar />
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
};
