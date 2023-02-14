import React from "react";
import SeoLinkSection from "../../components/SeoLink/SeoLinkSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function SeoLinks() {
  return (
    <div>
      <Head>
        <title>SEO Link Building Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="SEO Link Building Solutions for businesses. Our
          link building services focus on providing top-notch 
         results to our clients. Read on to know more about 
         these services"
        />
      </Head>

      <main>
        <SeoLinkSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />
      </main>
    </div>
  );
}
