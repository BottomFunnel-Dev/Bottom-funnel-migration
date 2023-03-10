import React from "react";
import dynamic from "next/dynamic";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";

const SeoEmailSection = dynamic(
  () => import("../../components/SeoEmail/SeoEmailSection"),
  { loading: () => "loading..." },
);
const Reviews = dynamic(
  () => import("../../components/SEO/SeoReviews/Reviews"),
  { loading: () => "loading..." },
);
const Seostats = dynamic(
  () => import("../../components/SEO/Seostats/Seostats"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const SeoServices = dynamic(
  () => import("../../components/SEO/SeoServices/SeoServices"),
  { loading: () => "loading..." },
);

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
