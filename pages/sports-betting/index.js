import React from "react";

import { SportsBanner } from "../../components/Sportsbetting/SportsBanner";
import { sportsBettingLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { SportsPanels } from "../../components/Sportsbetting/SportsPanels";
import { BettingSpecial } from "../../components/Sportsbetting/BettingSpecial";
import { Bettingwhy } from "../../components/Sportsbetting/Bettingwhy";

import Head from "next/head";

export default function SportsBetting() {
  return (
    <div>
      <Head>
        <title> Sports Betting Web and App development | Bottom Funnel </title>
        <meta
          name="description"
          content="Do you want to bet on sports but don't know where to start? 
          Look no further! We have the perfect sports betting web page for 
          you that will guide you through the process of creating your very 
          own sports betting web app."
        />
      </Head>

      <main>
        <SportsBanner />
        <Trusted partnerLogo={sportsBettingLogo} />
        <SportsPanels />
        <BettingSpecial />
        <Bettingwhy />
      </main>
    </div>
  );
}
