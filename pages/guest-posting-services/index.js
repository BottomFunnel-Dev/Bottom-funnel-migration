import React from "react";
import SeoguestSection from "../../components/Seoguest/SeoguestSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

import Head from "next/head";

export default function SeoGuest() {
  return (
    <div>
      <Head>
        <title>
          Professional Guest Posting Services Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Looking to get exposure for your website or blog by 
          writing SEO guest posts for various search 
          engines? Here are some top SEO guest post 
          companies that offer reliable and budget-friendly
          options."
        />
      </Head>

      <main>
        <SeoguestSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />
      </main>
    </div>
  );
}
