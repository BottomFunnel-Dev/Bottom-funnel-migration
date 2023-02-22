import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import Head from "next/head";
import dynamic from "next/dynamic";

const SeoSEMSection = dynamic(
  () => import("../../components/SeoSEM/SeoSEMSection"),
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
