import React from "react";

import { SportsBanner } from "../../components/Sportsbetting/SportsBanner";
import { sportsBettingLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { SportsPanels } from "../../components/Sportsbetting/SportsPanels";
import { BettingSpecial } from "../../components/Sportsbetting/BettingSpecial";
import { Bettingwhy } from "../../components/Sportsbetting/Bettingwhy";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function SportsBetting() {
  return (
    <div>
      <Head>
        <title>Sports Betting Web and App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Do you want to bet on sports but don't know where to start? 
          Look no further! We have the perfect sports betting web page for 
          you that will guide you through the process of creating your very 
          own sports betting web app."
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <SportsBanner />
        <Trusted partnerLogo={sportsBettingLogo} />
        <SportsPanels />
        <BettingSpecial />
        <Bettingwhy />

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
