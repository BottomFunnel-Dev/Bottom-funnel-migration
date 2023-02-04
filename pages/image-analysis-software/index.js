import React from "react";

import { AnalysisSwBanner } from "../../components/ImageAnalysisSoftwarePage/AnalysisSwBanner/AnalysisSwBanner";
import { AnalysisCoreTask } from "../../components/ImageAnalysisSoftwarePage/AnalysisCoreTask/AnalysisCoreTask";
import { AnalysisOffer } from "../../components/ImageAnalysisSoftwarePage/AnalysisOffer/AnalysisOffer";
import { AnalysisMidBanner } from "../../components/ImageAnalysisSoftwarePage/AnalysisMidBanner/AnalysisMidBanner";
import { AnalysisWhyBF } from "../../components/ImageAnalysisSoftwarePage/AnalysisWhyBF/AnalysisWhyBF";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function ImageAnalysisSoftware() {
  return (
    <div>

      <Head>
        <title> Image Analysis Software Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for image analysis software services? 
          Use our comprehensive list to compare the top 
          offerings in the market today."
        />
      </Head>
      <main>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <AnalysisSwBanner />
      <AnalysisCoreTask />
      <AnalysisOffer />
      <AnalysisMidBanner />
      <AnalysisWhyBF />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />

      </main>
    </div>
  );
}
