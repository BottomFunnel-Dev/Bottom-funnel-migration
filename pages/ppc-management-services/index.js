import React from "react";
import SeoPPCSection from "../../components/SeoPPC/SeoPPCSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function SEOPPC() {
  return (
    <div>
      <Head>
        <title> Professional PPC Services | Bottom Funnel </title>
        <meta
          name="description"
          content="Are you looking to get your business ahead in the competitive PPC search engine market? Our SEO 
          PPC solutions can help. Read on to find out."
        />
      </Head>

      <main>
        <SeoPPCSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />
      </main>
    </div>
  );
}
