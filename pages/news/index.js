import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { newsLogo } from "../../components/Data/SeopartnerData";
import {
  newswhychooseData,
  oursuiteData,
} from "../../components/News/newsIndustriesData";

const Newspublish = dynamic(() => import("../../components/News/Newspublish"), {
  loading: () => "loading...",
});
const Newstrategy = dynamic(() => import("../../components/News/Newstrategy"), {
  loading: () => "loading...",
});
const Newsintro = dynamic(() => import("../../components/News/Newsintro"), {
  loading: () => "loading...",
});
const Newspaper = dynamic(() => import("../../components/News/Newspaper"), {
  loading: () => "loading...",
});
const Newsfeature = dynamic(() => import("../../components/News/Newsfeature"), {
  loading: () => "loading...",
});
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const EducationWhyUS = dynamic(
  () => import("../../components/Educationp/EducationWhyUS"),
  {
    loading: () => "loading...",
  },
);
const EducationOurSuite = dynamic(
  () => import("../../components/Educationp/EducationOurSuite"),
  { loading: () => "loading..." },
);

export default function News() {
  return (
    <div>
      <Head>
        <title>News Web and App development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="A top news web app development company that can help you create a news web app that is both user-friendly and informative? 
          Read on to find out more about our team, services, and portfolio."
        />
      </Head>

      <main>
        <Newsintro />
        <Trusted partnerLogo={newsLogo} />
        <Newspaper />
        <Newsfeature />
        <Newspublish />
        <Newstrategy />
        <EducationOurSuite data={oursuiteData} />
        <EducationWhyUS data={newswhychooseData} />
      </main>
    </div>
  );
}
