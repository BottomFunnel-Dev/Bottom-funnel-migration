import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import Head from "next/head";
import dynamic from "next/dynamic";

const Seosection = dynamic(
  () => import("../../components/SEO/SEO section/Seosection"),
  {
    loading: () => "loading...",
  },
);
const Seostats = dynamic(
  () => import("../../components/SEO/Seostats/Seostats"),
  { loading: () => "loading..." },
);
const Reviews = dynamic(
  () => import("../../components/SEO/SeoReviews/Reviews"),
  { loading: () => "loading..." },
);
const Seotrusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const EnquiryNow = dynamic(
  () => import("../../components/SEO/EnquiryNow/EnquiryNow"),
  { loading: () => "loading..." },
);
const SeoServices = dynamic(
  () => import("../../components/SEO/SeoServices/SeoServices"),
  { loading: () => "loading..." },
);

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
