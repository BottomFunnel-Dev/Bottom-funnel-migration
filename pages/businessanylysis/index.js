import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const BusinessAnalysisBanner = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessAnalysisBanner"),
  { loading: () => "loading..." },
);
const BusinessAnalysisLowerBanner = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessAnalysisLowerBanner"),
  { loading: () => "loading..." },
);
const BusinessChallenge = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessChallenge"),
  { loading: () => "loading..." },
);
const BusinessFramework = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessFramework"),
  { loading: () => "loading..." },
);

export default function BusinessAnalysis() {
  return (
    <div>
      <Head>
        <title>
          Bottom Funnel | Digital Business Analysis Project Management
        </title>
        <meta
          name="description"
          content="The role of a business analyst is vital in any organization. 
          Our blog will cover the various responsibilities of a BA and 
          how to be successful in the role. Stay tuned!"
        />
      </Head>
      <main>
        <BusinessAnalysisBanner />
        <BusinessChallenge />
        <BusinessFramework />
        <BusinessAnalysisLowerBanner />
      </main>
    </div>
  );
}
