import React from "react";
import SeoSEMSection from "../../components/SeoSEM/SeoSEMSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function SEOSEM() {
  return (
    <div>
      <Head>
        <title>Professional SEM Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to tackle the complex and challenging field 
          of SEO but don't know where to start? Our SEO 
          SEM solutions can help you overcome your 
          challenges and become a SEO SEM expert. 
          Read on for details."
        />
      </Head>

      <main>
        <SeoSEMSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />
      </main>
    </div>
  );
}
