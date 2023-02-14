import React from "react";

import SeoEmailSection from "../../components/SeoEmail/SeoEmailSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function () {
  return (
    <div>
      <Head>
        <title>Professional SEO Email Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn about our comprehensive SEO Email Service 
           solutions and how they can help your business by
           reading our blog today."
        />
      </Head>

      <main>
        <SeoEmailSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />
      </main>
    </div>
  );
}
