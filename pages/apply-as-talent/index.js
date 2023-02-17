import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { newsLogo } from "../../components/Data/SeopartnerData";
import { currentopeningdata } from "../../Data/ApplyAsTalent";

// ---------------importing components with lazy loading-----------------------
const ApplyNavbar = dynamic(
  () => import("../../components/ApplyasTalent/applyNavbar/ApplyNavbar"),
  { loading: () => "loading..." },
);
const Banner = dynamic(
  () => import("../../components/ApplyasTalent/banner/Banner"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const Whywork = dynamic(
  () => import("../../components/ApplyasTalent/whyWork/Whywork"),
  {
    loading: () => "loading...",
  },
);
const JobOpening = dynamic(
  () => import("../../components/ApplyasTalent/Opening/JobOpening"),
  {
    loading: () => "loading...",
  },
);
const Benifits = dynamic(
  () => import("../../components/ApplyasTalent/Benifits/Benifits"),
  { loading: () => "loading..." },
);
const Lowerbanner = dynamic(
  () =>
    import("../../components/ApplyasTalent/Applytalentlowerbanner/Lowerbanner"),
  { loading: () => "loading..." },
);
const Applicationprocess = dynamic(
  () =>
    import(
      "../../components/ApplyasTalent/ApplicationProcess/Applicationprocess"
    ),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
export default function () {
  return (
    <div>
      <Head>
        <title>apply as talent</title>
      </Head>
      <ApplyNavbar />
      <Banner />
      <Trusted partnerLogo={newsLogo} />
      <Whywork />
      <JobOpening currentopeningdata={currentopeningdata} />
      <Benifits />
      <Lowerbanner />
      <Applicationprocess />
    </div>
  );
}
