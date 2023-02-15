import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";

import Seosection from "../../components/SEO/SEO section/Seosection";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seotrusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import EnquiryNow from "../../components/SEO/EnquiryNow/EnquiryNow";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function SEOMainPage() {
  return (
    <div>
      <Head>
        <title>Professional SEO Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to improve your SEO rankings and drive more
          traffic to your website? We've got the best SEO 
         services solutions for you. Read on to know!."
        />
      </Head>

      <main>
        <Seosection />
        <Seostats />
        <Reviews />
        {/* <Seotrusted /> */}
        <Trusted partnerLogo={dmpagesLogo} />
        <EnquiryNow />
        <SeoServices />
      </main>
    </div>
  );
}
