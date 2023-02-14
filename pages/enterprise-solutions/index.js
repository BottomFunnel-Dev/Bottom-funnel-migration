import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import { EnterpriseWebBanner } from "../../components/EnterpriseWebPage/EnterpriseWebBanner/EnterpriseWebBanner";
import { EnterpriseWebAnalysis } from "../../components/EnterpriseWebPage/EnterpriseWebAnalysis/EnterpriseWebAnalysis";
import { EnterpriseSupporting } from "../../components/EnterpriseWebPage/EnterpriseSupporting/EnterpriseSupporting";
import { EnterpriseWebSolutions } from "../../components/EnterpriseWebPage/EnterpriseWebSolutions/EnterpriseWebSolutions";
import { EnterpriseMidBanner } from "../../components/EnterpriseWebPage/EnterpriseMidBanner/EnterpriseMidBanner";
import { EnterpriseWhyBF } from "../../components/EnterpriseWebPage/EnterpriseWhyBF/EnterpriseWhyBF";
import { EnterpriseSlider } from "../../components/EnterpriseWebPage/EnterpriseSlider/EnterpriseSlider";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function EnterprisePage() {
  return (
    <div>
      <Head>
        <title>Enterprise Solutions development | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking to provide your business with enterprise 
          solutions services? Our extensive portfolio of 
          offerings includes everything you need to grow your 
          business. Read on for details."
        />
      </Head>
      <main>
        <EnterpriseWebBanner />
        <EnterpriseWebAnalysis />
        <EnterpriseSupporting />
        <EnterpriseWebSolutions />
        <EnterpriseMidBanner />
        <EnterpriseWhyBF />
        <EnterpriseSlider />
        <CustomWebForm />
      </main>
    </div>
  );
}
