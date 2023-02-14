import React from "react";

import OndemandHero from "../../components/OndemandHome/OndemandHero";
import { homesolutionsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import OndemandQuote from "../../components/OndemandHome/OndemandQuote";
import HomeServices from "../../components/OndemandHome/HomeServices";
import ExclusiveFeature from "../../components/OndemandHome/ExclusiveFeature";
import KeyFeatures from "../../components/OndemandHome/KeyFeatures";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function OnDemandSection() {
  return (
    <div>
      <Head>
        <title>
          On Demand Home Services web and App Development Company | Bottom
          Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a company that can develop a web app for
        your business? Look no further than On Demand Home Services. 
        We are a professional web app development company that can
         help you design and build a top-notch web app for your business."
        />
      </Head>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <OndemandHero />
      <Trusted partnerLogo={homesolutionsLogo} />
      <OndemandQuote />
      <HomeServices />
      <ExclusiveFeature />
      <KeyFeatures />

      <StoriesSection />
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
