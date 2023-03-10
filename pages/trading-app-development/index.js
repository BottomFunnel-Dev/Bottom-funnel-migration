import React from "react";

import { TradingInvestingHeader } from "../../components/Trading-Investing-App-Page/TradingInvestingHeader";
import { ServicesOffer } from "../../components/Trading-Investing-App-Page/ServicesOffer";
import { WaysToGrow } from "../../components/Trading-Investing-App-Page/WaysToGrow";
import { SolutionFrame } from "../../components/Trading-Investing-App-Page/SolutionFrame";
// import { SolutionFrameTwo } from "../../components/Trading-Investing-App-Page/SolutionFrameTwo";
import { WhyChooseBF } from "../../components/Trading-Investing-App-Page/WhyChooseBF";
// import { TradingInvestingFooter } from "../../components/Trading-Investing-App-Page/TradingInvestingFooter";

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
        <TradingInvestingHeader />
        <ServicesOffer />
        <WaysToGrow />
        <SolutionFrame />
        {/* <SolutionFrameTwo /> */}
        <WhyChooseBF />
        {/*    <TradingInvestingFooter />  */}
      </main>
    </div>
  );
}
