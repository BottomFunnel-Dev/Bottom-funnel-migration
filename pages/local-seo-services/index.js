import React from "react";
import Seostats from "../../components/SEO/Seostats/Seostats";
import { SeoLocalSection } from "../../components/SeoLocalServices/SeoLocalSection";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function LocalSEO() {
  return (
    <div>
      <Head>
        <title>Local SEO Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Need some local SEO services for your business? 
          We've got you covered. Our range of reliable and 
          effective SEO services include organic search 
          engine optimization, PPC campaigns, website 
          optimization, and much more. Check them out!"
        />
      </Head>

      <main>

        <SeoLocalSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />

      </main>
    </div>
  );
}
