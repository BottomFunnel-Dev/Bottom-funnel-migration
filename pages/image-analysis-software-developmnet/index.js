import React from "react";

import { AnalysisSwBanner } from "../../components/ImageAnalysisSoftwarePage/AnalysisSwBanner/AnalysisSwBanner";
import { AnalysisCoreTask } from "../../components/ImageAnalysisSoftwarePage/AnalysisCoreTask/AnalysisCoreTask";
import { AnalysisOffer } from "../../components/ImageAnalysisSoftwarePage/AnalysisOffer/AnalysisOffer";
import { AnalysisMidBanner } from "../../components/ImageAnalysisSoftwarePage/AnalysisMidBanner/AnalysisMidBanner";
import { AnalysisWhyBF } from "../../components/ImageAnalysisSoftwarePage/AnalysisWhyBF/AnalysisWhyBF";

import Head from "next/head";

export default function ImageAnalysisSoftware() {
  return (
    <div>
      <Head>
        <title>Image Analysis Software Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for image analysis software services? 
          Use our comprehensive list to compare the top 
          offerings in the market today."
        />
      </Head>
      <main>

        <AnalysisSwBanner />
        <AnalysisCoreTask />
        <AnalysisOffer />
        <AnalysisMidBanner />
        <AnalysisWhyBF />

      </main>
    </div>
  );
}
