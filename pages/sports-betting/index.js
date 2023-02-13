import React from "react";

import { SportsBanner } from "../../components/Sportsbetting/SportsBanner";
import { sportsBettingLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { SportsPanels } from "../../components/Sportsbetting/SportsPanels";
import { BettingSpecial } from "../../components/Sportsbetting/BettingSpecial";
import { Bettingwhy } from "../../components/Sportsbetting/Bettingwhy";

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
