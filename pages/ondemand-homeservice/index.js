import React from "react";

import OndemandHero from "../../components/OndemandHome/OndemandHero";
import { homesolutionsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import OndemandQuote from "../../components/OndemandHome/OndemandQuote";
import HomeServices from "../../components/OndemandHome/HomeServices";
import ExclusiveFeature from "../../components/OndemandHome/ExclusiveFeature";
import KeyFeatures from "../../components/OndemandHome/KeyFeatures";

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

export default function OnDemandSection() {
  return (
    <div>
      <Head>
        <title>OnDemandSection Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a company that can develop a web app for
        your business? Look no further than On Demand Home Services. 
        We are a professional web app development company that can
         help you design and build a top-notch web app for your business."
        />
      </Head>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <OndemandHero />
      <Trusted partnerLogo={homesolutionsLogo} />
      <OndemandQuote />
      <HomeServices />
      <ExclusiveFeature />
      <KeyFeatures />

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
    </div>
  );
}
