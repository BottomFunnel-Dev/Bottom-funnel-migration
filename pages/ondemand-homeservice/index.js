import React from "react";

import OndemandHero from "../../components/OndemandHome/OndemandHero";
import { homesolutionsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import OndemandQuote from "../../components/OndemandHome/OndemandQuote";
import HomeServices from "../../components/OndemandHome/HomeServices";
import ExclusiveFeature from "../../components/OndemandHome/ExclusiveFeature";

import OnDemandCustomerSection from "../../components/OndemandHome/OnDemandCustomer";

import Head from "next/head";
import OnDemandAdminSection from "../../components/OndemandHome/OnDemandAdminSection";
import OnDemandDriver from "../../components/OndemandHome/OnDemandDriver";

export default function OnDemandSection() {
  return (
    <div>
      <Head>
        <title>
          On Demand Home Services web and App Development Company | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a company that can develop a web app for your business? Look no further than On Demand Home
          Services. We are a professional web app development company that can help you design and build a top-notch web app for
          your business."
        />
      </Head>

      <main>
        <OndemandHero />
        <Trusted partnerLogo={homesolutionsLogo} />
        <OndemandQuote />
        <HomeServices />
        <ExclusiveFeature />
        <OnDemandCustomerSection />
        <OnDemandAdminSection />
        <OnDemandDriver />
      </main>
    </div>
  );
}
