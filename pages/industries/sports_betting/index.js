import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { sportsBettingLogo } from "../../../components/Data/SeopartnerData";

const SportsBanner = dynamic(
  () => import("../../../components/Sportsbetting/SportsBanner"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  {
    loading: () => "loading...",
  },
);
const SportsPanels = dynamic(
  () => import("../../../components/Sportsbetting/SportsPanels"),
  { loading: () => "loading..." },
);
const BettingSpecial = dynamic(
  () => import("../../../components/Sportsbetting/BettingSpecial"),
  { loading: () => "loading..." },
);
const Bettingwhy = dynamic(
  () => import("../../../components/Sportsbetting/Bettingwhy"),
  { loading: () => "loading..." },
);

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
